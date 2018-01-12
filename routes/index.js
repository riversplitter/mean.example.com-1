var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Benjamin'});
});

module.exports = router;
