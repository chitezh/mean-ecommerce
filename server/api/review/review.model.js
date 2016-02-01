'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
