/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
// const {} = require('../database_mongo/index.js');
const data = require('../database_mongo/seed.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/system_req/:product_id', (req, res) => {
  const docs = data.seed();
  const id = req.params.product_id;

  res.json(docs[id - 1]);
});

app.get('/system_req/:product_id/platforms', (req, res) => {
  console.log(req.params);
  res.send('no data here either');
});

module.exports = app;
