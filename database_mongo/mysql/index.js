const mysql = require('mysql');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.../.env')
});

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST, //localhost
  user: process.env.MYSQL_U,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to mysql: ', err);
  } else {
    console.log('connected to mysql!');
  }
})

module.exports.connection = connection;
