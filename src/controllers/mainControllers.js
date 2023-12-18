const {getLicences} = require("../models/licence.model");
const {getProducts} = require("../models/product.model");

const mainControllers = {
    home: async (req, res) => {
        //Licencias:
        let licences = null;

        const licencesResponse = await getLicences();

        if (licencesResponse.error) {
            res.send(licencesResponse.message);
        } else {
            licences = licencesResponse.rows;
        }
        //

        //Slider:
        let slider = null;

        const orderFields = ['create_time DESC', 'product_id'];

        const sliderResponse = await getProducts(null, orderFields, 4);

        if (sliderResponse.error) {
            res.send(sliderResponse.message);
        } else {
            slider = {
                title: 'Últimos lanzamientos',
                products: sliderResponse.rows
            };
        }
        //

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
