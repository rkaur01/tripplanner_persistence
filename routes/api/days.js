var Promise = require('bluebird');
var dayRouter = require('express').Router();
var Day = require('../../models').Day;
// var Hotel = require('../models').Hotel;
// var Restaurant = require('../models').Restaurant;
// var Activity = require('../models').Activity;

//get all days
dayRouter.get('/api/days', function (req, res, next) {
    console.log("getting into API/DAYS")
    //returns a promise, which is an array of all hotels 
    Day.findAll()
        .then(function (days) {
            console.log(days)
            res.send(days)
        })
});

// //get a day by id
// dayRouter.get('/api/days/:id', function (req, res, next) {
// });    

// //delete a day by id
// dayRouter.delete('/api/days/:id', function (req, res, next) {
// }); 

// //post a new day
// dayRouter.post('/api/days', function (req, res, next) {
// }); 

// //post a new attraction to a day by id
// dayRouter.post('/api/days/:id/restaurants', function (req, res, next) {
// }); 

// //delete a new attraction to a day by id
// dayRouter.delete('/api/days/:id/restaurants', function (req, res, next) {
// }); 


module.exports = dayRouter;