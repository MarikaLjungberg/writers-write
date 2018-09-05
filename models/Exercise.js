var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseTask: String,
  exerciseText: String,
  created: { type: Date, default : () => new Date()},
});

module.exports = mongoose.model('Exercise', exerciseSchema)