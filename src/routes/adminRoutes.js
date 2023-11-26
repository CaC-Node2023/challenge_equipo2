const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Esta ruta devuelve la página del administrador.')
})
router.get('/create', (req, res) => {
    res.send('Esta ruta devuelve la página para crear un ítem.')
})
router.post('/create', (req, res) => {
    res.send('Esta ruta trata de agregar un ítem de la base de datos.')
})
router.get('/edit:id', (req, res) => {
    res.send('Esta ruta devuelve la página para editar un ítem.')
})
router.put('/edit/:id', (req, res) => {
    res.send('Esta ruta trata de actualizar la información de un ítem en la base de datos.')
})
router.delete('/delete/:id', (req, res) => {
    res.send('Esta ruta trata de eliminar un ítem de la base de datos.')
})

module.exports = router;
