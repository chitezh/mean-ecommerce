'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema

var OrderItemSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  total: Number,
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});

var OrderSchema = new Schema({
  shipping: Number,
  tax: Number,
  taxRate: Number,
  subTotal: Number,
  totalCost: Number,
  items: [OrderItemSchema],
  customerId: String,
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  customerPhone: String,
  customerCity: String,
  customerState: String,
  customerCountry: String
});

export default mongoose.model('Order', OrderSchema);
