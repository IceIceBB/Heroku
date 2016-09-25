var express = require('express');
var router = express.Router();

var Icebreaker = require('../models/Icebreaker.js');
var Question = require('../models/Question.js');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/test', function (req, res) {
    res.json({
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
        rating: 10
    });

    //Icebreaker.create(req.body, function (err) {});
});

router.post('/', function (req, res) {
    Icebreaker.create(req.body, function (err, icebreaker) {
        res.json(icebreaker);
    });
});

module.exports = router;