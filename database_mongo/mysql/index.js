const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: 'root',
  database: 'overview'
}, () => {
  console.log('connected to mysql');
});


const multiInsert = (rec, next) => {
  var query = `INSERT INTO games (platforms, os, developer, publisher, links, rating) VALUES `;
  var last = rec.length - 1;

  for (var i = 0; i < rec.length; i++) {
    var values = `('${JSON.stringify(rec[i].platforms)}', '${JSON.stringify(rec[i].os)}', '${rec[i].developer}', '${rec[i].publisher}', '${JSON.stringify(rec[i].links)}', ${rec[i].steam_rating})`;
    query += values;
    if (i != last) {
      query += `, `;
    }
  }

  Promise.resolve(connection.query(query))
    .then(data => {
      next();
    })
    .catch(err => {
      console.log('error in multiInsert: ', err);
      next();
    })
};


module.exports.multiInsert = multiInsert;