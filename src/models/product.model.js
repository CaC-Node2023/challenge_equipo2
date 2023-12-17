const { conn } = require('../config/conn');

const getProducts = async () => {
    try {
        const [ rows ] = await conn.query(  'SELECT ' +
                                                'product.*, ' +
                                                'licence.licence_name, ' +
                                                'category.category_name ' +
                                            'FROM product ' +
                                            'INNER JOIN licence ' +
                                                'ON product.licence_id = licence.licence_id ' +
                                            'INNER JOIN category ' +
                                                'ON product.category_id = category.category_id ' +
                                            'ORDER BY product.product_id;');
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

const addProduct = async (params) => {
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
                                            'VALUES ?;', [params]);
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

const getOne = async (id) => {
    try {
        const [rows] = await conn.query(
            'SELECT product.*, category.category_name, licence.licence_name ' +
            'FROM product ' +
            'LEFT JOIN category ON product.category_id = category.category_id ' +
            'LEFT JOIN licence ON product.licence_id = licence.licence_id ' +
            'WHERE product_id = ?',
            id
        );

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
const editProduct = async (params, id) => {
    try { 
        const [ rows ] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id] );

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

const deleteOne = async (id) => {
    try {
        const [ rows ] = await conn.query( 'DELETE FROM product WHERE product_id = ?', id);

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
    getProducts,
    addProduct,
    getOne,
    editProduct,
    deleteOne
};