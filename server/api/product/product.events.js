 /**
  * Product model events
  */

 'use strict';

 var EventEmitter = require('events').EventEmitter;
 var Product = require('./product.model').product;
 var Image = require('./product.model').image;
 var Review = require('./product.model').review;
 var Variant = require('./product.model').variant;

 var ProductEvents = new EventEmitter();
 var ImageEvents = new EventEmitter();
 var ReviewEvents = new EventEmitter();
 var VariantEvents = new EventEmitter();


 // Set max event listeners (0 == unlimited)
 ProductEvents.setMaxListeners(0);
 ImageEvents.setMaxListeners(0);
 ReviewEvents.setMaxListeners(0);
 VariantEvents.setMaxListeners(0);

 // Model events
 var events = {
   'save': 'save',
   'remove': 'remove'
 };

 function emitEvent(event, ModelEvents) {
   return function(doc) {
     ModelEvents.emit(event + ':' + doc._id, doc);
     ModelEvents.emit(event, doc);
   }
 }

 // Register the event emitter to the model events
 for (var e in events) {
   var event = events[e];
   Product.schema.post(e, emitEvent(event, ProductEvents));
 }

 // Register the event emitter to the model events
 for (var e in events) {
   var event = events[e];
   Image.schema.post(e, emitEvent(event, ImageEvents));
 }
 // Register the event emitter to the model events
 for (var e in events) {
   var event = events[e];
   Review.schema.post(e, emitEvent(event, ReviewEvents));
 }
 // Register the event emitter to the model events
 for (var e in events) {
   var event = events[e];
   Variant.schema.post(e, emitEvent(event, VariantEvents));
 }

 module.exports = {
   product: ProductEvents,
   image: ImageEvents,
   review: ReviewEvents,
   variant: VariantEvents
 };
