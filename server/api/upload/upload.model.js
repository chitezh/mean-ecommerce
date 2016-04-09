'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import { Schema } from 'mongoose';

var UploadSchema = new mongoose.Schema({
  url: String,
  active: Boolean
});

export default mongoose.model('Upload', UploadSchema);
