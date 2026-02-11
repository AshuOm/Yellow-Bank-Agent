const express = require("express");
const router = express.Router();

router.post("/feedback", (req, res) => {
    const { rating, feedback } = req.body;

    console.log("CSAT:", rating, feedback);

    res.json({ message: "Thank you for your feedback!" });
});

module.exports = router;

