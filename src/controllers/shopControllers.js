const shopControllers = {
    shop: (req, res) => {
        res.render('shop/shop', {
            title: 'Funkoshop | Tienda',
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
        res.render('shop/cart', {
            title: 'Funkoshop | Carrito',
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
