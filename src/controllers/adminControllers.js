const fs = require('fs');
const path = require('path');
const {getProducts, addProduct, getOne, deleteOne, editProduct} = require("../models/product.model");
const {getCategories} = require("../models/category.model");
const {getLicences} = require("../models/licence.model");




const adminControllers = {
    admin: async (req, res) => {
        
        const products = await getProducts();

        if (products.error) {
            res.send(404); 
        } else {
            
            res.render('admin/admin', {
                title: 'Funkoshop | Administrador',
                products: products
            });
        }
    },

    create: async (req, res) => {

        const categoriesResponse = await getCategories();
        const licences = await getLicences();
        console.log(categoriesResponse.data);

        if (categoriesResponse.isError) {
            res.send(404);
        } else {
            res.render('admin/create', {
                title: 'Funkoshop | Crear',
                categories: categoriesResponse.data,
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
            img_front: '/img/uploaded/'+req.files[1].filename,
            img_back: '/img/uploaded/'+req.files[0].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.license)
        };
        const arrayValues = [Object.values(schema)];
        await addProduct(arrayValues);

        res.redirect('/admin')
    },

    edit: async (req, res) => {
        const { id } = req.params;
        
        const [product] = await getOne(id);
       
        const categoriesResponse = await getCategories();
        const licences = await getLicences();
    
        res.render('admin/edit', {
            title: 'Funkoshop | Editar',
            categories: categoriesResponse.data,
            licences: licences,
            product: product
        });
    },
    

    editItem: async (req, res) => {
        console.log(req.params);
        console.log(req.body);
        console.log(req.files);

        const haveImages = req.files.length !== 0;
        const { id } = req.params;
        // const [product] = await getOne({product_id: id})
        const schema = haveImages 
         ? {
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
        }:
        {
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            product_sku: req.body.sku,
            dues: Number(req.body.installments),
            category_id: Number(req.body.category),
            licence_id: Number(req.body.license)
        }
         
        
        await editProduct(schema, {product_id : id});


        res.redirect('/admin')
    },

    deleteItem: async (req, res) => {

        const { id } = req.params;
        const response = await deleteOne(id)
        if (response.error) {
            res.send(409)
            
        } else {
            
            res.redirect('/admin');
        }


    }
};

module.exports = adminControllers;
