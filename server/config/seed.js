/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model').product;
var Variant = require('../api/product/product.model').variant;
var Review = require('../api/product/product.model').review;
var Image = require('../api/product/product.model').image;
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, home, books, clothing, variant, review;

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
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });


Catalog
  .find({})
  .remove()
  .then(function() {
    return Catalog.create({
      name: 'All'
    });
  })
  .then(function(catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({
      name: 'Home'
    });
  })
  .then(function(category) {
    home = category._id;
    return mainCatalog.addChild({
      name: 'Books'
    });
  })
  .then(function(category) {
    books = category._id;
    return mainCatalog.addChild({
      name: 'Clothing'
    });
  })
  .then(function(category) {
    clothing = category._id;
    return Product.find({}).remove({});
  })
  .then(function() {
    Variant.find({}).remove({});
    return Variant.create({
      code: "FG-FG",
      price: 2000,
      stock: 113,
      description: "Black Jeans"
    });
  })
  .then(function(v) {
    variant = v._id;
    Image.find({}).remove({});
    return Image.create({
      imageUrl: '/assets/uploads/meanbook.jpg',
    })
  })
  .then(function(image) {
    return Product.create({
      title: 'MEAN eCommerce Book',
      imageUrl: '/assets/uploads/meanbook.jpg',
      price: 25,
      stock: 250,
      variants: [variant],
      images: [image._id, image._id],
      categories: [books],
      description: 'Build a powerful e-commerce application quickly with MEAN, a leading full-JavaScript stack. It takes you step-by-step from creating a real-world store to managing details such as authentication, shopping carts, payment, scalability and more.'
    }, {
      title: 'T-shirt',
      imageUrl: '/assets/uploads/meantshirt.jpg',
      price: 15,
      stock: 100,
      variants: [variant],
      images: [image._id, image._id],
      categories: [clothing],
      description: 'T-shirt with the MEAN stack logo'
    }, {
      title: 'Coffee Mug',
      imageUrl: '/assets/uploads/meanmug.jpg',
      price: 8,
      stock: 50,
      variants: [variant],
      images: [image._id],
      categories: [home],
      description: 'Convert coffee into MEAN code'
    });
  })
  .then(function() {
    console.log('Finished populating Products with categories');
  })
  .then(null, function(err) {
    console.error('Error populating Products & categories: ', err);
  });
