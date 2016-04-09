'use strict';

angular.module('bhcmartApp')
  .controller('OrdersCtrl', ['$scope', 'Order', 'Auth', 'Modal', function($scope, Order, Auth, Modal) {
    var user = Auth.getCurrentUser();
    $scope.isAdmin = Auth.hasRole('admin');

    if ($scope.isAdmin)
      $scope.orders = Order.query();
    else
      $scope.orders = Order.myOrders({ id: user._id });

    $scope.deleteOrder = Modal.confirm.delete(function(o) {
      o.$remove(o._id, function(resp) {
        console.log(resp)
        $scope.orders.splice($scope.orders.indexOf(o), 1);
      })
    });

    $scope.deliverOrder = Modal.confirm.deliver(function(o) {
      o.delivered = o.delivered ? false : true;
      o.$update(function(resp) {
        console.log(resp)
      })
    });
  }]);
