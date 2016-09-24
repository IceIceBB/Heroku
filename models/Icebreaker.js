var mongoose = require('mongoose');

var IcebreakerSchema = mongoose.Schema({
    title: String
});

var Icebreaker = mongoose.model('Icebreaker', IcebreakerSchema);

module.exports = Icebreaker;