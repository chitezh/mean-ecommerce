'use strict';

angular.module('sourceApp.auth', [
  'sourceApp.constants',
  'sourceApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
