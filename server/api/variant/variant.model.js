'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var VariantSchema = new Schema({
  code: {
    type: String
  },
  price: {
    type: Number,
    min: 0
  },
  stock: {
    type: Number,
    min: 0
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Variant', VariantSchema);
