const { conn } = require('../config/conn');

const getProducts = async (conditions = null,
                           orderFields = null,
                           limitValue = null,
                           offsetValue = null) => {
    let conditionValues = null;
    let query = 'SELECT ' +
                    'product.*, ' +
                    'licence.licence_name, ' +
                    'category.category_name ' +
                'FROM product ' +
                'INNER JOIN category ' +
                    'ON product.category_id = category.category_id ' +
                'INNER JOIN licence ' +
                    'ON product.licence_id = licence.licence_id';
    if (conditions) {
        const where = Object.keys(conditions)
            .map(key => {
                const value = conditions[key];
                if (typeof value === 'object' && value.operator) {
                    //Si el invocador especificó un operador:
                    return `${conn.escapeId(key)} ${value.operator} ?`;
                } else {
                    //Caso contrario, chequea igualdad:
                    return `${conn.escapeId(key)} = ?`;
                }
            })
            .join(' AND ');

        conditionValues = Object.values(conditions).map(value => {
            //Extrae los valores de las condiciones:
            return typeof value === 'object' ? value.value : value;
        });

        query += ` WHERE ${where} `;
    }
    if (orderFields) {
        const order = orderFields.join(',');
        query += ` ORDER BY ${order} `;
    }
    if (limitValue) {query += ' LIMIT ' + limitValue;}
    if (offsetValue) {query += ' OFFSET ' + offsetValue;}
    query += ';';

    try {
        const [ rows ] = await conn.query(query, conditionValues);
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

const getCount = async () => {
    try {
        const [result] = await conn.query('SELECT COUNT(*) as total FROM product;');
        return result[0].total;
    } catch (error) {
        console.error('Error al obtener el total de productos: ', error);
        throw new Error('Error al obtener el total de productos.');
    } finally {
        conn.releaseConnection()
    }
};

module.exports = {
    getProducts,
    addProduct,
    getOne,
    editProduct,
    deleteOne,
    getCount
};