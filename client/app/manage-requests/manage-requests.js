'use strict';

angular.module('bhcmartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-requests', {
        url: '/manage-requests',
        templateUrl: 'app/manage-requests/manage-requests.html',
        controller: 'ManageRequestsCtrl'
      });
  });
