'use strict';
/* global $ tripModule */

$(tripModule.load);

$(document).ready(() => {
    const $hotelChoices = $('#hotel-choices')
    const $restaurantChoices = $('#restaurant-choices')
    const $activityChoices = $('#activity-choices')
    //this is going to return a promise array of all hotels 

    $.get('/api/hotels')
        .then(function (response) {
            response.forEach(function (hotel) {
                $hotelChoices.append(`<option>${hotel.name}</option>`)
            })
        })
        .catch(console.error.bind(console));

    $.get('/api/restaurants')
        .then(function (response) {
            response.forEach(function (restaurant) {
                $restaurantChoices.append(`<option>${restaurant.name}</option>`)
            })
        })
        .catch(console.error.bind(console));

    $.get('/api/activities')
        .then(function (response) {
            response.forEach(function (activity) {
                $activityChoices.append(`<option>${activity.name}</option>`)
            })
        })
        .catch(console.error.bind(console));

    //get all days request which logs 'You GOT all the days!'
    $.get('/api/days')
        .then(function (response) {
            if(!response.length){
                $.post('/api/days', {number: 1})
                .then(function(day1){
                    console.log('day 1 posted', day1)
                })
                .catch(console.error.bind(console));
            }
            console.log('You GOT all the days!', response)
        })
        .catch(console.error.bind(console));

    //attach a button listener to #day-add   
    //when we add a day, we will need a post request to '/api/days'
    //log 'You CREATED a day!'
    let $dayBtns = $('.day-buttons');
    let $addDayBtn = $('#day-add');
    let dayCount = 1;

    //add attraction variables
    let $hotelChoices = $('#hotel-choices');
    let $restaurantChoices = $('#restaurant-choices');
    let $activityChoices = $('#activity-choices');
    let $attAddBtn = $('button[data-action="add"]');

    $addDayBtn.on('click', function(){
        dayCount++;
        $.post('/api/days', 
        {
            number:dayCount
        })
        .then(function(newDay){
            console.log('You CREATED a day!', newDay)
        })
        .catch(console.error.bind(console));
    })

    //attach a button listener to child of restaurant-choices
    //where child is data-action='add'
    //when a restaurant is added make a post to '/api/days/:id/restaurants'
    //do the same for activity and hotel

    //when trip planner page is loaded we need to load day itinerary
    //possibly we just need to get all days, but will this load attractions?



    // $.ajax({
    //   method: 'VERB',
    //   url: '/whatever/route',
    //   data: someDataToSend, // e.g. for POST requests
    // })
    // .then(function (responseData) {
    //   // some code to run when the response comes back
    // })
    // .catch(function (errorObj) {
    //   // some code to run if the request errors out
    // });
})