const fs = require('fs');
const path = require('path');
const {getProducts} = require("../models/product.model");

const shopControllers = {
    shop: async  (req, res) => {
        const response = await getProducts();

        if (response.error) {
            res.send(response.message);
        } else {
            const products = response.rows.slice(0, 9);

            res.render('shop/shop', {
                title: 'Funkoshop | Tienda',
                products: products
            });
        }
    },

    item: (req, res) => {
        let products, product, slider;

        try {
            const itemJson = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
            products = JSON.parse(itemJson);

            const sliderJson = fs.readFileSync(path.resolve(__dirname, '../data/slider.json'));
            slider = {
                title: 'Productos relacionados',
                products: JSON.parse(sliderJson).products
            };
        } catch (e) {
            res.status(500);
        };

        try {
            product = products.find(product => product.product_id === parseInt(req.params.id));
        } catch (e) {
            res.status(404);
        };

        res.render('shop/item', {
            title: `Funkoshop | ${product.product_name}`,
            product,
            slider
        });
    },

    addItemToCart: (req, res) => {
        res.send('Esta ruta agrega un ítem al carrito.')
    },

    cart: (req, res) => { 
        const items = fs.readFileSync(path.resolve(__dirname, '../data/cart.json'));
        const products = JSON.parse(items);
        res.render('shop/cart', {
            title: 'Funkoshop | Carrito',
            products: products
        });
    },

    checkout: (req, res) => {
        res.send('Esta ruta procesa el carrito.')
    },

    contact:(req, res) => {
        res.render('shop/contact', {
            title: 'Funkoshop | Contacto',
        });
    },

    submitInquiry:(req, res) => {
        res.send('Esta ruta es para enviar la consulta a la tienda.')
    }
}

module.exports = shopControllers;
