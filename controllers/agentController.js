let conversationState = {};

exports.handleMessage = async (req, res) => {
    const { phone, message } = req.body;

    if (!conversationState[phone]) {
        conversationState[phone] = { step: "start" };
    }

    const state = conversationState[phone];

    if (state.step === "start") {
        if (message.toLowerCase().includes("loan")) {
            state.step = "collect_phone";
            return res.json({ reply: "Please share your registered phone number." });
        }
        return res.json({ reply: "How can I assist you today?" });
    }

    if (state.step === "collect_phone") {
        if (!/^[0-9]{10}$/.test(message)) {
            return res.json({ reply: "Please enter a valid 10-digit phone number." });
        }
        state.phone = message;
        state.step = "collect_dob";
        return res.json({ reply: "Please share your Date of Birth (DD/MM/YYYY)." });
    }

    if (state.step === "collect_dob") {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(message)) {
            return res.json({ reply: "Invalid DOB format. Use DD/MM/YYYY." });
        }
        state.dob = message;
        state.step = "otp";
        return res.json({ reply: "OTP has been generated. Please enter OTP." });
    }

    return res.json({ reply: "Something went wrong." });
};
