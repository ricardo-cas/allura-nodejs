const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'X)d66}zYJY=d_cMoCRU_*}au',
    database: 'agenda-petshop',
});

module.exports = dbConnection;