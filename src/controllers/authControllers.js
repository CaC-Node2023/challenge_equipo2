const authControllers = {

   login: (req, res) => {
        res.send('Esta ruta devuelve la página para iniciar sesión.')
    },
   loginUser: (req, res) => {
        res.send('Esta ruta manda la solicitud de inicio de sesión.')
    },
    register: (req, res) => {
        res.send('Esta ruta devuelve la página para registrarse.')
    },
    registerUser: (req, res) => {
        res.send('Esta ruta manda la solicitud de registro con los datos del usuario.')
    },
    logoutUser: (req, res) => {
        res.send('Esta ruta trata de cerrar la sesión actual y redirecciona a la página de inicio.')
    }
}

 
 module.exports = authControllers;