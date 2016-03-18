'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Electronic',
    'state': 'electronic'
  }, {
    'title': 'Fashion',
    'state': 'fashion'
  }, {
    'title': 'About Us',
    'state': 'about-us'
  }, {
    'title': 'Contact Us',
    'state': 'contact-us'
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
