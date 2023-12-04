const mainControllers = {
    home: (req, res) => {
        res.render('home', {
            title: 'Funkoshop | Inicio',
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
