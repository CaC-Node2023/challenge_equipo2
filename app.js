const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//requerimos la dependencia
require('dotenv').config();
//leemos la constante
const PORT = process.env.PORT;

//importacion de rutas:
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

//template engines:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//definimos la carpeta para archivos estáticos (css, js, img)
app.use(express.static(path.join(__dirname, 'public')));

//para parsear los datos recibidos con POST
app.use(express.urlencoded());
app.use(express.json());

//compatibilidad con métodos PUT y DELETE
app.use(methodOverride('_method'));

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