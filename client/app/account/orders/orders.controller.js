'use strict';

angular.module('bhcmartApp')
  .controller('OrdersCtrl', ['$scope', 'Order','Auth', function($scope, Order, Auth) {
    var user = Auth.getCurrentUser();
    $scope.orders = Order.myOrders({id: user._id});
  }]);
