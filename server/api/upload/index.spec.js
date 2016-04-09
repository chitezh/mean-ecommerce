'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var uploadCtrlStub = {
  index: 'uploadCtrl.index',
  show: 'uploadCtrl.show',
  create: 'uploadCtrl.create',
  update: 'uploadCtrl.update',
  destroy: 'uploadCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var uploadIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './upload.controller': uploadCtrlStub
});

describe('Upload API Router:', function() {

  it('should return an express router instance', function() {
    uploadIndex.should.equal(routerStub);
  });

  describe('GET /api/uploads', function() {

    it('should route to upload.controller.index', function() {
      routerStub.get
        .withArgs('/', 'uploadCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/uploads/:id', function() {

    it('should route to upload.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'uploadCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/uploads', function() {

    it('should route to upload.controller.create', function() {
      routerStub.post
        .withArgs('/', 'uploadCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/uploads/:id', function() {

    it('should route to upload.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'uploadCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/uploads/:id', function() {

    it('should route to upload.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'uploadCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/uploads/:id', function() {

    it('should route to upload.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'uploadCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
