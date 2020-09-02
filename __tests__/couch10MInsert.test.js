// const mongoose = require('mongoose');
const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const couch = require('../database_mongo/couchdb.js');
const seed = require('../database_mongo/couchSeed.js');
import "babel-polyfill";

var db;


describe('Data generator script', () => {
  // beforeAll(async () => {
  //   await couch.db.create('testcouch', function (err) {
  //     if (err) {
  //       console.log('error creating testcouch db: ', err);
  //     } else {
  //       db = couch.db.use('testcouch');
  //     }
  //   });
  // });

  // afterAll(async () => {
  //   await couch.db.destroy('testcouch', function (err) {
  //     if (err) {
  //       console.log('error destroying testcouch db: ', err);
  //     }
  //   });
  // });


  it('should insert 10M records into testCouch db', async (done) => {
    var startTime = new Date();
    console.log('start time: ', startTime.getTime());
    const response = await request.post('/couch');
    var endTime = new Date();
    console.log('end time: ', endTime.getTime());
    console.log(`${((endTime.getTime() - startTime.getTime()) / 1000) / 60} minutes`);

    expect(response.status).toBe(201);
    done();
  });

});