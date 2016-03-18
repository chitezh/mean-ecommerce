'use strict';

describe('Directive: sidebarCat', function () {

  // load the directive's module and view
  beforeEach(module('bhcmartApp'));
  beforeEach(module('components/sidebar-cat/sidebar-cat.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidebar-cat></sidebar-cat>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the sidebarCat directive');
  }));
});
