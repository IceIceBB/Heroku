var express = require('express');
var router = express.Router();

var Icebreaker = require('../models/Icebreaker.js');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    Icebreaker.create(req.body, function (err, icebreaker) {
        res.json(icebreaker);
    });
});

module.exports = router;