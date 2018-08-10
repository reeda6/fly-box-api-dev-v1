//import * as request from 'supertest';
//import * as m from 'mocha';
//import {describe, before, after, beforeEach, afterEach} from 'mocha';
var moc=require('mocha');
let url = 'https://lrdl4rm2bi.execute-api.us-east-2.amazonaws.com/sandbox';
//et api = request(url);

// TODO parameterize health check endpoint

moc.describe('Fly Box API Test', function () {
    moc.it('try 1', function (done) {
        console.log('in here');
        done();
    });
    // after(function (done) {
    //     done();
    // });
    // beforeEach(function (done) {
    //     done();
    // });
    // afterEach(function (done) {
    //     done();
    // });
    // Helth Test -> Is this api alive?
    // m.describe('the API ', function () {
    //     m.it('should respond to a request', function (done) {
    //         api.get('/all')
    //         .expect('Content-Type', 'application/json')
    //         .expect('Access-Control-Allow-Origin', '*')
    //         .expect(200, done);
    //     });
    // });
});

