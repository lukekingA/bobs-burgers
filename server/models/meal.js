let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Meal';

let schema = new Schema({
  price: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  entree: {
    type: ObjectId,
    ref: 'OrderId'
  },
  drink: {
    type: ObjectId,
    ref: 'OrderId'
  },
  side: {
    type: ObjectId,
    ref: 'OrderId'
  }
});

module.exports = mongoose.model(schemaName, schema);