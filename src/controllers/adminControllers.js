const fs = require('fs');
const path = require('path');
const {getProducts, addProduct, getOne, deleteOne, editProduct} = require("../models/product.model");
const {getCategories} = require("../models/category.model");
const {getLicences} = require("../models/licence.model");

const adminControllers = {
    admin: async (req, res) => {
        const response = await getProducts();

        if (response.error) {
            res.send(response.message);
        } else {
            const products = response.rows;

            res.render('admin/admin', {
                title: 'Funkoshop | Administrador',
                products: products
            });
        }
    },

    create: async (req, res) => {
        const categoriesResponse = await getCategories();
        const licencesResponse = await getLicences();

        if (categoriesResponse.error) {
            categoriesResponse.send(categoriesResponse.message);
        } else if (licencesResponse.error) {
            licencesResponse.send(licencesResponse.message);
        } else {
            const categories = categoriesResponse.rows;
            const licences = licencesResponse.rows;

            res.render('admin/create', {
                title: 'Funkoshop | Crear',
                categories: categories,
                licences: licences 
            });
        }
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
            img_front: '/img/uploaded/' + req.files[0].filename,
            img_back: '/img/uploaded/' + req.files[1].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence)
        };

        const arrayValues = [Object.values(schema)];

        const response = await addProduct(arrayValues);

        if (response.error) {
            res.send(response.message);
        } else {
            res.redirect('/admin')
        }
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const productResponse = await getOne(id);

        const categoriesResponse = await getCategories();
        const licencesResponse = await getLicences();

        if (productResponse.error) {
            productResponse.send(productResponse.message);
        } else if (categoriesResponse.error) {
            categoriesResponse.send(categoriesResponse.message);
        } else if (licencesResponse.error) {
            licencesResponse.send(licencesResponse.message);
        } else {
            const [product] = productResponse.rows;
            const categories = categoriesResponse.rows;
            const licences = licencesResponse.rows;

            res.render('admin/edit', {
                title: 'Funkoshop | Editar',
                product: product,
                categories: categories,
                licences: licences,
            });
        }
    },

    editItem: async (req, res) => {
        const schema = {
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            product_sku: req.body.sku,
            dues: Number(req.body.installments),
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence)
        }

        if (req.files.length > 0) {schema['img_front'] = '/img/uploaded/' + req.files[0].filename;}
        if (req.files.length > 1) {schema['img_back'] = '/img/uploaded/' + req.files[1].filename;}

        const { id } = req.params;

        const response = await editProduct(schema, {product_id: id});

        if (response.error) {
            res.send(response.message);
        } else {
            res.redirect('/admin')
        }
    },

    deleteItem: async (req, res) => {
        const { id } = req.params;

        const response = await deleteOne(id);

        if (response.error) {
            res.send(response.message);
        } else {
            res.redirect('/admin');
        }
    }
};

module.exports = adminControllers;
