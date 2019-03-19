let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'List'


let schema = new Schema({
  price: { type: String, required: true },
}, { timestamps: true })

//CASCADE ON DELETE



module.exports = mongoose.model(schemaName, schema)