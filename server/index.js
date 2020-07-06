/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database_mongo/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/system_req/:product_id', (req, res) => {
  res.send('no data to send just yet');
});

app.get('/system_req/:product_id/platforms', (req, res) => {
  console.log(req.params);
  res.send('no data here either');
});

module.exports = app;
