/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import _ from 'lodash';
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model').product;
var Variant = require('../api/product/product.model').variant;
var Review = require('../api/product/product.model').review;
var Image = require('../api/product/product.model').image;
var Catalog = require('../api/catalog/catalog.model');
import mongoose from 'mongoose';



var users = require('../data/users.json');
var catalogs = require('../data/catalogs.json');
var variants = require('../data/variants.json');
var images = require('../data/images.json');
var reviews = require('../data/reviews.json');
var products = require('../data/products.json');

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
          'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
          'Stylus, Sass, and Less.'
      }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
          'AngularJS, and Node.'
      }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep ' +
          'tests alongside code. Automatic injection of scripts and ' +
          'styles into your index.html'
      }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more ' +
          'code reusability and maximum scalability'
      }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript ' +
          'payload, minifies your scripts/css/img, and rewrites asset ' +
          'names for caching.'
      }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
          'and openshift subgenerators'
      })
      .then(() => {
        console.log('finished populating dummy data');
      });
  });

/*var e = []
var d = []
for (var i = 10; i >= 0; i--) {
  var a = {
    _id: mongoose.Types.ObjectId(),
    title: "Test Review " + i + 1,
    content: "uild process packs ",
    by: users[Math.floor(Math.random() * 1)]._id,
    rating: 1 + Math.ceil(Math.random() * 4)
  }
  e.push(a)
  d.push(a._id)
};

console.log(e)
console.log(d)*/

User.find({}).removeAsync()
  .then(() => {
    _.each(users, function(user) {
      User.create(user);
    })
  })
  .then(() => {
    console.log('finished populating users');
  });

Catalog.find({}).removeAsync()
  .then(() => {
    _.each(catalogs, function(catalog) {
      Catalog.create(catalog);
    })
  }).then(() => {
    console.log('finished populating catalogs');
  });

Variant.find({}).removeAsync()
  .then(() => {
    _.each(variants, function(variant) {
      Variant.create(variant);
    })
  }).then(() => {
    console.log('finished populating variants ');
  });

Image.find({}).removeAsync()
  .then(() => {
    _.each(images, function(image) {
      Image.create(image);
    })
  }).then(() => {
    console.log('finished populating images');
  });

Review.find({}).removeAsync()
  .then(() => {
    _.each(reviews, function(review) {
      Review.create(review);
    })
  }).then(() => {
    console.log('finished populating reviews');
  });

Product.find({}).removeAsync()
  .then(() => {
    _.each(products, function(product) {
      Product.create(product);
    })
  }).then(() => {
    console.log('finished populating products');
  });
