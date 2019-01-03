const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    port : 3306
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS persons', function (err, result, fields) {
  connection.query('USE persons', function (err) {
    connection.query('CREATE TABLE IF NOT EXISTS developers(name VARCHAR(25), score INT)', function (err) {
      console.log(err);
    });
  });
});

module.exports = {
    connection : connection
};
