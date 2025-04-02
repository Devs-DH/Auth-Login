const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login',authController.login);

router.post('/logout',authMiddleware, authController.logout);

router.get('/profile', authMiddleware, (req, res) => {

    res.status(200).send(`Welcome ${req.session.username}, your role is ${req.session.role}`);
});

module.exports = router;