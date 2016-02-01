'use strict';

var app = require('../..');
import request from 'supertest';

var newReview;

describe('Review API:', function() {

  describe('GET /api/reviews', function() {
    var reviews;

    beforeEach(function(done) {
      request(app)
        .get('/api/reviews')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          reviews = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(reviews).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/reviews', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/reviews')
        .send({
          name: 'New Review',
          info: 'This is the brand new review!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newReview = res.body;
          done();
        });
    });

    it('should respond with the newly created review', function() {
      expect(newReview.name).to.equal('New Review');
      expect(newReview.info).to.equal('This is the brand new review!!!');
    });

  });

  describe('GET /api/reviews/:id', function() {
    var review;

    beforeEach(function(done) {
      request(app)
        .get('/api/reviews/' + newReview._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          review = res.body;
          done();
        });
    });

    afterEach(function() {
      review = {};
    });

    it('should respond with the requested review', function() {
      expect(review.name).to.equal('New Review');
      expect(review.info).to.equal('This is the brand new review!!!');
    });

  });

  describe('PUT /api/reviews/:id', function() {
    var updatedReview;

    beforeEach(function(done) {
      request(app)
        .put('/api/reviews/' + newReview._id)
        .send({
          name: 'Updated Review',
          info: 'This is the updated review!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedReview = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedReview = {};
    });

    it('should respond with the updated review', function() {
      expect(updatedReview.name).to.equal('Updated Review');
      expect(updatedReview.info).to.equal('This is the updated review!!!');
    });

  });

  describe('DELETE /api/reviews/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/reviews/' + newReview._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when review does not exist', function(done) {
      request(app)
        .delete('/api/reviews/' + newReview._id)
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
