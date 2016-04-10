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
router.get('/:slug', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:slug/catalog/:limit', controller.catalog);
router.get('/:slug/search/:term', controller.search);

//image
router.post('/:id/images', multiparty(uploadOptions), controller.uploadImage);
router.get('/:id/images', controller.indexImage);
router.put('/:id/images/:image_id', controller.updateImage);

// Variants
router.post('/:id/variants', controller.createVariant);
router.get('/:id/variants', controller.indexVariant);
router.put('/:id/variants/:variant_id', controller.updateVariant);
router.patch('/:id/variants/:variant_id', controller.updateVariant);
router.delete('/:id/variants/:variant_id', controller.destroyVariant);

// Reviews
router.post('/:id/reviews', controller.createReview);
router.get('/:id/reviews', controller.indexReview);
router.put('/:id/reviews/:review_id', controller.updateReview);
router.patch('/:id/reviews/:review_id', controller.updateReview);


module.exports = router;
