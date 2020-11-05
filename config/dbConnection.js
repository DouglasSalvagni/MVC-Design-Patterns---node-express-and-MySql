var mysql = require('mysql');

var connMySQL = function () {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3307,
        password: '1234',
        database: 'portal_noticias'
    });

    connection.connect(function(error){
        if(error) { 
            console.log('error', error)
        } else {
            console.log('sucesso')
        }
    });

    return connection
}

module.exports = function() {
    return connMySQL;
}