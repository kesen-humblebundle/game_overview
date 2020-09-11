const db = require('./index.js');
const data = require('../seed.js');



var counter = 1;
var max = 1;

const bulkInsertRecords = () => {
  var startTime = new Date();

  var records = data.seed();
  db.multiInsert(records, () => {
    console.log(`done loading record batch ${counter} of ${max}`);
    counter++;
    if (counter < max) {
      bulkInsertRecords();
    }
  });

  var endTime = new Date();
  console.log(`mysql seeded in ${endTime - startTime} milliseconds`)
}

bulkInsertRecords();


// const testRecord = {
//   steam_rating: 81,
//   platforms: ['steam'],
//   os: ['oculusRift', 'htcVive', 'winMixedReal'],
//   developer: 'Sawayn',
//   publisher: 'Accolade',
//   links: ['Kirlin', 'Tilman', 'Kirlin']
// };

// const singleInsertRecord = (record, next) => {
//   db.singleInsert(record, next);
// }

// singleInsertRecord(testRecord, () => {
//   console.log('done');
// });
