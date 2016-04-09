/**
 * Request model events
 */

'use strict';

import {EventEmitter} from 'events';
var Request = require('./request.model');
var RequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Request.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RequestEvents.emit(event + ':' + doc._id, doc);
    RequestEvents.emit(event, doc);
  }
}

export default RequestEvents;
