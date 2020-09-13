const mysql = require('mysql');
const Promise = require('bluebird');

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


// const multiInsert = (rec, next) => {
//   var query = `INSERT INTO games (platforms, os, developer, publisher, links, rating) VALUES `;
//   var last = rec.length - 1;

//   for (var i = 0; i < rec.length; i++) {
//     var values = `('${JSON.stringify(rec[i].platforms)}', '${JSON.stringify(rec[i].os)}', '${rec[i].developer}', '${rec[i].publisher}', '${JSON.stringify(rec[i].links)}', ${rec[i].steam_rating})`;
//     query += values;
//     if (i != last) {
//       query += `, `;
//     }
//   }

//   Promise.resolve(connection.query(query))
//     .then(data => {
//       next();
//     })
//     .catch(err => {
//       console.log('error in multiInsert: ', err);
//       next();
//     })
// };

const getRecord = (id, next) => {
  console.log('id: ', id);
  var query = `SELECT * FROM games WHERE id=${id}`;

  connection.query(query, (err, rec) => {
    if (err) {
      console.log('error in getRecord: ', err);
      next();
    } else {
      console.log('getRecord: ', rec);
      next(rec);
    }
  })
}

const updateRecord = (record, next) => {

}

const addRecord = (record, next) => {

}

const deleteRecord = (id, next) => {

}


//module.exports.multiInsert = multiInsert;
module.exports.getRecord = getRecord;
module.exports.updateRecord = updateRecord;
module.exports.addRecord = addRecord;
module.exports.deleteRecord = deleteRecord;