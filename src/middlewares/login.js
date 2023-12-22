const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    }

    return res.status(401).send('Necesitás estar logueado para ingresar.');
}

module.exports = {
    isLogged
}