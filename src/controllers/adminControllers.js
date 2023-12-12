const { name } = require('ejs');
const fs = require('fs');
const path = require('path')

const adminControllers = {
    admin: (req, res) => {
        const items = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        const productos = JSON.parse(items);
        res.render('admin/admin', {
            title: 'Funkoshop | Administrador',
            productos
        })
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
        })
    },
    createItem: (req, res) => {
        res.send('Esta ruta trata de agregar un ítem de la base de datos.')
    },
    edit: (req, res) => {
        let products, product;
        const itemJson = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        products = JSON.parse(itemJson);

        product = products.find(product => product.product_id === parseInt(req.params.id));

        res.render('admin/edit', {
            title: 'Funkoshop | Editar',
            product
        })
    },
    editItem: (req, res) => {
        res.send('Esta ruta trata de actualizar la información de un ítem en la base de datos.')
    },
    deleteItem: (req, res) => {
        res.send('Esta ruta trata de eliminar un ítem de la base de datos.')
    },
}

module.exports = adminControllers;
``