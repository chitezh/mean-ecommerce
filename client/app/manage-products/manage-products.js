'use strict';

angular.module('bhcmartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-products', {
        url: '/manage-products',
        templateUrl: 'app/manage-products/manage-products.html',
        controller: 'ManageProductsCtrl'
      });
  });
