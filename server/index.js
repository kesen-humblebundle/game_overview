/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database_mongo/index.js');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/system_req/:product_id', (req, res) => {
  res.send('no data to send just yet');
  res.end();
});

app.get('/system_req/:product_id/platforms', (req, res) => {
  console.log(req.params);
  res.send('no data here either');
  res.end();
});

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('something went wrong');
    return;
  }
  console.log('server listening on port: ', process.env.SERVER_PORT);
});
