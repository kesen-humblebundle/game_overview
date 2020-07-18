/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const Overview = require('../database_mongo/index.js');
const { steam } = require('../database_mongo/iconURLs.js');
// const data = require('../database_mongo/seed.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/system_req/:product_id', (req, res) => {
  const id = req.params.product_id;
  Overview.find({ product_id: id }).then((doc) => {
    axios
      .get(`http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/genre/${id}`)
      .then((response) => {
        const resArray = doc;
        const newGenre = response.data;
        const steamNumber = resArray[0].steam_rating;

        resArray.push(newGenre);

        if (steamNumber) {
          const describeSteamRating =
            steamNumber >= 95
              ? 'Overwhelmingly Positive'
              : steamNumber >= 80
              ? 'Very Postive'
              : steamNumber >= 70
              ? 'Mostly Positive'
              : steamNumber >= 40
              ? 'Mixed'
              : steamNumber >= 20
              ? 'Mostly Negative'
              : 'Very Negative';
          resArray.push(describeSteamRating);
        }

        return resArray;
      })
      .then((resArray) => {
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.send(resArray);
      })
      .catch((error) => {
        throw error;
      });
  });
});

app.get('/system_req/platforms/:product_id', (req, res) => {
  const id = req.params.product_id;

  Overview.find({ product_id: id }, (err, doc) => {
    if (err) {
      throw err;
    }
    console.log('Platforms', doc[0]);
    const osPlatformsObj = {
      product_id: id,
      platforms: doc[0].platforms,
      os: doc[0].os
    };
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.json(osPlatformsObj);
  });
});

module.exports = app;
