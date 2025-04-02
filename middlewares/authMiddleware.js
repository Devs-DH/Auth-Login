module.exports = (req, res, next) => {
    // Check if session exists (user is logged in)
    if (!req.session.username || !req.session.role) {
        return res.status(401).json({ message: 'Unauthorized: No session data available.' });
    }
    next();  // Proceed to the next route or middleware
};
