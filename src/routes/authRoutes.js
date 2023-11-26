const express = require('express');
const router = express();

router.get('/login', (req, res) => {
    res.send('Esta ruta devuelve la página para iniciar sesión.')
})
router.post('/login', (req, res) => {
    res.send('Esta ruta manda la solicitud de inicio de sesión.')
})
router.get('/register', (req, res) => {
    res.send('Esta ruta devuelve la página para registrarse.')
})
router.post('/register', (req, res) => {
    res.send('Esta ruta manda la solicitud de registro con los datos del usuario.')
})
router.get('/logout', (req, res) => {
    res.send('Esta ruta trata de cerrar la sesión actual y redirecciona a la página de inicio.')
})

module.exports = router;
