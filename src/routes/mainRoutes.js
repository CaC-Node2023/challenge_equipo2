const express = require('express');
const router = express();


router.get('/home', (req, res) => {
    res.send('Esta ruta devuelve la página home.')
})
router.get('/contact', (req, res) => {
    res.send('Esta ruta devuelve la página de contacto.')
})
router.get('/about', (req, res) => {
    res.send('Esta ruta devuelve la página "Acerca de".')
})
router.get('/faqs', (req, res) => {
    res.send('Esta ruta devuelve la página "Preguntas frecuentes".')
})

module.exports = router;
