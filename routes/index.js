var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;


router.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
    .spread(function (dbHotels, dbRestaurants, dbActivities) {
      res.render('index', {
        templateHotels: dbHotels,
        templateRestaurants: dbRestaurants,
        templateActivities: dbActivities
      });
    })
    .catch(next);
});

router.get('/api/hotels', function (req, res, next) {
  console.log("getting into API")
  //returns a promise, which is an array of all hotels 
  Hotel.findAll()
    .then(function (hotels) {
      res.send(hotels)
    })
})
router.get('/api/restaurants', function (req, res, next) {
  Restaurant.findAll()
    .then(function (restaurants) {
      res.send(restaurants)
    })
})
router.get('/api/activities', function (req, res, next) {
  Activity.findAll()
    .then(function (activities) {
      res.send(activities)
    })
})
module.exports = router;
