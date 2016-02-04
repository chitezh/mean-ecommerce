'use strict';

angular.module('bhcmartApp.auth', [
  'bhcmartApp.constants',
  'bhcmartApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
