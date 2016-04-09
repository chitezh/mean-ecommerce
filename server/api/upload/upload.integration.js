'use strict';

var app = require('../..');
import request from 'supertest';

var newUpload;

describe('Upload API:', function() {

  describe('GET /api/uploads', function() {
    var uploads;

    beforeEach(function(done) {
      request(app)
        .get('/api/uploads')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          uploads = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      uploads.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/uploads', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/uploads')
        .send({
          name: 'New Upload',
          info: 'This is the brand new upload!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newUpload = res.body;
          done();
        });
    });

    it('should respond with the newly created upload', function() {
      newUpload.name.should.equal('New Upload');
      newUpload.info.should.equal('This is the brand new upload!!!');
    });

  });

  describe('GET /api/uploads/:id', function() {
    var upload;

    beforeEach(function(done) {
      request(app)
        .get('/api/uploads/' + newUpload._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          upload = res.body;
          done();
        });
    });

    afterEach(function() {
      upload = {};
    });

    it('should respond with the requested upload', function() {
      upload.name.should.equal('New Upload');
      upload.info.should.equal('This is the brand new upload!!!');
    });

  });

  describe('PUT /api/uploads/:id', function() {
    var updatedUpload;

    beforeEach(function(done) {
      request(app)
        .put('/api/uploads/' + newUpload._id)
        .send({
          name: 'Updated Upload',
          info: 'This is the updated upload!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUpload = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUpload = {};
    });

    it('should respond with the updated upload', function() {
      updatedUpload.name.should.equal('Updated Upload');
      updatedUpload.info.should.equal('This is the updated upload!!!');
    });

  });

  describe('DELETE /api/uploads/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/uploads/' + newUpload._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when upload does not exist', function(done) {
      request(app)
        .delete('/api/uploads/' + newUpload._id)
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
