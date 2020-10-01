const mysql = require('mysql');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const connection = mysql.createConnection({
  host: 'ec2-18-223-123-3.us-east-2.compute.amazonaws.com', //localhost
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
