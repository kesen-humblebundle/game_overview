/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database_mongo/index.js');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('I got the request');
  res.end();
});

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('something went wrong');
    return;
  }
  console.log('server listening on port: ', process.env.SERVER_PORT);
});
