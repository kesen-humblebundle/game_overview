const mysql = require('mysql');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: 'root',
  database: process.env.MYSQLDB
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to mysql: ', err);
  } else {
    console.log('connected to mysql!');
  }
})

module.exports.connection = connection;
