const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Variables de entorno:
require('dotenv').config();
const PORT = process.env.PORT;

//Importacion de rutas:
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

//Template engines:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//Definimos la carpeta para archivos estáticos (css, js, img):
app.use(express.static(path.join(__dirname, 'public')));

//Parseamos los datos recibidos con POST:
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Compatibilidad con métodos PUT y DELETE:
app.use(methodOverride('_method'));

//Definición de rutas:
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

//Middleware para manejar el error 404:
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`server running on localhost, port ${PORT}`)
});