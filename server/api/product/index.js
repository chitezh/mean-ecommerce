'use strict';

var express = require('express');
var controller = require('./product.controller');
var multiparty = require('connect-multiparty');
var uploadOptions = { autoFile: true,
                      uploadDir: 'client/assets/uploads/'
}

var router = express.Router();

// product
router.post('/:id/upload', multiparty(uploadOptions), controller.upload);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:slug/catalog', controller.catalog);
router.get('/:term/search', controller.search);

//image
router.post('/:id/images', multiparty(uploadOptions), controller.uploadImage);
router.get('/:id/images', controller.indexImage);
router.put('/:id/images/:image_id', controller.updateImage);

// Variants
router.post('/:id/variants', controller.createVariant);
router.get('/:id/variants', controller.indexVariant);
/*router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;
