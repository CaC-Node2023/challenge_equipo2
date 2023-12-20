const {findByEmail} = require("../models/user.model");

const authControllers = {
   login: (req, res) => {
        res.render('auth/login', {
            title: 'Funkoshop | Inicio de sesión',
        });
   },

   loginUser: async (req, res) => {
       const { email, password } = req.body;

       //Buscamos usuario en la BD:
       let user = null;

       const userResponse = await findByEmail(email);

       if (userResponse.error) {
           res.send(userResponse.message);
       } else {
           [user] = userResponse.rows;
       }

       const emailValidation = user.email === email;
       const passwordValidation = user.password === password;

       req.session.isLogged = emailValidation && passwordValidation;

       if (req.session.isLogged) {
           res.locals.isLogged = true;
           return res.redirect('/admin');
       }

       return res.status(401).send('Credenciales inválidas.');
   },

   register: (req, res) => {
        res.render('auth/register', {
            title: 'Funkoshop | Registro'
        });
   },

   registerUser: (req, res) => {
        res.send('Esta ruta manda la solicitud de registro con los datos del usuario.');
   },

   logoutUser: (req, res) => {
       req.session.isLogged = false;
       res.redirect('/home');
   }
}

module.exports = authControllers;
