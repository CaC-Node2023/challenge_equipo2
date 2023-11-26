const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Esta ruta devuelve la página de la tienda.')
})
router.get('/item/:id', (req, res) => {
    res.send('Esta ruta devuelve la página del ítem.')
})
router.post('/item/:id/add', (req, res) => {
    res.send('Esta ruta agrega un ítem al carrito.')
})
router.get('/cart', (req, res) => {
    res.send('Esta ruta devuelve la página del carrito.')
})
router.post('/cart', (req, res) => {
    res.send('Esta ruta procesa el carrito.')
})

module.exports = router;
