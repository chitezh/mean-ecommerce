'use strict';

angular.module('bhcmartApp')
  .factory('Catalog', function($resource) {
    return $resource('/api/catalogs/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  });
