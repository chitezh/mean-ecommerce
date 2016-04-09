'use strict';

describe('Controller: ManageCategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('bhcmartApp'));

  var ManageCategoriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageCategoriesCtrl = $controller('ManageCategoriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
