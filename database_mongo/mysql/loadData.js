const db = require('./index.js');
const data = require('../seed.js');

// const loadDevelopers = (names) => {
//   for (var i = 0; i < names.length; i++) {
//     db.insertDev(names[i]);
//   }
// }

// loadDevelopers(data.compNames);


// const loadPublishers = (names) => {
//   for (var i = 0; i < names.length; i++) {
//     db.insertPub(names[i]);
//   }
// }

// loadPublishers(data.pubNames);


const bulkInsertRecords = (records) => {



  //db.bulkInsert()
}

const record = {
  steam_rating: 81,
  platforms: ['steam'],
  os: ['oculusRift', 'htcVive', 'winMixedReal'],
  developer: 'Sawayn',
  publisher: 'Accolade',
  links: ['Kirlin', 'Tilman', 'Kirlin']
};

const singleInsertRecord = (record, next) => {
  db.singleInsert(record, next);
}

singleInsertRecord(record, () => {
  console.log('done');
});
