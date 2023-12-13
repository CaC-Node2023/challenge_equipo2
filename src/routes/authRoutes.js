const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
router.post('/login', authControllers.loginUser);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registerUser);
router.get('/logout', authControllers.logoutUser);

module.exports = router;
