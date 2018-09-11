var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseTask: String,
  exerciseText: String,
  created: { type: String, default : () => new Date().toString},
});

module.exports = mongoose.model('Exercise', exerciseSchema)