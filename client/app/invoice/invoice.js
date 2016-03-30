'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('invoice', {
        url: '/invoice/{id}',
        templateUrl: 'app/invoice/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .state('invoiceprint', {
        url: '/invoice/{id}/print',
        templateUrl: 'app/invoice/invoice-print.html',
        controller: 'InvoiceCtrl'
      });
  });
