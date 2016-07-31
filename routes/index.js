var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Musicae' });
});

/* GET interpretation page. */
router.get('/goldberg-variations-bmw-998/glenn-gloud-1981', function(req, res, next) {
  res.render('demo-gould-1981', { title: 'Musicae - J.S. Bach - Goldberg Variations, BMW 998 - Glenn Gould, 1981' });
});

module.exports = router;
