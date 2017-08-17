var Promise = require('bluebird');
var dayRouter = require('express').Router();
var Day = require('../../models').Day;
// var Hotel = require('../models').Hotel;
// var Restaurant = require('../models').Restaurant;
// var Activity = require('../models').Activity;

//get all days
dayRouter.get('/api/days', function (req, res, next) {
    console.log("getting into API/DAYS")
    //returns a promise, which is an array of all days 
    Day.findAll()
        .then(function (days) {
            console.log(days)
            res.send(days)
        })
});

//get a day by id
dayRouter.get('/api/days/:id', function (req, res, next) {
    Day.findOne({
        where: { id: req.params.id }
    })
        .then(function (day) {
            res.send(day)
        })
});

// //delete a day by id
dayRouter.delete('/api/days/:id', function (req, res, next) {
    Day.destroy({
        where: { id: req.params.id }
    })
        .then(function (day) {
            res.send("the following day has been deleted", day)
        })

});

// //post a new day
dayRouter.post('/api/days', function (req, res, next) {
    console.log('Are we here', req.body)
    Day.create(req.body)
        .then(function (newday) {
            res.send(newday)
        })
});

// //post a new attraction to a day by id
dayRouter.post('/api/days/:id/restaurants', function (req, res, next) {
    day_restaurant.create({
        day_id: req.params.id,
        restaurant_id: req.body.id
    })
        .then(function (postedRestaurant) {
            res.send(postedRestaurant)
        })
});

// //delete a new attraction to a day by id
dayRouter.delete('/api/days/:id/restaurants', function (req, res, next) {
    day_restaurant.destroy({
        where: {
            restaurant_id: req.body.id
        }
    })
        .then(function (deletedRestaurant) {
            res.send(deletedRestaurant)
        })
});
//activity
dayRouter.post('/api/days/:id/activities', function (req, res, next) {
    day_activity.create({
        day_id: req.params.id,
        activityId: req.body.id
    })
        .then(function (postedActivity) {
            res.send(postedActivity)
        })
});

// //delete a new attraction to a day by id
dayRouter.delete('/api/days/:id/activities', function (req, res, next) {
    day_activity.destroy({
        where: {
            activityId: req.body.id
        }
    })
        .then(function (deletedActivity) {
            res.send(deletedActivity)
        })
});

//hotels
dayRouter.post('/api/days/:id/hotels', function (req, res, next) {
    Day.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then(function(selectedDay){
        //Day.setHotel(hotelId)
        Day.setHotel(req.body.id)
    })
    .then(function (updatedDay) {
        res.send(updatedDay)
    })
    .catch(console.error.bind(console));
});

// //delete a new attraction to a day by id
dayRouter.delete('/api/days/:id/hotels', function (req, res, next) {
    Day.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then(function(selectedDay){
        //Day.setHotel(null)
        Day.setHotel(null)
    })
    .then(function (updatedDay) {
        res.send(updatedDay)
    })
    .catch(console.error.bind(console));
});

module.exports = dayRouter;