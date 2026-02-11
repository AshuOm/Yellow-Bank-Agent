module.exports = (req, res, next) => {
    const message = req.body?.message;

    if (message && /[^\x00-\x7F]/.test(message)) {
        return res.json({
            reply: "I am currently restricted to operate only in English. Please continue in English."
        });
    }
    next();
};
