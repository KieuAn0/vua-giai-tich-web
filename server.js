const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

// Route phục vụ trang chủ index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Kết nối MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vua_giai_tich';
const JWT_SECRET = process.env.JWT_SECRET || 'vua_giai_tich_super_secret_key_2026';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Đã kết nối thành công với MongoDB!'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// Cấu hình gửi mail qua Gmail Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Bộ nhớ tạm lưu mã OTP
const otpStorage = {};

// ==================== SCHEMA & MODEL ====================
const userSchema = new mongoose.Schema({
    id: { type: String, unique: true, sparse: true }, 
    name: { type: String, default: 'Sinh Viên HUST' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    availableAttempts: { type: Number, default: 0 },
    vipExpireTimestamp: { type: Number, default: 0 },
    joinedDate: { type: String, default: () => new Date().toLocaleDateString('vi-VN') },
    usedGiftcodes: { type: [String], default: [] },
    pendingRequests: { type: Array, default: [] },
    transactionHistory: { type: Array, default: [] },
    history: { type: Array, default: [] },
    currentDeviceToken: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

// Middleware kiểm tra tính hợp lệ của Token
const authenticateDevice = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Chưa đăng nhập!' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || user.currentDeviceToken !== token) {
            return res.status(403).json({ success: false, message: 'Tài khoản đã đăng nhập ở thiết bị khác!' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Phiên làm việc không hợp lệ hoặc đã hết hạn!' });
    }
};

// API: Lấy thông tin phiên hiện tại
app.get('/api/auth/me', authenticateDevice, (req, res) => {
    res.json({
        success: true,
        user: { 
            id: req.user.id,
            name: req.user.name, 
            email: req.user.email,
            availableAttempts: req.user.availableAttempts,
            vipExpireTimestamp: req.user.vipExpireTimestamp,
            joinedDate: req.user.joinedDate,
            usedGiftcodes: req.user.usedGiftcodes,
            pendingRequests: req.user.pendingRequests,
            transactionHistory: req.user.transactionHistory,
            history: req.user.history
        }
    });
});

// ==================== API ĐĂNG KÝ ====================
app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const cleanEmail = (email || '').trim().toLowerCase();
        const existingUser = await User.findOne({ email: cleanEmail });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email này đã được đăng ký tài khoản!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const permanentId = 'VGT-' + Math.floor(100000 + Math.random() * 900000);

        const newUser = new User({
            id: permanentId,
            name: name || cleanEmail.split('@')[0].toUpperCase(),
            email: cleanEmail,
            password: hashedPassword,
            joinedDate: new Date().toLocaleDateString('vi-VN')
        });

        await newUser.save();
        res.json({ success: true, message: 'Đăng ký tài khoản thành công!', id: permanentId });
    } catch (error) {
        console.error('Lỗi register:', error);
        res.status(500).json({ success: false, message: 'Lỗi server hệ thống!' });
    }
});

// ==================== API ĐĂNG NHẬP ====================
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const cleanEmail = (email || '').trim().toLowerCase();

        let user = await User.findOne({ email: cleanEmail });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
        }

        if (!user.id) {
            user.id = 'VGT-' + Math.floor(100000 + Math.random() * 900000);
            await user.save();
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
        user.currentDeviceToken = token;
        await user.save();

        res.json({
            success: true,
            message: 'Đăng nhập thành công!',
            token,
            user: { 
                id: user.id,
                name: user.name, 
                email: user.email,
                availableAttempts: user.availableAttempts,
                vipExpireTimestamp: user.vipExpireTimestamp,
                joinedDate: user.joinedDate,
                usedGiftcodes: user.usedGiftcodes,
                pendingRequests: user.pendingRequests,
                transactionHistory: user.transactionHistory,
                history: user.history
            }
        });
    } catch (error) {
        console.error('Lỗi login:', error);
        res.status(500).json({ success: false, message: 'Lỗi server hệ thống!' });
    }
});

// ==================== API ADMIN: CẤP PHÁT DỊCH VỤ TRỰC TIẾP MONGODB ====================
app.post('/api/admin/grant-service', async (req, res) => {
    try {
        const { adminEmail, targetIdOrEmail, type, quantity } = req.body;
        
        if (!adminEmail || adminEmail.toLowerCase() !== 'kieunguyenan5a2@gmail.com') {
            return res.status(403).json({ success: false, message: 'Bạn không có quyền quản trị hệ thống!' });
        }

        if (!targetIdOrEmail) {
            return res.status(400).json({ success: false, message: 'Vui lòng nhập ID hoặc Email tài khoản cần cấp!' });
        }

        const searchStr = targetIdOrEmail.trim();
        const user = await User.findOne({
            $or: [
                { email: searchStr.toLowerCase() },
                { id: { $regex: new RegExp('^' + searchStr + '$', 'i') } }
            ]
        });

        if (!user) {
            return res.status(404).json({ success: false, message: `Không tìm thấy tài khoản với ID/Email: ${searchStr} trên MongoDB!` });
        }

        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;
        let actionTitle = '';

        if (type === 'single') {
            const qty = parseInt(quantity) || 1;
            user.availableAttempts = (parseInt(user.availableAttempts) || 0) + qty;
            actionTitle = `Cấp thêm ${qty} lượt thi lẻ`;
        } else if (type === 'month') {
            const cur = (user.vipExpireTimestamp && user.vipExpireTimestamp > now) ? user.vipExpireTimestamp : now;
            user.vipExpireTimestamp = cur + (30 * oneDayMs);
            actionTitle = 'Cấp Vé Tháng (30 ngày)';
        } else if (type === 'semester') {
            const cur = (user.vipExpireTimestamp && user.vipExpireTimestamp > now) ? user.vipExpireTimestamp : now;
            user.vipExpireTimestamp = cur + (150 * oneDayMs);
            actionTitle = 'Cấp Vé Kỳ (150 ngày)';
        }

        if (!user.transactionHistory) user.transactionHistory = [];
        const txId = 'ADM' + Date.now().toString().slice(-6);
        user.transactionHistory.unshift({
            id: txId,
            title: '[Admin Cấp] ' + actionTitle,
            price: 0,
            type: type,
            time: new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'}) + ' ' + new Date().toLocaleDateString('vi-VN'),
            date: new Date().toLocaleDateString('vi-VN'),
            status: 'Thành công'
        });

        await user.save();
        res.json({ 
            success: true, 
            message: `Đã cấp thành công cho tài khoản ${user.name} (${user.id || user.email})!`,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                availableAttempts: user.availableAttempts,
                vipExpireTimestamp: user.vipExpireTimestamp,
                transactionHistory: user.transactionHistory
            }
        });
    } catch (error) {
        console.error('Lỗi grant-service:', error);
        res.status(500).json({ success: false, message: 'Lỗi server khi thực hiện cấp phát dịch vụ!' });
    }
});

// ==================== API ADMIN: DUYỆT ĐƠN NẠP TIỀN CHUYỂN KHOẢN ====================
app.post('/api/admin/approve-request', async (req, res) => {
    try {
        const { adminEmail, userEmail, requestId, type } = req.body;
        
        if (!adminEmail || adminEmail.toLowerCase() !== 'kieunguyenan5a2@gmail.com') {
            return res.status(403).json({ success: false, message: 'Không có quyền admin!' });
        }

        const user = await User.findOne({ email: userEmail.toLowerCase() });
        if (!user) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy tài khoản sinh viên!' });
        }

        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;

        if (user.availableAttempts === undefined) user.availableAttempts = 0;
        if (user.vipExpireTimestamp === undefined) user.vipExpireTimestamp = 0;

        if (type === 'single') {
            user.availableAttempts += 1;
        } else if (type === 'month') {
            const currentExpire = (user.vipExpireTimestamp > now) ? user.vipExpireTimestamp : now;
            user.vipExpireTimestamp = currentExpire + (30 * oneDayMs);
        } else if (type === 'semester') {
            const currentExpire = (user.vipExpireTimestamp > now) ? user.vipExpireTimestamp : now;
            user.vipExpireTimestamp = currentExpire + (150 * oneDayMs);
        }

        if (user.transactionHistory) {
            const tx = user.transactionHistory.find(t => t.id === requestId);
            if (tx) tx.status = 'Thành công';
        }
        if (user.pendingRequests) {
            user.pendingRequests = user.pendingRequests.filter(r => r.id !== requestId);
        }

        await user.save();
        res.json({ 
            success: true, 
            message: `Đã duyệt thành công cho tài khoản ${user.name}!`,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                availableAttempts: user.availableAttempts,
                vipExpireTimestamp: user.vipExpireTimestamp,
                transactionHistory: user.transactionHistory,
                pendingRequests: user.pendingRequests,
                history: user.history
            }
        });
    } catch (err) {
        console.error('Lỗi approve-request:', err);
        res.status(500).json({ success: false, message: 'Lỗi server khi duyệt đơn!' });
    }
});

// ==================== API GỬI MÃ OTP QUA GMAIL ====================
app.post('/api/auth/send-otp', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Vui lòng cung cấp email!' });
        }
        const cleanEmail = email.trim().toLowerCase();

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStorage[cleanEmail] = {
            otp,
            expiresAt: Date.now() + 5 * 60 * 1000
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail({
                from: `"Vua Giải Tích HUST" <${process.env.EMAIL_USER}>`,
                to: cleanEmail,
                subject: 'Mã OTP Khôi Phục Mật Khẩu - Vua Giải Tích',
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 500px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
                        <h2 style="color: #0891b2;">Khôi phục mật khẩu tài khoản Vua Giải Tích</h2>
                        <p>Mã xác thực OTP của bạn là:</p>
                        <div style="font-size: 32px; font-weight: bold; color: #06b6d4; letter-spacing: 5px; padding: 12px 0; text-align: center; background: #f8fafc; border-radius: 8px;">
                            ${otp}
                        </div>
                        <p style="margin-top: 15px; font-size: 13px; color: #64748b;">Mã có hiệu lực trong vòng <b>5 phút</b>. Vui lòng tuyệt đối không chia sẻ mã này cho người khác.</p>
                    </div>
                `
            });
        }

        res.json({ success: true, message: 'Đã gửi mã OTP thành công về Gmail của bạn!' });
    } catch (error) {
        console.error('Lỗi gửi mail OTP:', error.message);
        res.status(500).json({ success: false, message: 'Lỗi server khi gửi email OTP!' });
    }
});

// ==================== API XÁC THỰC OTP & ĐỔI MẬT KHẨU ====================
app.post('/api/auth/verify-otp-reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        const cleanEmail = (email || '').trim().toLowerCase();
        const record = otpStorage[cleanEmail];

        if (!record || record.otp !== (otp || '').trim() || Date.now() > record.expiresAt) {
            return res.status(400).json({ success: false, message: 'Mã OTP không chính xác hoặc đã hết hạn!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        let user = await User.findOne({ email: cleanEmail });
        if (user) {
            user.password = hashedPassword;
            user.currentDeviceToken = null;
            await user.save();
        } else {
            user = new User({
                id: 'VGT-' + Math.floor(100000 + Math.random() * 900000),
                name: cleanEmail.split('@')[0].toUpperCase(),
                email: cleanEmail,
                password: hashedPassword
            });
            await user.save();
        }

        delete otpStorage[cleanEmail];
        res.json({ success: true, message: 'Đặt lại mật khẩu thành công! Hãy đăng nhập lại.' });
    } catch (error) {
        console.error('Lỗi verify-otp:', error);
        res.status(500).json({ success: false, message: 'Lỗi server hệ thống!' });
    }
});

// Khởi chạy Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server Backend đang chạy tại cổng http://localhost:${PORT}`);
});
