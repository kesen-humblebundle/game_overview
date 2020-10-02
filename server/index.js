/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('../database_mongo/mysql/dbHelpers.js');
const morgan = require('morgan');
const icons = require('../database_mongo/iconURLs.js');

const app = express();
app.use(morgan('dev'));

//loader confirm:
app.get('/loaderio-06e6a89abef55b0f3e7de3f5785e8cbf.txt', (req, res) => {
  console.log('loader confirm');

  res.sendFile('/Users/elzabethhayt/Desktop/RPT-21/SDC/Chris-app-service-overview/loader.txt', (err) => {
    if (err) {
      console.log('error sending loader confirm: ', err);
      res.status(404).send(err);
    } else {
      console.log('success in loader confirm');
    }
  })
});

app.use(express.static('public', { fallthrough: true }));
app.use('/:product_id', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:product_id', (req, res) => {
  const product_id = req.params.product_id;
  res.redirect(`/system_req/${product_id}`);
  res.end();
});

app.get('/system_req/:product_id', (req, res) => {
  const id = req.params.product_id;

  mysql.getRecord(id, (err, rec) => {
    if (err) {
      console.log(err);
      res.status(404).send();
    } else {
      const resArray = rec;

      resArray[0].platforms = JSON.parse(resArray[0].platforms);
      resArray[0].os = JSON.parse(resArray[0].os);
      resArray[0].links = JSON.parse(resArray[0].links);
      resArray[0].system_req = {
        windows: {
          OS: "windows 8 Books",
          Processor: "Intel Core i5 9000",
          Memory: "16 GB",
          Graphics: "NVIDIA GeForce 640 2GB / AMD Radeon 250 4GB",
          DirectX: "Version 9",
          Network: "Broadband Internet",
          Storage: "60 GB"
        },
        linux: {
          OS: "linux 9 transmitting",
          Processor: "Intel Core i5 3000",
          Memory: "8 GB",
          Graphics: "NVIDIA GeForce 830 4GB / AMD Radeon 230 4GB",
          DirectX: "Version 9",
          Network: "Broadband Internet",
          Storage: "80 GB"
        }
      };

      //icons
      var platformIcons = [];

      resArray[0].platforms.forEach(platform => {
        platformIcons.push([icons[platform][0], icons[platform][1], icons[platform][2]]);
      });
      resArray[0].platforms = platformIcons;


      var osIcons = [];

      resArray[0].os.forEach(oS => {
        osIcons.push([icons[oS][0], icons[oS][1], icons[oS][2]]);
      })
      resArray[0].os = osIcons;

      //genres
      const genres = ['Action', 'Adventure', 'Indie', 'Horror', 'MMO', 'Sports', 'Strategy'];

      const generateGenre = () => {
        var genreArr = [];
        var num = Math.floor(Math.random() * genres.length);
        genreArr.push(genres[num]);
        return genreArr;
      }

      const newGenre = generateGenre();

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

      res.set({ 'Access-Control-Allow-Origin': '*' });
      res.status(200).send(resArray);
    }
  })
});

// app.get('/system_req/platforms/:product_id', (req, res) => {
//   const id = decodeURI(req.params.product_id);
//   const isItArray = Array.isArray(JSON.parse(id));
//   let idArray = [];

//   if (isItArray) {
//     idArray = JSON.parse(id);
//   } else {
//     idArray.push(id);
//   }

/*
  // mysql.getRecord(id, (err, rec) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(404).send();
  //   } else {
  //     const resultsArray = rec.map((rec) => {
  //       const platformsOsObj = {
  //         product_id: doc.product_id,
  //         platforms: doc.platforms,
  //         os: doc.os
  //       };
  //   });
  // }

  // });
  */


//   Overview.find({ product_id: { $in: idArray } }, (err, docs) => {
//     if (err) {
//       throw err;
//     }
//     console.log(docs);
//     const resultsArray = docs.map((doc) => {
//       const platformsOsObj = {
//         product_id: doc.product_id,
//         platforms: doc.platforms,
//         os: doc.os
//       };
//       return platformsOsObj;
//     });


//     res.set({ 'Access-Control-Allow-Origin': '*' });
//     if (resultsArray.length > 1) {
//       res.send(resultsArray);
//     } else {
//       res.send(resultsArray[0]);
//     }
//   });
// });




//Extended CRUD for SDC

//GET
app.get('/readOnly/:product_id', (req, res) => {
  const id = req.params.product_id;
  console.log('id: ', id);

  mysql.getRecord(id, (err, rec) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(rec);
    }
  })
});


//POST
app.post('/newItem', (req, res) => {
  const newItem = req.body;
  //console.log('newItem: ', newItem);

  mysql.addRecord(newItem, (err, rec) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(201).send(rec);
    }
  })
});

//PUT
app.put('/updateItem', (req, res) => {
  const newInfo = req.body;
  const id = newInfo.product_id;

  if (!id) {
    console.log('product_id required to update item');
    res.status(404).send()
  } else {
    mysql.updateRecord(newInfo, (err, rec) => {
      if (err) {
        res.status(404).send();
      } else {
        res.status(200).send(rec);
      }
    })
  }
});

//DELETE
app.delete('/deleteItem/:product_id', (req, res) => {
  const id = req.params.product_id;

  mysql.deleteRecord(id, (err, rec) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(rec);
    }
  })
});


module.exports = app;



//Original system_req:

// Overview.find({ product_id: id })
  //   .then((doc) => {
  //     console.log('doc: ', doc);
  //     // axios.get(`http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/genre/${id}`)
  //     //   .then((response) => {
  //         const resArray = doc;

  //         //genres
  //         const genres = ['Action', 'Adventure', 'Indie', 'Horror', 'MMO', 'Sports', 'Strategy'];

  //         const generateGenre = () => {
  //           var genreArr = [];
  //           var num = Math.floor(Math.random() * genres.length);
  //           genreArr.push(genres[num]);
  //           return genreArr;
  //         }

  //         const newGenre = generateGenre(); //response.data

  //         const steamNumber = resArray[0].steam_rating;

  //         resArray.push(newGenre);

  //         if (steamNumber) {
  //           const describeSteamRating =
  //             steamNumber >= 95
  //               ? 'Overwhelmingly Positive'
  //               : steamNumber >= 80
  //                 ? 'Very Postive'
  //                 : steamNumber >= 70
  //                   ? 'Mostly Positive'
  //                   : steamNumber >= 40
  //                     ? 'Mixed'
  //                     : steamNumber >= 20
  //                       ? 'Mostly Negative'
  //                       : 'Very Negative';
  //           resArray.push(describeSteamRating);
  //         }

  //         return resArray;
  //       })
  //       .then((resArray) => {
  //         res.set({ 'Access-Control-Allow-Origin': '*' });
  //         res.send(resArray);
  //       })
  //       .catch((error) => {
  //         throw error;
  //       });
    //});