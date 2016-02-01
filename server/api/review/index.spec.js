'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var reviewCtrlStub = {
  index: 'reviewCtrl.index',
  show: 'reviewCtrl.show',
  create: 'reviewCtrl.create',
  update: 'reviewCtrl.update',
  destroy: 'reviewCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var reviewIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './review.controller': reviewCtrlStub
});

describe('Review API Router:', function() {

  it('should return an express router instance', function() {
    expect(reviewIndex).to.equal(routerStub);
  });

  describe('GET /api/reviews', function() {

    it('should route to review.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'reviewCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/reviews/:id', function() {

    it('should route to review.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'reviewCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/reviews', function() {

    it('should route to review.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'reviewCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/reviews/:id', function() {

    it('should route to review.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'reviewCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/reviews/:id', function() {

    it('should route to review.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'reviewCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/reviews/:id', function() {

    it('should route to review.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'reviewCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
