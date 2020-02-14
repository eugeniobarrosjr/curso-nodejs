const mysql = require('mysql');

const connMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'noticias'
    });
};

module.exports = () => {
    return connMySQL;
};
