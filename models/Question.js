var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    name: String,
    text: String,
    sfw: Boolean
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;