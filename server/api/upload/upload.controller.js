/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/uploads              ->  index
 * POST    /api/uploads              ->  create
 * GET     /api/uploads/:id          ->  show
 * PUT     /api/uploads/:id          ->  update
 * DELETE  /api/uploads/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import path from 'path';

var Upload = require('./upload.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Uploads
export function index(req, res) {
  Upload.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Upload from the DB
export function show(req, res) {
  Upload.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Upload in the DB
export function create(req, res) {
  var file = req.files.file;
  if (!file) {
    return handleError(res)('File not provided');
  }
  var newPath = 'assets/uploads/' + path.basename(file.path);
  Upload.createAsync({url: newPath})
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Upload in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Upload.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Upload from the DB
export function destroy(req, res) {
  Upload.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
