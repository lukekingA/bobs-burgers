let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Menu Entree';

let menuEntree = new Schema({});

module.exports = mongoose.model(schemaName, menuEntree);
