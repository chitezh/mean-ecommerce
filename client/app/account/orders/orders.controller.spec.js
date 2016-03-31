'use strict';

describe('Controller: OrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('bhcmartApp'));

  var OrdersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdersCtrl = $controller('OrdersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
