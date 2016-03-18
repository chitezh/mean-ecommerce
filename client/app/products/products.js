'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl'
      })
      .state('products.detail', {
        url: '/{id}',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl'
      });
  });
