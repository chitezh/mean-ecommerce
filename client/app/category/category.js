'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('category', {
        abstract: true,
        url: '/category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      })
      .state('category.products', {
        url: "/{category_id}",
        templateUrl: 'app/category/product-list.html'
      });
  });
