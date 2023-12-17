const { conn } = require('../config/conn');

const getCategories = async connection => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM category;');

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
    getCategories
};