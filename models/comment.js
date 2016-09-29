var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    gameName: String,
    userName: String,
    text: String,
    rating: Number
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;