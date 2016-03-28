'use strict';

describe('Service: catolog', function () {

  // load the service's module
  beforeEach(module('sourceApp'));

  // instantiate service
  var catolog;
  beforeEach(inject(function (_catolog_) {
    catolog = _catolog_;
  }));

  it('should do something', function () {
    expect(!!catolog).to.be.true;
  });

});
