const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: 'root',
  database: 'overview'
}, () => {
  console.log('connected to mysql');
});



const record = {
  steam_rating: 81,
  platforms: ['steam'],
  os: ['oculusRift', 'htcVive', 'winMixedReal'],
  developer: 'Sawayn',
  publisher: 'Accolade',
  links: ['Kirlin', 'Tilman', 'Kirlin']
};

const multiInsert = (rec, next) => {
  console.log('in multiInsert');
  var query = `INSERT INTO games (platforms, os, developer, publisher, links, rating) VALUES `;
  var last = rec.length - 1;

  for (var i = 0; i < rec.length; i++) {
    var values = `('${JSON.stringify(rec[i].platforms)}', '${JSON.stringify(rec[i].os)}', '${rec[i].developer}', '${rec[i].publisher}', '${JSON.stringify(rec[i].links)}', ${rec[i].steam_rating})`;
    query += values;
    if (i != last) {
      query += `, `;
    }
  }
console.log('past for loop: ', query);
  Promise.resolve(connection.query(query))
    .then(data => {
      console.log('success in multiInsert');
      next();
    })
    .catch(err => {
      console.log('error in multiInsert: ', err);
      next();
    })
}


// const bulkInsert = (table, next) => {
//   console.log('inside bulkInsert');
//   Promise.resolve(connection.query(`LOAD DATA LOCAL INFILE '../products.csv' INTO TABLE ${table};`))
//     .then(data => {
//       console.log('success in bulkInsert');
//       next();
//     })
//     .catch(err => {
//       console.log('error in bulkInsert: ', err);
//     })
// };

module.exports.multiInsert = multiInsert;
//module.exports.bulkInsert = bulkInsert;