var mysql = require('mysql')
const dbConfig = require("../config/db.config.js");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
		if (err.code === 'ETIMEDOUT') {
            console.error('Unable to connect to database.')
        }
		else{
			console.error(err)
		}
    }
    else
    console.log("Successfully connected to the database!!!.");
    return
})
module.exports = pool

