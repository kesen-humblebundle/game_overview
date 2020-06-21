/* eslint-disable no-console */
const mongoose = require('mongoose');

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

  module.exports.db = db;
});
