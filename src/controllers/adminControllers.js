const adminControllers = {
    admin: (req, res) => {
        res.render('admin/admin', {
            title: 'Funkoshop | Administrador',
        })
    },
    create: (req, res) => {
        res.render('admin/create', {
            title: 'Funkoshop | Crear',
        })
    },
    createItem: (req, res) => {
        res.send('Esta ruta trata de agregar un ítem de la base de datos.')
    },
    edit: (req, res) => {
        res.render('admin/edit', {
            title: 'Funkoshop | Editar',
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