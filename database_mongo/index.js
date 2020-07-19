/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/overview', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .catch((err) => {
    throw err;
  });

mongoose.connection.on('error', (err) => {
  throw err;
});
// mongoose.connection.once('open', () => {
//   console.log('Connected to mongoDB');
// });

const overviewSchema = new mongoose.Schema({
  product_id: Number,
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
