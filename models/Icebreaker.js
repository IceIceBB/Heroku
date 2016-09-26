var mongoose = require('mongoose');

var IcebreakerSchema = mongoose.Schema({
    name: String,
    comment: String,
    rules: String,
    isclean: Boolean,
    hasDice: Boolean,
    hasCards: Boolean,
    tags: String,
    minPlayers: Number,
    maxPlayers: Number,
    materials: String,
    url: String,
    rating: Number
});

var Icebreaker = mongoose.model('Icebreaker', IcebreakerSchema);

module.exports = Icebreaker;