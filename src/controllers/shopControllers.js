const shopControllers = {
    shop: (req, res) => {
        res.send('Esta ruta devuelve la página de la tienda.')
    },
    item: (req, res) => {
        res.send('Esta ruta devuelve la página del ítem.')
    },
    addItemToCart: (req, res) => {
        res.send('Esta ruta agrega un ítem al carrito.')
    },
    cart: (req, res) => {
        res.send('Esta ruta devuelve la página del carrito.')
    },
    checkout: (req, res) => {
        res.send('Esta ruta procesa el carrito.')
    }
}

 
 module.exports = shopControllers;