const mongoose = require('mongoose');
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

//switch to test db
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
  product_id: '13',
  platforms: ['11 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer3',
  publisher: 'Publisher3',
  system_req: {},
  links: ['link3'],
  steam_rating: 77
}

const badPostData = {
  product_id: 'NaN',
  platforms: ['11 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer3',
  publisher: 'Publisher3',
  system_req: {},
  links: ['link3'],
  steam_rating: 77
}

const updateData = {
  product_id: 11,
  platforms: ['11 3/4'],
  os: ['mac', 'windows'],
  developer: 'Developer3',
  publisher: 'Publisher3',
  system_req: {},
  links: ['link3'],
  steam_rating: 77
}

const badUpdateData = {
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
        done();
      })
      .catch(err => {
        console.log('error inserting fake data into test db: ', err);
      });
  });

  afterEach(async (done) => {
    await Overview.deleteMany({"os": ['mac', 'windows']})  //is there just a deleteAll?
      .then(docs => {
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
  it('should POST to the /newItem endpoint', async (done) => {
    const response = await request.post('/newItem').send(postData);
    const response2 = await request.get('/readOnly/13');

    expect(response.status).toBe(201);
    expect(response2.body[0].product_id).toBe(13);  
    done();
  });

  it('should get a 404 error when posting data with an invalid product_id field', async (done) => {
    const response = await request.post('/newItem').send(badPostData);

    expect(response.status).toBe(500);
    done();
  });

  //PUT
  it('should update the correct item through the /updateItem endpoint', async (done) => {
    const item11PreUpdate = await request.get('/readOnly/11');
    const response = await request.put('/updateItem').send(updateData);
    const item11PostUpdate = await request.get('/readOnly/11');

    expect(response.status).toBe(200);
    expect(response.body.nModified).toBe(1);
    expect(item11PreUpdate.body[0].platforms[0]).toBe('9 3/4');
    expect(item11PostUpdate.body[0].platforms[0]).toBe('11 3/4');
    done();
  });

  it('should get a 404 error when posting data without a product_id field', async (done) => {
    const response = await request.put('/updateItem').send(badUpdateData);

    expect(response.status).toBe(404);
    done();
  });


  //DELETE
  it('should DELETE the correct record from /deleteItem/:product_id', async (done) => {
    const response = await request.delete('/deleteItem/11');
    const deleted = await request.get('/readOnly/11')

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