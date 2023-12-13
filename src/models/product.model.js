const { conn } = require('../config/conn');

const getProducts = async () => {
    try {
        const [ rows ] = await conn.query('SELECT product.*, licence.licence_name FROM product JOIN licence ON product.licence_id = licence.licence_id;');
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error ' + error
        }
    } finally {
        conn.releaseConnection() 
    }
};

module.exports = {
    getProducts
};