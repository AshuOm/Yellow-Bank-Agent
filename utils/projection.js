module.exports = {
    projectLoans: (data) => {
        return data.map(loan => ({
            loan_account_id: loan.loan_account_id,
            type: loan.type,
            tenure: loan.tenure
        }));
    }
};
