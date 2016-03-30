'use strict';

angular.module('bhcmartApp')
  .factory('Catalog', function($resource) {
    return $resource('/api/catalogs/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  }).factory('Product', function($resource) {
    return $resource('/api/products/:id/:controller/:limit', null, {
      'update': { method: 'PUT' },
      'catalog': {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'catalog'
        }
      },
      'search': {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'search',
          limit: 100
        }
      },
      'review': {
        method: 'POST',
        params: {
          controller: 'reviews',
          limit: null
        }
      }
    });
  });