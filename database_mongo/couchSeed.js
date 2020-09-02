const data = require('./seed.js');
const db = require('./createCouchDB.js');
const loops = 10 //if recordsNum is set to 10,000 in seed.js, loops should be 1000 (10,000 * 1,000 === 10M)


var counter = 1;

const addManyOverviewsCouch = (next) => {
    var batch = data.seed();
    var jsonBatch = {docs: batch};
    JSON.stringify(jsonBatch);
    db.bulkInsertCouch(jsonBatch, () => {
      console.log(`batch ${counter}/${loops} inserted`);
      counter++;
      if (counter <= loops) {
        addManyOverviewsCouch();
      } else {
        next();
      }
    });
}

//addManyOverviewsCouch();

module.exports.addManyOverviewsCouch = addManyOverviewsCouch;