const { name } = require('ejs');
const fs = require('fs');
const path = require('path');
const {getProducts, addProduct} = require("../models/product.model");

const adminControllers = {
    admin: (req, res) => {
        const items = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        const products = JSON.parse(items);
        res.render('admin/admin', {
            title: 'Funkoshop | Administrador',
            products: products
        });
    },

    create: (req, res) => {
        const createJson = fs.readFileSync(path.resolve(__dirname, '../data/create.json'));
        const content = JSON.parse(createJson);
        let categories = content.categories;
        let licences = content.licences;

        res.render('admin/create', {
            title: 'Funkoshop | Crear',
            categories,
            licences
        });
    },

    createItem: async (req, res) => {
        const schema = {
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            product_sku: req.body.sku,
            dues: req.body.installments,
            img_front: req.body.pictures[1],
            img_back: req.body.pictures[0],
            category_id: req.body.category,
            licence_id: req.body.license
        };
        const arrayLoco = [Object.values(schema)];
        const response = await addProduct(arrayLoco);
        console.log(response);

        res.redirect('/admin')
    },

    edit: (req, res) => {
        const createJson = fs.readFileSync(path.resolve(__dirname, '../data/create.json'));
        const content = JSON.parse(createJson);
        let categories = content.categories;
        let licences = content.licences;

        let products, product;
        const itemJson = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        products = JSON.parse(itemJson);

        product = products.find(product => product.product_id === parseInt(req.params.id));

        res.render('admin/edit', {
            title: 'Funkoshop | Editar',
            categories,
            licences,
            product
        });
    },

    editItem: (req, res) => {
        res.send('Esta ruta trata de actualizar la información de un ítem en la base de datos.')
    },

    deleteItem: (req, res) => {
        res.send('Esta ruta trata de eliminar un ítem de la base de datos.')
    }
};

module.exports = adminControllers;
