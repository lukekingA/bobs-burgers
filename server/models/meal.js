let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Meal';
let Entrees = require('./entree')
let Drinks = require('./drink')
let Sides = require('./side')

let schema = new Schema({
  orderId: {
    type: ObjectId,
    ref: 'Order',
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  comment: {
    type: String
  },

});
schema.pre('remove', function () {
  let members = [Entrees, Drinks, Sides]
  members.forEach(m => {
    m.findByIdAndRemove({
      mealId: this._id
    })
  })
})

module.exports = mongoose.model(schemaName, schema);