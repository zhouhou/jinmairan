var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('hero2');
}),
    module.exports = router;