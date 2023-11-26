const express = require('express');
const app = express();

//requerimos la dependencia
require('dotenv').config();
//leemos la constante
const PORT = process.env.PORT;

app.use(express.static('public'));

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`server running on localhost, port ${PORT}`)
});