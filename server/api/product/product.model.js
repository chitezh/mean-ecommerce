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
    type: Boolean
  }
});

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

var ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 1
  },
  description: String,
  images: [ImageSchema],
  variants: [VariantSchema],
  reviews: [ReviewSchema],
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Catalog',
    index: true
  }]
}).index({
  'title': 'text',
  'description': 'text'
});

module.exports = mongoose.model('Product', ProductSchema);
