'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage-requests', {
        url: '/manage-requests',
        templateUrl: 'app/manage-requests/manage-requests.html',
        controller: 'ManageRequestsCtrl'
      })
      .state('submit-request', {
        url: '/submit-request',
        templateUrl: 'app/manage-requests/submit-request.html',
        controller: 'SubmitRequestCtrl'
      }).state('view-request', {
        url: '/request/{id}',
        templateUrl: 'app/manage-requests/view-request.html',
        controller: 'ViewRequestCtrl'
      });
  });
