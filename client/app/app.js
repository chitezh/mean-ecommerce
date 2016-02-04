'use strict';

angular.module('bhcmartApp', [
    'bhcmartApp.auth',
    'bhcmartApp.admin',
    'bhcmartApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
