const data = require('./seed.js');
const db = require('./createCouchDB.js');
const loops = 5 //if recordsNum is set to 10,000 in seed.js, loops should be 1000 (10,000 * 1,000 === 10M)


var counter = 1;
//CouchDB seed
const addManyOverviewsCouch = () => {
    var batch = data.seed();
    var jsonBatch = {docs: batch};
    JSON.stringify(jsonBatch);
    db.bulkInsertCouch(jsonBatch, () => {
      console.log(`batch ${counter}/${loops} inserted`);
      counter++;
      if (counter <= loops) {
        addManyOverviewsCouch();
      }
    });
}

addManyOverviewsCouch();

// const addManyOverviewsCouch = () => {
//   var counter = 1;
//   for (var i = 0; i < loops; i++) {
//     var batch = data.seed();
//     db.bulkInsertCouch(batch);
//     console.log(`batch ${counter}/${loops} inserted`);
//     counter++;
//   }
// }