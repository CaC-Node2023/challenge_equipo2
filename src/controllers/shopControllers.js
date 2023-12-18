const fs = require('fs');
const path = require('path');
const {getProducts, getOne, getCount} = require("../models/product.model");

const shopControllers = {
    shop: async (req, res) => {
        const currentPage = parseInt(req.query.page) || 1;

        let products = null;
        const orderFields = ['product_id DESC'];
        const itemsPerPage = 9;
        const offset = (currentPage - 1) * itemsPerPage;

        const response = await getProducts(null, orderFields, itemsPerPage, offset);

        if (response.error) {
            res.send(response.message);
        } else {
            products = response.rows;
        }

        const totalProducts = await getCount();
        const totalPages = Math.ceil(totalProducts / itemsPerPage);

        res.render('shop/shop', {
            title: 'Funkoshop | Tienda',
            products: products,
            currentPage,
            totalPages
        })
    },

    item: async (req, res) => {
        const { id } = req.params;

        //Item:
        let product = null;

        const itemResponse = await getOne(id);

        if (itemResponse.error) {
            res.send(itemResponse.message);
        } else {
            [product] = itemResponse.rows;
        }
        //

        //Slider:
        let slider = null;

        const conditions = {
            'product.licence_id': product.licence_id,
            product_id: {
                value: id,
                operator: '<>',
            }
        };
        const orderFields = ['product_id'];

        const sliderResponse = await getProducts(conditions, orderFields);

        if (sliderResponse.error) {
            res.send(sliderResponse.message);
        } else {
            slider = {
                title: 'Productos relacionados',
                products: sliderResponse.rows
            };
        }
        //

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
