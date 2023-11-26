const adminControllers = {
    admin: (req, res) => {
        res.send('Esta ruta devuelve la página del administrador.')
    },
    create: (req, res) => {
        res.send('Esta ruta devuelve la página para crear un ítem.')
    },
    createItem: (req, res) => {
        res.send('Esta ruta trata de agregar un ítem de la base de datos.')
    },
    edit: (req, res) => {
        res.send('Esta ruta devuelve la página para editar un ítem.')
    },
    editItem: (req, res) => {
        res.send('Esta ruta trata de actualizar la información de un ítem en la base de datos.')
    },
    deleteItem: (req, res) => {
        res.send('Esta ruta trata de eliminar un ítem de la base de datos.')
    },
}

 
 module.exports = adminControllers;