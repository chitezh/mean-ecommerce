'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var variantCtrlStub = {
  index: 'variantCtrl.index',
  show: 'variantCtrl.show',
  create: 'variantCtrl.create',
  update: 'variantCtrl.update',
  destroy: 'variantCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var variantIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './variant.controller': variantCtrlStub
});

describe('Variant API Router:', function() {

  it('should return an express router instance', function() {
    expect(variantIndex).to.equal(routerStub);
  });

  describe('GET /api/variants', function() {

    it('should route to variant.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'variantCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/variants/:id', function() {

    it('should route to variant.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'variantCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/variants', function() {

    it('should route to variant.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'variantCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/variants/:id', function() {

    it('should route to variant.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'variantCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/variants/:id', function() {

    it('should route to variant.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'variantCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/variants/:id', function() {

    it('should route to variant.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'variantCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
