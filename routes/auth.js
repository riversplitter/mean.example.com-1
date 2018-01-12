var express = require('express');
var router = express.Router();

router.get('/goole/callback', function(req, res, next) {
  res.redirect('/users');
});

module.exports = router;
