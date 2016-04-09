'use strict';

describe('Controller: SidebarAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('bhcmartApp'));

  var SidebarAccountCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarAccountCtrl = $controller('SidebarAccountCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
