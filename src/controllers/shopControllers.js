const fs = require('fs');
const path = require('path')

const shopControllers = {
    shop: (req, res) => {
        const items = fs.readFileSync(path.resolve(__dirname, '../data/items.json'));
        const productos = JSON.parse(items);
        res.render('shop/shop', {
            title: 'Funkoshop | Tienda',
            productos
        })
    },
    item: (req, res) => {
        res.render('shop/item', {
            title: 'Funkoshop | Item',
        })
    },
    addItemToCart: (req, res) => {
        res.send('Esta ruta agrega un ítem al carrito.')
    },
    cart: (req, res) => { 
        const items = fs.readFileSync(path.resolve(__dirname, '../data/cart.json'));
        const productos = JSON.parse(items);
        res.render('shop/cart', {
            title: 'Funkoshop | Carrito',
            productos,
        })
    },
    checkout: (req, res) => {
        res.send('Esta ruta procesa el carrito.')
    },
    contact:(req, res) => {
        res.render('shop/contact', {
            title: 'Funkoshop | Contacto',
        })
    }
}

module.exports = shopControllers;
