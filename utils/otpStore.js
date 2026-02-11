const otpStore = {};

const fixedOTPs = ["1234", "5678", "7889", "1209"];

module.exports = {
    generateOTP: (phone) => {
        const otp = fixedOTPs[Math.floor(Math.random() * 4)];
        otpStore[phone] = otp;
        return otp;
    },

    verifyOTP: (phone, enteredOtp) => {
        return otpStore[phone] === enteredOtp;
    },

    clearOTP: (phone) => {
        delete otpStore[phone];
    }
};

