const mainControllers = {
   home: (req, res) => {
    res.send('Esta ruta devuelve la página home.')
},
   about:(req, res) => {
    res.send('Esta ruta devuelve la página de contacto.')
},
   contact:(req, res) => {
    res.send('Esta ruta devuelve la página "Acerca de".')
},
   faqs: (req, res) => {
    res.send('Esta ruta devuelve la página "Preguntas frecuentes".')
}
    }

module.exports = mainControllers;