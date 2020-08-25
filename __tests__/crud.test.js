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

const postData = {
  product_id: 13,
  platforms: ['11 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer3',
  publisher: 'Publisher3',
  system_req: {},
  links: ['link3'],
  steam_rating: 77
}

describe('CRUD routes', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } 
    });
  });

  beforeEach(async (done) => {
    await Overview.create([fakeData1, fakeData2])
      .then(docs => {
        console.log('success inserting fake data into test db');
        done();
      })
      .catch(err => {
        console.log('error inserting fake data into test db: ', err);
      });
  });

  afterEach(async (done) => {
    await Overview.deleteMany({"os": ['mac', 'windows']})
      .then(docs => {
        console.log('success deleting fake data from test db');
        done();
      })
      .catch(err => {
        console.log('error deleting fake data from test db: ', err);
      });
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


  //GET
  it('should GET the /readOnly/:product_id endpoint for a valid product_id', async (done) => {
    const response = await request.get('/readOnly/11');

    expect(response.status).toBe(200);
    expect(response.body[0].platforms[0]).toBe('9 3/4');
    done();
  });

  it('should get a 404 error for invalid product_id on /readOnly/:product_id endpoint', async (done) => {
    const response = await request.get('/readOnly/0');

    expect(response.status).toBe(404);
    done();
  });

  //POST
  // it('should POST to the /newItem/:product_id endpoint', async (done) => {
  //   const response = await request.post('/newItem/13');

  //   expect(response.status).toBe(200);
  //   expect(response.body[0].platforms[0]).toBe('11 3/4');
  //   done();
  // });


  //DELETE
  it('should DELETE the correct record from /deleteItem/:product_id', async (done) => {
    const response = await request.delete('/deleteItem/11');
    //console.log('delete response: ', response);
    const deleted = await request.get('/readOnly/11')
    console.log('deleted: ', deleted.body);

    expect(response.status).toBe(200);
    expect(deleted.body.length).toBe(0);
    done();
  });

  it('should get a 404 error for invalid product_id on /deleteItem/:product_id endpoint', async (done) => {
    const response = await request.delete('/deleteItem/101');

    expect(response.status).toBe(404);
    done();
  });
});