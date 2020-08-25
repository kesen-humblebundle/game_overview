const mongoose = require('mongoose');
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

process.env.DATABASE = 'mongodb://localhost:27017/overviewTest';

const Overview = require('../database_mongo/index.js');

import "babel-polyfill";



//fake data
const fakeData1 = {
  product_id: 11,
  platforms: ['9 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer',
  publisher: 'Publisher',
  system_req: {},
  links: ['link1'],
  steam_rating: 99
};

const fakeData2 = {
  product_id: 12,
  platforms: ['10 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer2',
  publisher: 'Publisher2',
  system_req: {},
  links: ['link2'],
  steam_rating: 88
}

describe('CRUD routes', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } 
      // else {
      //   //create a new table and insert two fake records
      //   Overview.create([fakeData1, fakeData2])
      //     .then(docs => {
      //       console.log('test database seeded');
      //     })
      //     .catch(err => {
      //       console.log('error inserting fake data into test db: ', err);
      //     })
      // }
    })
  })

  beforeEach(async () => {
    await Overview.create([fakeData1, fakeData2])
      .then(docs => {
        console.log('success inserting fake data into test db');
      })
      .catch(err => {
        console.log('error inserting fake data into test db: ', err);
      })
  });

  afterAll(async (done) => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        process.env.DATABASE = 'mongodb://localhost:27017/overview';
        done();
      }
    });
  });



  it('should GET the /readOnly/:product_id endpoint for a valid product_id', async (done) => {
    var response = await request.get('/readOnly/11');
    console.log('response: ', response.body[0]);

    expect(response.status).toBe(200);
    expect(response.body[0].platforms[0]).toBe('9 3/4');
    done();
  });
});