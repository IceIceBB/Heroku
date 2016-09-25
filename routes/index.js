var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json({
        games: "/games",
        questions: "/questions"
    });
});

module.exports = router;