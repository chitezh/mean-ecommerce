'use strict';

angular.module('bhcmartApp')
  .factory('Order', function($resource) {
    return $resource('/api/orders/:id', null, {
      'update': { method: 'PUT' }
    });
  });
