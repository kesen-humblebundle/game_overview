/* eslint-disable no-console */
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .catch((err) => {
    throw err;
  });

mongoose.connection.on('error', (err) => {
  throw err;
});

const overviewSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true
  },
  platforms: Array,
  os: Array,
  developer: String,
  publisher: String,
  system_req: Object,
  links: Array,
  steam_rating: Number
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;
