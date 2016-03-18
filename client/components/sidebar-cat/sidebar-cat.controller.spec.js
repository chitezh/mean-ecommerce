'use strict';

describe('Controller: SidebarCatCtrl', function () {

  // load the controller's module
  beforeEach(module('bhcmartApp'));

  var SidebarCatCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarCatCtrl = $controller('SidebarCatCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
