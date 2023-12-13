const fs = require('fs');
const path = require('path');

const mainControllers = {
    home: (req, res) => {
        const home = fs.readFileSync(path.resolve(__dirname, '../data/home.json'));
        const licences = JSON.parse(home).licences;

        const sliderJson = fs.readFileSync(path.resolve(__dirname, '../data/slider.json'));
        const slider = {
            title: 'Últimos lanzamientos',
            products: JSON.parse(sliderJson).products
        };

        res.render('home', {
            title: 'Funkoshop | Inicio',
            licences,
            slider
        });
    },

    about:(req, res) => {
        res.send('Esta ruta devuelve la página "Acerca de".');
    },

    faqs: (req, res) => {
        res.send('Esta ruta devuelve la página "Preguntas frecuentes".');
    }
}

module.exports = mainControllers;
