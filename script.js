// Cấu hình URL Backend (tự động fallback nếu chạy dev cục bộ)
const BACKEND_URL = '/api/auth';

// Helper gọi API
async function apiPost(endpoint, payload) {
    try {
        const res = await fetch(`${BACKEND_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('vgt_token') || ''}`
            },
            body: JSON.stringify(payload)
        });
        return await res.json();
    } catch (err) {
        console.error(`Lỗi gọi API ${endpoint}:`, err);
        return { success: false, message: 'Không thể kết nối tới máy chủ backend!' };
    }
}

// 1. Đăng ký tài khoản
async function handleRegisterApi(name, email, password) {
    const data = await apiPost('/register', { name, email, password });
    if (!data.success) {
        showToast(data.message || 'Đăng ký thất bại!', 'error');
        return false;
    }
    return true;
}

// 2. Đăng nhập & lưu Token thiết bị
async function handleLoginApi(email, password) {
    const data = await apiPost('/login', { email, password });
    if (!data.success) {
        showToast(data.message || 'Đăng nhập thất bại!', 'error');
        return null;
    }
    localStorage.setItem('vgt_token', data.token);
    localStorage.setItem('vgt_user', JSON.stringify(data.user));
    return data.user;
}

// 3. Gửi OTP quên mật khẩu
async function sendOtpToEmail(email) {
    showToast('Đang gửi OTP về Gmail của bạn...', 'success');
    const data = await apiPost('/send-otp', { email });
    if (!data.success) {
        showToast(data.message || 'Không thể gửi mã OTP!', 'error');
        return false;
    }
    showToast(data.message, 'success');
    return true;
}

// 4. Xác nhận OTP & Đặt mật khẩu mới
async function handleResetPasswordApi(email, otp, newPassword) {
    const data = await apiPost('/verify-otp-reset-password', { email, otp, newPassword });
    if (!data.success) {
        showToast(data.message || 'Đặt lại mật khẩu thất bại!', 'error');
        return false;
    }
    showToast(data.message, 'success');
    return true;
}

// 5. Kiểm tra tính hợp lệ của phiên đăng nhập (Giới hạn 1 thiết bị)
async function verifyActiveDeviceSession() {
    const token = localStorage.getItem('vgt_token');
    if (!token) return null;

    try {
        const res = await fetch(`${BACKEND_URL}/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const result = await res.json();
        if (!result.success) {
            localStorage.removeItem('vgt_token');
            localStorage.removeItem('vgt_user');
            showToast('Phiên làm việc hết hạn hoặc tài khoản đã đăng nhập trên thiết bị khác!', 'error');
            return null;
        }
        return result.user;
    } catch {
        return null;
    }
}