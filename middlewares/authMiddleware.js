module.exports = (req, res, next) => {
    if (!req.session.username || !req.session.role) {
        return res.status(401).json({ message: 'Unauthorized: No session data available.' });
    }
    next(); 
};
