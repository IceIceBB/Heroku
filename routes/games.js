var express = require('express');
var router = express.Router();

var Icebreaker = require('../models/Icebreaker.js');
var Question = require('../models/Question.js');

router.get('/', function (req, res) {
    Icebreaker.find({}, function (err, games) {
        res.json({ games: games });
    });
});

router.get('/test', function (req, res) {
    var test = {
        name: "test name",
        comment: "test comment",
        rules: "test rules",
        isclean: true,
        hasDice: true,
        hasCards: true,
        tags: "tag1 tag2 tag3",
        minPlayers: 1,
        maxPlayers: 5,
        materials: "String Paper Scissors",
        url: "http://www.nintendo.com/images/page/nes-classic/nes-classic-edition.png",
        rating: 10
    };

    Icebreaker.create(test, function (err, game) {
        if (err) {
            res.send("Failed");
        } else {
            res.json({
                success: true,
                game : game
            });
        }
    });
});

router.post('/', function (req, res) {
    Icebreaker.create(req.body, function (err, icebreaker) {
        res.json(icebreaker);
    });
});

module.exports = router;