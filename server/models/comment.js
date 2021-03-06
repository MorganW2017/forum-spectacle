var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new mongoose.Schema({
  body: {type: String, required: true},
  votes: {type: ObjectId, ref: 'User'},
  creatorId: {type: ObjectId, ref: 'User'},
  postId: {type: ObjectId, ref: 'Post'},
  created: {type: Number, default: Date.now()}  
})

module.exports = mongoose.model('Comment', schema)