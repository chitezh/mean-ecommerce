'use strict';

describe('Directive: sidebarAccount', function () {

  // load the directive's module and view
  beforeEach(module('bhcmartApp'));
  beforeEach(module('components/sidebar-account/sidebar-account.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidebar-account></sidebar-account>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the sidebarAccount directive');
  }));
});
