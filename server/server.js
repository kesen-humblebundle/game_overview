require('newrelic');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
const app = require('./index.js');

app.listen(process.env.OVERVIEW_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listening on port: ', process.env.OVERVIEW_PORT);
});
