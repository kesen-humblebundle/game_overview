// const mysql = require('mysql');
// const Promise = require('bluebird');

// const connection = mysql.createConnection({
//   host: process.env.MYSQLHOST || 'localhost',
//   user: 'root',
//   database: 'overview'
// }, () => {
//   console.log('connected to mysql');
// });

// const insertDev = (devName) => {
//   Promise.resolve(connection.query(`INSERT INTO developers (name) VALUES('${devName}')`))
//     .then(() => {
//       console.log('insertDev success');
//     })
//     .catch(err => {
//       console.log('insertDev err: ', err);
//     })
// };

// const insertPub = (pubName) => {
//   Promise.resolve(connection.query(`INSERT INTO publishers (name) VALUES('${pubName}')`))
//     .then(() => {
//       console.log('insertPub success');
//     })
//     .catch(err => {
//       console.log('insertPub err: ', err);
//     })
// };


// const bulkInsert = (table, next) => {
//   console.log('inside bulkInsert');
//   Promise.resolve(connection.query(`LOAD DATA LOCAL INFILE '../products.csv' INTO TABLE ${table};`))
//   .then(data => {
//     console.log('success in bulkInsert');
//     next();
//   })
//   .catch(err => {
//     console.log('error in bulkInsert: ', err);
//   })
// };

// module.exports.bulkInsert = bulkInsert;
// module.exports.insertDev = insertDev;
// module.exports.insertPub = insertPub;

// //games insert query:
// //`INSERT INTO games (product_id, platforms, os, developer, publisher, sysReq, links, rating) VALUES(1, 'platform', 'os', (SELECT id FROM developers WHERE name='Dev1'), (SELECT id FROM publishers WHERE name='Pub1'), 'reqs', 'link', 99)`