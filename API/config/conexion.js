const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567',
    port: 3306,
    database: 'db_basico'
});

conexion.connect((err) => {
    if(err) console.log('Ha ocurrido un error ' + err);
    else console.log('La base de datos se ha conectado');
});

module.exports = conexion;
