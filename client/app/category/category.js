'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/category/{slug}',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      })
  });
