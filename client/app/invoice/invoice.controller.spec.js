'use strict';

describe('Controller: InvoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('bhcmartApp'));

  var InvoiceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoiceCtrl = $controller('InvoiceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
