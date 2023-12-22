const { conn } = require('../config/conn');

const getLicences = async connection => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM licence;');

        return {
            error: false,
            rows
        }
    } catch (error) {
        return {
            error: true,
            message: 'Error al consultar la base de datos: ' + error
        }
    } finally {
        conn.releaseConnection()
    }
};

module.exports = {
    getLicences
};