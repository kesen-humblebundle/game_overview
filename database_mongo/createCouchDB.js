// var couch = require('./couchdb');
// var dbName = 'overview'

// var counter = 1;

// // couch.db.create(dbName, function(err) {  
// //   if (err && err.statusCode != 412) {
// //     console.error(err);
// //   }
// //   else {
// //     console.log(`database ${dbName} exists`);
// //   }
// // });

// const db = couch.db.use(dbName);

// //batch insert func
// const bulkInsertCouch = (docs, cb) => {
//   db.bulk(docs)
//   .then(() => {
//     counter++;
//     cb();
//   })
//   .catch(err => {
//     console.log(`error seeding CouchDB on batch ${counter}/1000: `, err);
//   })
// }

// //query record
// const getCouchRecord = (id) => {
//   const query = {
//     "selector": {
//       "product_id": id
//     },
//     "limit": 1,
//     "execution_stats": true
//   }
//   db.find(query, (err, body, header) => {
//     if (err) {
//       console.log(`error finding product id ${id} in couchDB: `, err);
//     } else {
//       console.log(`found product id ${id}: `, header, body);
//     }
//   });
// }


// //export that
// module.exports.bulkInsertCouch = bulkInsertCouch;
// module.exports.getCouchRecord = getCouchRecord;