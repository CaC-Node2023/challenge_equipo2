const { conn } = require('../config/conn');

// Find a user by email
const findByEmail = async (email) => {
    try {
        const [rows] = await conn.query('SELECT * FROM user WHERE email = ?', email);

        return {
            error: rows.length < 1,
            rows
        }
    } catch (error) {
        return {
            error: true,
            message: 'Error al obtener el usuario de la base de datos: ' + error
        }
    } finally {
        conn.releaseConnection()
    }
};

module.exports = {
    findByEmail,
};