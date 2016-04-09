'use strict';

var app = require('../..');
import request from 'supertest';

var newRequest;

describe('Request API:', function() {

  describe('GET /api/requests', function() {
    var requests;

    beforeEach(function(done) {
      request(app)
        .get('/api/requests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          requests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(requests).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/requests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/requests')
        .send({
          name: 'New Request',
          info: 'This is the brand new request!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRequest = res.body;
          done();
        });
    });

    it('should respond with the newly created request', function() {
      expect(newRequest.name).to.equal('New Request');
      expect(newRequest.info).to.equal('This is the brand new request!!!');
    });

  });

  describe('GET /api/requests/:id', function() {
    var request;

    beforeEach(function(done) {
      request(app)
        .get('/api/requests/' + newRequest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          request = res.body;
          done();
        });
    });

    afterEach(function() {
      request = {};
    });

    it('should respond with the requested request', function() {
      expect(request.name).to.equal('New Request');
      expect(request.info).to.equal('This is the brand new request!!!');
    });

  });

  describe('PUT /api/requests/:id', function() {
    var updatedRequest;

    beforeEach(function(done) {
      request(app)
        .put('/api/requests/' + newRequest._id)
        .send({
          name: 'Updated Request',
          info: 'This is the updated request!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRequest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRequest = {};
    });

    it('should respond with the updated request', function() {
      expect(updatedRequest.name).to.equal('Updated Request');
      expect(updatedRequest.info).to.equal('This is the updated request!!!');
    });

  });

  describe('DELETE /api/requests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/requests/' + newRequest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when request does not exist', function(done) {
      request(app)
        .delete('/api/requests/' + newRequest._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
