'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  imageUrl: {
    type: String
  },
  imageBin: {
    data: Buffer,
    contentType: String
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Image', ImageSchema);
