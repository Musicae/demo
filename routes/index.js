var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Musicae' });
});

/* GET interpretation page. */
router.get('/js-bach/goldberg-variations-bmw-998/glenn-gloud-1981', function(req, res, next) {
  res.render('demo-gould-1981', { title: 'Musicae - Johann Sebastian Bach - Goldberg Variations, BMW 998 - Glenn Gould, 1981' });
});

/* GET version page. */
router.get('/variations-goldberg-bmw-998-version', function(req, res, next) {
  res.render('demo-goldberg-versions', { title: 'Musicae - Johann Sebastian Bach - Goldberg Variations, BMW 998' });
});

module.exports = router;
