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
var goldbergContent = [
	{
		'blockName': 'Reference Versions',
		'blockVersions': [
			{
				'performer': 'Glenn Gould',
				'date': 1981,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A1aCpHSQE5ghxibsQ5gkBe0',
				'imageUrl': '/images/glenn-gould-1981.jpg',
				'blackPlayer': true
			},
			{
				'performer': 'Murray Perahia',
				'date': 2000,
				'keywords': ['Colourful', 'Moving', 'Intellect'],
				'upvotesCount': 200,
				'commentsCount': 8,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A2ecywJZyq9FeZWhKUT0kIq',
				'imageUrl': '/images/murray-perahia.jpg'
			},
			{
				'performer': 'András Schiff',
				'date': 1982,
				'keywords': ['Clarity', 'Sensitive', 'Colourful'],
				'upvotesCount': 124,
				'commentsCount': 6,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A6BPySwMHalhWlXn7fsSXqE',
				'imageUrl': '/images/andras-schiff.jpg'
			},
		]
	},
	{
		'blockName': 'New Versions',
		'blockVersions': [
			{
				'performer': 'Alexandre Tharaud',
				'date': 2015,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A6pyy2WoFZvmohjwHOzLzkt',
				'imageUrl': '/images/alexandre-tharaud.jpg'
			},
			{
				'performer': 'Nicholas Angelich',
				'date': 2011,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A3zKmTIFDNOwBgHUEj5zbfV',
				'imageUrl': '/images/Nicholas-Angelich.jpg'
			},
			{
				'performer': 'Avner Arad',
				'date': 2011,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A5LPqAhrJeLJJTOusuCGoIL',
				'imageUrl': '/images/Arad-Avner.jpg'
			},
			{
				'performer': 'Andrea Bacchetti',
				'date': 2006,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A4MRbZKtQP0hoILkG8EazrV',
				'imageUrl': '/images/Bacchetti-Andrea.jpg'
			},
			{
				'performer': 'Tzimon Barto',
				'date': 2015,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A5yXrtDqKN3VOFQOpd7maFY',
				'imageUrl': '/images/Tzimon-Barto.jpg'
			},
		]
	},
  {
    'blockName': '21th Century Versions',
    'blockVersions': [
      {
        'performer': 'Glenn Gould',
        'date': 1955,
        'keywords': ['Clarity', 'Well-designed', 'Fast'],
        'upvotesCount': 124,
        'commentsCount': 6,
        'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A0ogm04LcccovebvmP9Mo6W',
        'imageUrl': '/images/glenn-gould-1955.jpg'
      },
      {
        'performer': 'Rosalyn Tureck',
        'date': 1999,
        'keywords': ['Gravitas', 'Wisdom', 'Slow'],
        'upvotesCount': 50,
        'commentsCount': 2,
        'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A5lAeMqoabWaBNFfEsCJJmJ',
        'imageUrl': '/images/rosalyn-tureck.jpg'
      },
    ]
  },
	{
		'blockName': 'Harpsichord Versions',
		'blockVersions': [
			{
				'performer': 'Andreas Staier',
				'date': 2015,
				'keywords': ['Love', 'Subtle', 'Articulated'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A3I7yCh1xt7hDlkT8FnXmNI',
				'imageUrl': '/images/andreas-staier.jpg'
			},
			{
				'performer': 'Luc Beauséjour',
				'date': 2006,
				'keywords': ['Intellect', 'Spiritual', 'Dynamic'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A3t8weMtWRWnjVaa8w5dcDp',
				'imageUrl': '/images/Luc-Beausejour.jpg'
			},
		]
	},
	{
		'blockName': 'Organ Versions',
		'blockVersions': [
			{
				'performer': 'Hansjörg Albrecht',
				'date': 2008,
				'keywords': ['Fluid', 'Peaceful', 'Precise'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A1rC4ov7GO6ceA63T2DKQOJ',
				'imageUrl': '/images/Hansjorg-Albrecht.jpg'
			},
		]
	},
	{
		'blockName': 'String Trio Versions',
		'blockVersions': [
			{
				'performer': 'Goldberg Trio Lucerne',
				'date': 2011,
				'keywords': ['Unique', 'Slow', 'Graceful'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A31OTA4TyMwip3HrBmMRLSn',
				'imageUrl': '/images/Trio-Lucerne.jpg'
			},
		]
	},
	{
		'blockName': 'Other Versions',
		'blockVersions': [
			{
				'performer': 'Jacques Loussier Trio',
				'date': 2000,
				'keywords': ['Swing', 'Inspired', 'Jazzy'],
				'upvotesCount': 300,
				'commentsCount': 10,
				'spotifyIframe': 'https://embed.spotify.com/?uri=spotify%3Aalbum%3A7eRBMRU1WFFDul4ryLyH0K',
				'imageUrl': '/images/jacquesloussiertrio.jpg'
			},
		]
	},
];

router.get('/variations-goldberg-bmw-998-version', function(req, res, next) {
  res.render('demo-goldberg-versions', { title: 'Musicae - Johann Sebastian Bach - Goldberg Variations, BMW 998', goldbergContent: goldbergContent });
});

module.exports = router;
