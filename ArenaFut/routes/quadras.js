var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('quadras', { title: 'Bem vindos às quadras' });
});

module.exports = router;
