const authControllers = {
   login: (req, res) => {
        res.render('auth/login', {
            title: 'Funkoshop | Inicio de sesión',
        });
   },

   loginUser: (req, res) => {
        res.send('Esta ruta manda la solicitud de inicio de sesión.');
   },

   register: (req, res) => {
        res.render('auth/register', {
            title: 'Funkoshop | Registro',
        });
   },

   registerUser: (req, res) => {
        res.send('Esta ruta manda la solicitud de registro con los datos del usuario.');
   },

   logoutUser: (req, res) => {
        res.render('home', {
            title: 'Funkoshop | Inicio',
        });
   }
}

module.exports = authControllers;
