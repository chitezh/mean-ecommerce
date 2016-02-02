/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProductEvents = require('./product.events').product;
var ImageEvents = require('./product.events').image;
var ReviewEvents = require('./product.events').review;
var VariantEvents = require('./product.events').variant;

// Model events to emit
var events = ['save', 'remove'];

exports.register = function(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('product:' + event, socket);

    ProductEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener, ProductEvents));
  }
};

exports.registerImage = function(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('image:' + event, socket);

    ImageEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener, ImageEvents));
  }
};

exports.registerReview = function(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('review:' + event, socket);

    ReviewEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener, ReviewEvents));
  }
};

exports.registerVariant = function(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('variant:' + event, socket);

    VariantEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener, VariantEvents));
  }
};



function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  };
}

function removeListener(event, listener, ModelEvents) {
  return function() {
    ModelEvents.removeListener(event, listener);
  };
}
