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

// Kết nối MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vua_giai_tich';
const JWT_SECRET = process.env.JWT_SECRET || 'vua_giai_tich_super_secret_key_2026';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Đã kết nối thành công với MongoDB!'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// Cấu hình Nodemailer gửi OTP bằng Gmail App Password
// Cấu hình Nodemailer chuẩn cho Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true cho port 465, false cho 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Tránh lỗi SSL do mạng chặn
    }
});

// Lưu mã OTP tạm thời trong bộ nhớ RAM
const otpStorage = {};

// ==================== SCHEMA & MODEL ====================
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    currentDeviceToken: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

// Middleware kiểm tra tính hợp lệ của Token và thiết bị đăng nhập
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
        user: { name: req.user.name, email: req.user.email }
    });
});

// ==================== API ĐĂNG KÝ ====================
// ==================== API GỬI MÃ OTP QUÊN MẬT KHẨU ====================
app.post('/api/auth/send-otp', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Email này chưa được đăng ký tài khoản!' });
        }

        // Tạo mã OTP ngẫu nhiên 6 chữ số
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStorage[email] = {
            otp,
            expiresAt: Date.now() + 5 * 60 * 1000
        };

        // IN THẲNG MÃ RA TERMINAL ĐỂ TEST NHANH
        console.log(`\n========================================`);
        console.log(`🔑 [DEBUG OTP] Mã OTP của ${email} là: ${otp}`);
        console.log(`========================================\n`);

        // Gửi thư qua Gmail
        await transporter.sendMail({
            from: `"Vua Giải Tích" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Mã OTP Khôi Phục Mật Khẩu - Vua Giải Tích',
            html: `<h3>Mã xác nhận OTP của bạn là: <b style="color:#06b6d4; font-size: 24px;">${otp}</b></h3><p>Hiệu lực trong 5 phút.</p>`
        });

        res.json({ success: true, message: 'Đã gửi mã OTP thành công về Gmail của bạn!' });
    } catch (error) {
        console.error('Chi tiết lỗi gửi mail:', error);
        // Nếu gửi mail thất bại vẫn trả thông báo rõ lỗi
        res.status(500).json({ 
            success: false, 
            message: 'Lỗi gửi mail: ' + (error.message || 'Kiểm tra terminal server!') 
        });
    }
});

// ==================== API ĐĂNG NHẬP (1 THIẾT BỊ) ====================
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

        user.currentDeviceToken = token;
        await user.save();

        res.json({
            success: true,
            message: 'Đăng nhập thành công!',
            token,
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Lỗi server hệ thống!' });
    }
});

// ==================== API GỬI MÃ OTP QUÊN MẬT KHẨU ====================
app.post('/api/auth/send-otp', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Email này chưa được đăng ký tài khoản!' });
        }

        // Tạo mã OTP ngẫu nhiên 6 chữ số
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStorage[email] = {
            otp,
            expiresAt: Date.now() + 5 * 60 * 1000 // Có hiệu lực trong 5 phút
        };

        // Gửi thư đến email của người dùng
        await transporter.sendMail({
            from: `"Vua Giải Tích HUST" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Mã OTP Khôi Phục Mật Khẩu - Vua Giải Tích',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2>Khôi phục mật khẩu tài khoản Vua Giải Tích</h2>
                    <p>Mã xác thực OTP của bạn là:</p>
                    <div style="font-size: 28px; font-weight: bold; color: #06b6d4; letter-spacing: 4px; padding: 10px 0;">
                        ${otp}
                    </div>
                    <p>Mã có hiệu lực trong vòng <b>5 phút</b>. Vui lòng tuyệt đối không chia sẻ mã này cho người khác.</p>
                </div>
            `
        });

        res.json({ success: true, message: 'Đã gửi mã OTP thành công về Gmail của bạn!' });
    } catch (error) {
        console.error('Lỗi Nodemailer:', error);
        res.status(500).json({ success: false, message: 'Lỗi hệ thống khi gửi email OTP. Vui lòng kiểm tra lại cấu hình SMTP!' });
    }
});

// ==================== API ĐỔI MẬT KHẨU ====================
app.post('/api/auth/verify-otp-reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        const record = otpStorage[email];

        if (!record || record.otp !== otp || Date.now() > record.expiresAt) {
            return res.status(400).json({ success: false, message: 'Mã OTP không chính xác hoặc đã hết hạn!' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Không tìm thấy người dùng!' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.currentDeviceToken = null; // Huỷ token phiên đăng nhập cũ
        await user.save();

        delete otpStorage[email];

        res.json({ success: true, message: 'Đặt lại mật khẩu thành công! Hãy đăng nhập lại.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Lỗi server hệ thống!' });
    }
});

// Khởi chạy Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server Backend đang chạy tại cổng http://localhost:${PORT}`);
});