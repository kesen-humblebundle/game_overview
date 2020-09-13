const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: 'root',
  database: 'overview'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to mysql: ', err);
  } else {
    console.log('connected to mysql!');
  }
})

module.exports.connection = connection;
