'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var requestCtrlStub = {
  index: 'requestCtrl.index',
  show: 'requestCtrl.show',
  create: 'requestCtrl.create',
  update: 'requestCtrl.update',
  destroy: 'requestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var requestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './request.controller': requestCtrlStub
});

describe('Request API Router:', function() {

  it('should return an express router instance', function() {
    expect(requestIndex).to.equal(routerStub);
  });

  describe('GET /api/requests', function() {

    it('should route to request.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'requestCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/requests/:id', function() {

    it('should route to request.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'requestCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/requests', function() {

    it('should route to request.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'requestCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/requests/:id', function() {

    it('should route to request.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'requestCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/requests/:id', function() {

    it('should route to request.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'requestCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/requests/:id', function() {

    it('should route to request.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'requestCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
