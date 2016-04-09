'use strict';

var express = require('express');
var controller = require('./upload.controller');
var multiparty = require('connect-multiparty');
var uploadOptions = {
  autoFile: true,
  uploadDir: 'client/assets/uploads/'
}
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', multiparty(uploadOptions), controller.create);
router.put('/:id', multiparty(uploadOptions), controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
