const mysql = require('./index.js');
const Promise = require('bluebird');


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

  Promise.resolve(mysql.connection.query(query))
    .then(data => {
      next();
    })
    .catch(err => {
      console.log('error in multiInsert: ', err);
      next();
    })
};

const getRecord = (id, next) => {
  var query = `SELECT * FROM games WHERE id=${id}`;

  mysql.connection.query(query, (err, rec) => {
    if (err) {
      console.log('error in getRecord: ', err);
      next(err);
    } else if (rec.length === 0) {
      next('No record for that id');
    } else {
      console.log('getRecord: ', rec);
      next(null, rec);
    }
  })
}

const updateRecord = (record, next) => {
  var query = `UPDATE games SET platforms='${JSON.stringify(record.platforms)}', os='${JSON.stringify(record.os)}', developer='${record.developer}', publisher='${record.publisher}', links='${JSON.stringify(record.links)}', rating=${record.steam_rating} WHERE id=${record.id}`;

  mysql.connection.query(query, (err, rec) => {
    if (err) {
      console.log('error in updateRecord: ', err);
      next(err);
    } else {
      console.log('updateRecord: ', rec);
      next(null, rec);
    }
  })
}

const addRecord = (record, next) => {
  var query = `INSERT INTO games (platforms, os, developer, publisher, links, rating) VALUES ('${JSON.stringify(record.platforms)}', '${JSON.stringify(record.os)}', '${record.developer}', '${record.publisher}', '${JSON.stringify(record.links)}', ${record.steam_rating})`;

  mysql.connection.query(query, (err, rec) => {
    if (err) {
      console.log('error in addRecord: ', err);
      next(err);
    } else {
      console.log('addRecord: ', rec);
      next(null, rec);
    }
  })
}

const deleteRecord = (id, next) => {
  var query = `DELETE FROM games WHERE id=${id}`;

  mysql.connection.query(query, (err, rec) => {
    if (err) {
      console.log('error in deleteRecord: ', err);
      next(err);
    } else {
      console.log('deleteRecord: ', rec);
      next(null, rec);
    }
  })
}


module.exports.multiInsert = multiInsert;
module.exports.getRecord = getRecord;
module.exports.updateRecord = updateRecord;
module.exports.addRecord = addRecord;
module.exports.deleteRecord = deleteRecord;