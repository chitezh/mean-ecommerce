'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage-products', {
        url: '/manage-products',
        templateUrl: 'app/manage-products/manage-products.html',
        controller: 'ManageProductsCtrl'
      })
      .state('edit-product', {
        url: '/manage-product/{id}',
        templateUrl: 'app/manage-products/manage-products-edit.html',
        controller: 'ManageProductsEditCtrl',
        resolve: {
          categories: ['Catalog', function(Catalog) {
            return Catalog.query();
          }],
          product: ['Product', '$stateParams', function(Product, $stateParams) {
            return Product.get({ id: $stateParams.id });
          }]
        }
      })
      .state('add-product', {
        url: '/add-product',
        templateUrl: 'app/manage-products/manage-products-add.html',
        controller: 'ManageProductsAddCtrl',
        resolve: {
          categories: ['Catalog', function(Catalog) {
            return Catalog.query();
          }]
        }
      });
  });
