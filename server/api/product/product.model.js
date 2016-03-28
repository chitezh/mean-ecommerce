'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema
var slugs = require('mongoose-url-slugs');

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
  by: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  posted: {
    type: Date,
    default: Date.now
  }
});

var ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String
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
  featured: {
    type: Boolean,
    default: false
  },
  hot: {
    type: Boolean,
    default: false
  },
  new: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String
  },
  imageBin: {
    data: Buffer,
    contentType: String
  },
  description: String,
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Image',
    index: true
  }],
  variants: [{
    type: Schema.Types.ObjectId,
    ref: 'Variant',
    index: true
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
    index: true
  }],
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Catalog',
    index: true
  }]
}).index({
  'title': 'text',
  'description': 'text'
});

ProductSchema.plugin(slugs('title'));

module.exports = {
  product: mongoose.model('Product', ProductSchema),
  variant: mongoose.model('Variant', VariantSchema),
  image: mongoose.model('Image', ImageSchema),
  review: mongoose.model('Review', ReviewSchema)
}
