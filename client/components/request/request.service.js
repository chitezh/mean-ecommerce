'use strict';

angular.module('bhcmartApp')
  .factory('Request', function($resource) {
    return $resource('/api/requests/:id/:controller', {
      id: '@_id'
    }, {
      'update': { method: 'PUT' },
      'myRequests': {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'myrequests'
        }
      }
    });
  });
