process.env.MYSQLDB = 'overviewTest';
const mysql = require('../database_mongo/mysql/dbHelpers.js');
const connection = require('../database_mongo/mysql/index.js');
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const path = require('path');
import "babel-polyfill";

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});



const fakeData = {
  platforms: ['platforms'],
  os: ['os'],
  developer: 'developer',
  publisher: 'publisher',
  links: ['links'],
  steam_rating: 99,
};

const postData = {
  platforms: ['platforms2'],
  os: ['os2'],
  developer: 'developer2',
  publisher: 'publisher2',
  links: ['links2'],
  steam_rating: 88,
};

const updateData = {
  id: 1,
  platforms: ['platforms3'],
  os: ['os3'],
  developer: 'developer3',
  publisher: 'publisher3',
  links: ['links3'],
  steam_rating: 88,
};

const badUpdateData = {
  platforms: ['platforms3'],
  os: ['os3'],
  developer: 'developer3',
  publisher: 'publisher3',
  links: ['links3'],
  steam_rating: 88,
};


describe('CRUD routes for mysql', () => {
  beforeAll((done) => {
     mysql.createTestTable(err => {
      if (err) {
        console.log(err);
      } else {
        console.log('test table created');
        done();
      }
    })
  });

  beforeEach((done) => {
    mysql.addRecord(fakeData, err => {
      if (err) {
        console.log('error in beforeEach: ', err);
      }
      done();
    })
  });

  afterEach((done) => {
    mysql.dropTestTable((err) => {
      if (err) {
        console.log(err);
      }

      mysql.createTestTable(err => {
        if (err) {
          console.log(err);
        } else {
          done();
        }
      })
    })
  });


  afterAll(async (done) => {
    process.env.MYSQLDB = 'overview';
    done();
  });


  //GET
  it('should GET the /readOnly/:product_id endpoint for a valid product_id', async (done) => {
    const response = await request.get('/readOnly/1');

    expect(response.status).toBe(200);
    expect(response.body[0].platforms).toBe('["platforms"]');
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
    const response2 = await request.get('/readOnly/2');

    expect(response.status).toBe(201);
    expect(response2.body[0].id).toBe(2);
    done();
  });

  //PUT
  it('should update the correct item through the /updateItem endpoint', async (done) => {
    const item11PreUpdate = await request.get('/readOnly/1');
    const response = await request.put('/updateItem').send(updateData);
    const item11PostUpdate = await request.get('/readOnly/1');

    expect(response.status).toBe(200);
    expect(item11PreUpdate.body[0].platforms[0]).toBe('["platforms"]');
    expect(item11PostUpdate.body[0].platforms[0]).toBe('["platforms3"]');
    done();
  });

  it('should get a 404 error when updating data without a product_id field', async (done) => {
    const response = await request.put('/updateItem').send(badUpdateData);

    expect(response.status).toBe(404);
    done();
  });


  //DELETE
  it('should DELETE the correct record from /deleteItem/:product_id', async (done) => {
    const response = await request.delete('/deleteItem/1');

    expect(response.status).toBe(200);
    done();
  });
});