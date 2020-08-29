const mongoose = require('mongoose');
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});


import "babel-polyfill";


describe('Data generator script', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } 
    });
  });

  afterAll(async (done) => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        done();
      }
    });
  });


  it('should GET item 9999 from current db', async (done) => {
    const response = await request.get('/system_req/9999');

    expect(response.status).toBe(200);
    expect(response.body[0].product_id).toBe(9999);
    done();
  });

});