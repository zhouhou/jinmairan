var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('website2');
}),
    module.exports = router;