const { conn } = require('../config/conn');

// Find a user by email
const findByEmail = async (email) => {
    const sql = 'SELECT * FROM user WHERE email = ?';
    const values = [email];

    try {
        const [rows] = await conn.query(sql, values);
        console.log(rows);
        return {
            error: results.length > 0,
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