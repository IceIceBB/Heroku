var express = require('express');
var router = express.Router();

var Icebreaker = require('../models/Icebreaker.js');
var Question = require('../models/Question.js');

/* GET users listing. */
router.get('/', function (req, res) {
    Question.find({}, function (err, question) {
        res.json(question);
    });
});

router.get('/test', function (req, res) {
    var test = {
        name: "Test Question",
        text: "Text",
        sfw: true
    };

    Question.create(test, function (err, question) {
        if (err) {
            res.send("Failed");
        } else {
            res.json({
                success: true,
                question: question
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