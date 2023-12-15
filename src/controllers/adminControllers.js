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
            product_price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            product_sku: req.body.sku,
            dues: Number(req.body.installments),
            img_front: '/img/uploaded/'+req.files[1].filename,
            img_back: '/img/uploaded/'+req.files[0].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.license)
        };
        const arrayValues = [Object.values(schema)];
        await addProduct(arrayValues);

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
