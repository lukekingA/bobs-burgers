let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Meal';

let schema = new Schema({
  orderId: {
    type: ObjectId,
    ref: 'Order',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  // entree: {
  //   type: ObjectId,
  //   ref: 'Order'
  // },
  // drink: {
  //   type: ObjectId,
  //   ref: 'Order'
  // },
  // side: {
  //   type: ObjectId,
  //   ref: 'Order'
  // }
});

module.exports = mongoose.model(schemaName, schema);