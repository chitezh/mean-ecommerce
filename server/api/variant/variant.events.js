/**
 * Variant model events
 */

'use strict';

import {EventEmitter} from 'events';
var Variant = require('./variant.model');
var VariantEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VariantEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Variant.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    VariantEvents.emit(event + ':' + doc._id, doc);
    VariantEvents.emit(event, doc);
  }
}

export default VariantEvents;
