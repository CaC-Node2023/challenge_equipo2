const express = require('express');
const app = express();

//requerimos la dependencia
require('dotenv').config();
//leemos la constante
const PORT = process.env.PORT;

//importacion de rutas:
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

//definicion de rutas:
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`server running on localhost, port ${PORT}`)
});