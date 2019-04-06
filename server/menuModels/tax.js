let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Tax'


let schema = new Schema({
  tax: {
    type: Number,
    default: 6,
    required: true
  }
}, {
  timestamps: true
})

// schema.post('save', (doc, next) => {
//   this.find({}).then((taxes) => {
//     taxes.forEach(t => {
//       if (t._id != doc._id) {
//         this.remove(t)
//       }
//     })
//     next()
//   })
// })

module.exports = mongoose.model(schemaName, schema)