const db = require('./index.js');
const data = require('../seed.js');


var counter = 1;
var max = 500;

const bulkInsertRecords = () => {
  var startTime = new Date();

  var records = data.seed();
  db.multiInsert(records, () => {
    console.log(`done loading record batch ${counter} of ${max}`);
    counter++;
    if (counter <= max) {
      bulkInsertRecords();
    } else {
      var endTime = new Date();
      console.log(`mysql seeded in ${endTime - startTime} milliseconds`)
    }
  });
}

bulkInsertRecords();