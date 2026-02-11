const express = require("express");
const router = express.Router();
const otpStore = require("../utils/otpStore");
const sessionStore = require("../utils/sessionStore");

router.post("/trigger-otp", (req, res) => {
    const { phone, dob } = req.body;

    if (!/^[0-9]{10}$/.test(phone)) {
        return res.json({ error: "Invalid phone number." });
    }

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
        return res.json({ error: "Invalid DOB format." });
    }

    sessionStore.createSession(phone);

    const otp = otpStore.generateOTP(phone);

    res.json({
        message: "OTP generated successfully.",
        otp
    });
});

router.post("/verify-otp", (req, res) => {
    const { phone, otp } = req.body;

    if (!otpStore.verifyOTP(phone, otp)) {
        return res.json({ success: false, message: "Incorrect OTP." });
    }

    sessionStore.authenticate(phone);
    otpStore.clearOTP(phone);

    res.json({ success: true, message: "Authentication successful." });
});

module.exports = router;
