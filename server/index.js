/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Overview = require('../database_mongo/index.js');
// const data = require('../database_mongo/seed.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/system_req/:product_id', (req, res) => {
  const id = req.params.product_id;
  Overview.find({ product_id: id }, (err, doc) => {
    if (err) {
      throw err;
    }
    res.set({ 'Access-Control-Allow-Origin': '*' });
    console.log(typeof doc[0]);
    res.json(doc[0]);
  });
});

app.get('/system_req/platforms/:product_id', (req, res) => {
  const id = req.params.product_id;

  Overview.find({ product_id: id }, (err, doc) => {
    if (err) {
      throw err;
    }
    console.log('Platforms', doc[0]);
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.json(doc[0].platforms);
  });
});

module.exports = app;
