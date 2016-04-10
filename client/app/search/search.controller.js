'use strict';

angular.module('bhcmartApp')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'products', function($scope, $stateParams, products) {
   
    $scope.products = products;
    console.log($stateParams.category, $stateParams.term);
  }]);
