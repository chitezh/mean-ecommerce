/**
 * Upload model events
 */

'use strict';

import {EventEmitter} from 'events';
var Upload = require('./upload.model');
var UploadEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UploadEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Upload.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    UploadEvents.emit(event + ':' + doc._id, doc);
    UploadEvents.emit(event, doc);
  }
}

export default UploadEvents;
