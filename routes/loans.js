const express = require("express");
const router = express.Router();
const { projectLoans } = require("../utils/projection");

const loanDatabase = [
    {
        loan_account_id: "YL12345",
        type: "Home Loan",
        tenure: 240,
        internal_code: "ABC",
        risk_score: 8.4,
        audit_date: "2024-01-01",
        extra_field1: "X",
        extra_field2: "Y"
    }
];

router.get("/accounts", (req, res) => {
    const projected = projectLoans(loanDatabase);
    res.json(projected);
});

router.get("/details/:id", (req, res) => {
    res.json({
        tenure: 240,
        interest_rate: 8.5,
        principal_pending: 450000,
        interest_pending: 12000,
        nominee: "Ravi Kumar"
    });
});

module.exports = router;
