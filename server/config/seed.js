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
var mainCatalog, computers, laptops, desktops, fixtures, phones,
  phonesP, phonesT, fashion, men, women, books, artWorks, foods,
  variant, review, image1, homeAndKitchen;

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
      })
      .then(() => {
        console.log('finished populating dummy data');
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


Catalog.find({}).removeAsync()
  .then(function() {
    return Catalog.create({
      name: 'All'
    });
  })
  .then(function(catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({
      name: 'Computers and Accessories'
    });
  })
  .then(function(category) {
    computers = category;
    return computers.addChild({
      name: 'Laptops'
    });
  })
  .then(function(category) {
    laptops = category;
    return computers.addChild({
      name: 'Desktops'
    });
  })
  .then(function(category) {
    desktops = category;
    return mainCatalog.addChild({
      name: 'Fixtures'
    });
  })
  .then(function(category) {
    fixtures = category;
    return mainCatalog.addChild({
      name: 'Phones and Tablets'
    });
  })
  .then(function(category) {
    phones = category;
    return phones.addChild({
      name: 'Phones'
    });
  })
  .then(function(category) {
    phonesP = category;
    return phones.addChild({
      name: 'Tablets'
    });
  })
  .then(function(category) {
    phonesT = category;
    return mainCatalog.addChild({
      name: 'Fashion'
    });
  })
  .then(function(category) {
    fashion = category;
    return fashion.addChild({
      name: 'Men'
    });
  })
  .then(function(category) {
    men = category;
    return fashion.addChild({
      name: 'Women'
    });
  })
  .then(function(category) {
    women = category;
    return mainCatalog.addChild({
      name: 'Books'
    });
  })
  .then(function(category) {
    books = category;
    return mainCatalog.addChild({
      name: 'Art Works'
    });
  })
  .then(function(category) {
    artWorks = category;
    return mainCatalog.addChild({
      name: 'Foods and Recipee'
    });
  })
  .then(function(category) {
    foods = category;
    return mainCatalog.addChild({
      name: 'Home and Kitchen'
    });
  })
  .then(function(category) {
    homeAndKitchen = category;
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
    variant = v;
    Image.find({}).remove({});
    return Image.create({
      imageUrl: '/assets/uploads/general/1.jpg'
    })
  })
  .then(function(image) {
    image1 = image;
    return Image.create({
      imageUrl: '/assets/uploads/general/2.jpg'
    })
  })
  .then(function(image2) {
    return Product.create({
      title: 'Dell laptop',
      imageUrl: '/assets/uploads/general/1.jpg',
      price: 25,
      stock: 250,
      featured: true,
      new: true,
      variants: [variant._id],
      images: [image1._id, image2._id],
      categories: [laptops._id],
      description: 'Portable front laser lptop'
    }, {
      title: 'Hp 344 Desktops',
      imageUrl: '/assets/uploads/general/1.jpg',
      price: 25,
      stock: 250,
      featured: true,
      new: true,
      variants: [variant._id],
      images: [image1._id, image2._id],
      categories: [desktops._id],
      description: 'Durable office laptops'
    }, {
      title: 'MEAN eCommerce Book',
      imageUrl: '/assets/uploads/meanbook.jpg',
      price: 25,
      stock: 250,
      new: true,
      variants: [variant._id],
      images: [image1._id, image2._id],
      categories: [books._id],
      description: 'Build a powerful e-commerce application quickly with MEAN, a leading full-JavaScript stack.'
    }, {
      title: 'T-shirt',
      imageUrl: '/assets/uploads/meantshirt.jpg',
      price: 15,
      stock: 100,
      featured: true,
      hot: true,
      variants: [variant._id],
      images: [image1._id, image2._id],
      categories: [men._id],
      description: 'T-shirt with the MEAN stack logo'
    }, {
      title: 'Coffee Mug',
      imageUrl: '/assets/uploads/meanmug.jpg',
      price: 8,
      stock: 50,
      featured: true,
      new: true,
      variants: [variant._id],
      images: [image1._id, image2._id],
      categories: [books._id],
      description: 'Convert coffee into MEAN code'
    });
  })
  .then(function(x) {
    console.log('Finished populating Products with categories');
  })
  .then(null, function(err) {
    console.error('Error populating Products & categories: ', err);
  });
