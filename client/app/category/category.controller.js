'use strict';

angular.module('bhcmartApp')
  .controller('CategoryCtrl', ['$stateParams', function ($scope, $stateParams) {
  	console.log($stateParams)
    $scope.stateParams = $stateParams;
  }]);
