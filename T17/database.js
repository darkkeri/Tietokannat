const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'passkey',
  database: 'library'
});
module.exports = connection;