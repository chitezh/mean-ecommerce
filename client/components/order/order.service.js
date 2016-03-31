'use strict';

angular.module('bhcmartApp')
  .factory('Order', function($resource) {
    return $resource('/api/orders/:id/:controller', null, {
      'update': { method: 'PUT' },
      'myOrders': {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'myorders'
        }
      }
    });
  });
