const { conn } = require('../config/conn');

const getProducts = async () => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM product;');
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