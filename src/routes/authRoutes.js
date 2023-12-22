const express = require('express');
const router = express.Router();


const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');
const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Ingrese un correo válido.'),
    body('password')
        .isLength({ min: 6})
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];


const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
router.post('/login', validateInput, loginValidation, authControllers.loginUser);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registerUser);
router.get('/logout', authControllers.logoutUser);

module.exports = router;
