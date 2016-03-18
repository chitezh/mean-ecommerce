'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Electronic',
    'state': 'category.products({"category_id": "56ec373434da186cfe4be2de"})'
  }, {
    'title': 'Fashion',
    'state': 'category.products({"category_id": "56ec373434da186cfe4be2de"})'
  }, {
    'title': 'Featured',
    'state': 'main',
    'featured': [{
      'image': 'assets/img/mega-b-6.jpg',
      'title': 'Jewery & Accessories',
      'state': 'category.products({"category_id": "56ec373434da186cfe4be2de"})',
      'items': [{
        'title': 'Hats & Gloves',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Cold-Weather',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Fur & Faux Fur',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Wraps,Capes & Vests',
        'state': 'products.detail({id: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-5.jpg',
      'title': 'HANDBAGS',
      'state': 'category.products({"category_id": "56ec373434da186cfe4be2de"})',
      'items': [{
        'title': 'Shop All',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'New Arrivals',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Crossbody Bags',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Shoulder Bags',
        'state': 'products.detail({id: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-7.jpg',
      'title': 'Shoes',
      'state': 'category.products({"category_id": "56ec373434da186cfe4be2de"})',
      'items': [{
        'title': 'Pumps & Slingbacks',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Evening',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Oxfords, Loafers',
        'state': 'products.detail({id: "1"})'
      }, {
        'title': 'Cold Weath',
        'state': 'products.detail({id: "1"})'
      }]
    }]
  }, {
    'title': 'About Us',
    'state': 'main.about'
  }, {
    'title': 'Contact Us',
    'state': 'main.contact'
  }];


  isCollapsed = true;
  //end-non-standard

  constructor(Auth, Catalog) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    let self = this;

    Catalog.query(function(categories) {
      self.parentCategories = _.filter(categories, function(category) {
        return category.ancestors.length == 1;
      })
    });
  }
}

angular.module('bhcmartApp')
  .controller('NavbarController', NavbarController);
