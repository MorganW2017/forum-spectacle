var mongoose = require('mongoose')
var ObjectId = Schema.Types.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creatorId: {type: ObjectId, ref: 'User'},
  created: { type: Number, defualt: Date.now() },

})

module.exports = mongoose.model('Post', schema)