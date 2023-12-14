const { conn } = require('../config/conn');

const getCategories = async connection => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM category;');
        return response = {
            isError: false,
            data: rows
        };
    } catch (error) {
        return response = {
            isError: true,
            message: 'Hemos encontrado un error ' + error
        }
    } finally {
        conn.releaseConnection()
    }
};

module.exports = {
    getCategories
};