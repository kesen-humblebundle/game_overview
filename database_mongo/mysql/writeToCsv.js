// const fs = require('fs');
// //const csvWriter = require('csv-write-stream');
// const data = require('../seed.js');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: '../products.csv',
//   header: ['product_id', 'platforms', 'os', 'developer', 'publisher', 'sysReq', 'links', 'rating']
// });

// var counter = 1;
// var max = 1;


// // const writeToCSV = (data) => {
// //   var writer = csvWriter({headers:false});

// //   writer.pipe(fs.createWriteStream('../products.csv'))
// //   writer.write(data);
// //   writer.end();
// // }

// const writeToCsv = (data, next) => {
//   console.log('data: ', data);
//   csvWriter.writeRecords(data)
//     .then((doc) => {
//       console.log(`done writing batch ${counter} of ${max}: `, doc);
//       next();
//     })
//     .catch(err => {
//       console.log(`error writing batch ${counter} to csv: `, err);
//     })
// }



// const generateDataForCSV = () => {
//   console.log('inside generateDataForCSV');
//   var batch = data.seed();

//   writeToCsv(batch, () => {
//     counter++;
//     if (counter < max) {
//       generateDataForCSV();
//     } else {
//       console.log(`done writing ${max} batches to csv`);
//     }
//   })
// }

// generateDataForCSV();

