'use strict';

angular.module('bhcmartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search?category&term',
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });
