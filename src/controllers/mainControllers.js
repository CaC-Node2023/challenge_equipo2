const mainControllers = {
    home: (req, res) => {
        res.render('home', {
            title: 'Funkoshop | Inicio',
            item1: 1,
            item2: 2,
            item3: 3
        })
    },
    about:(req, res) => {
        res.send('Esta ruta devuelve la página "Acerca de".')
    },
    faqs: (req, res) => {
        res.send('Esta ruta devuelve la página "Preguntas frecuentes".')
    }
}

module.exports = mainControllers;
