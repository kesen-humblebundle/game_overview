/* eslint-disable no-console */
const mongoose = require('mongoose');
const { response } = require('express');

const connection = mongoose.connect('mongodb://localhost', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection.then((db) => {
  console.log('mongoose connected!');

  const overviewSchema = new mongoose.Schema({
    game_id: Number,
    platforms: Array,
    os: Array,
    developer: String,
    publisher: String,
    system_req: Object,
    links: Array,
    steam_rating: Number
  });

  const Overview = mongoose.model('Overview', overviewSchema);

  const addOverview = (doc) => {
    return new Promise((resolve, reject) => {
      Overview.collection.save(doc, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      });
    });
  };

  const addManyOverviews = (array) => {
    return new Promise((resolve, reject) => {
      Overview.collection.insertMany(array, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  };

  module.exports.addOverview = addOverview;
  module.exports.addManyOverviews = addManyOverviews;
  module.exports.db = db;
});
