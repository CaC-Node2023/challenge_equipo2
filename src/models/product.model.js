const { conn } = require('../config/conn');

const getProducts = async () => {
    try {
        const [ rows ] = await conn.query(  'SELECT' +
                                                'product.*,' +
                                                'licence.licence_name' +
                                                'category.category_name' +
                                            'FROM product' +
                                            'INNER JOIN licence' +
                                                'ON product.licence_id = licence.licence_id' +
                                            'INNER JOIN category' +
                                                'ON product.category_id = category.category_id' +
                                            ';');
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

const addProduct = async (request) => {
    try {
        const [ rows ] = await conn.query(  'INSERT INTO product' +
                                                '(product_name,' +
                                                'product_description,' +
                                                'product_price,' +
                                                'stock,' +
                                                'discount,' +
                                                'product_sku,' +
                                                'dues,' +
                                                'img_front,' +
                                                'img_back,' +
                                                'category_id,' +
                                                'licence_id)' +
                                            'VALUES ?;', [request]);
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
    getProducts,
    addProduct
};