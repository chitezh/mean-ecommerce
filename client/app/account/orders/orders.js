'use strict';

angular.module('bhcmartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        templateUrl: 'app/account/orders/orders.html',
        controller: 'OrdersCtrl',
        authenticate: true
      });
  });
