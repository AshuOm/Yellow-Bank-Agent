const sessions = {};

module.exports = {
    createSession: (phone) => {
        sessions[phone] = { authenticated: false };
    },

    authenticate: (phone) => {
        if (sessions[phone]) {
            sessions[phone].authenticated = true;
        }
    },

    clearSession: (phone) => {
        delete sessions[phone];
    },

    isAuthenticated: (phone) => {
        return sessions[phone]?.authenticated || false;
    }
};
