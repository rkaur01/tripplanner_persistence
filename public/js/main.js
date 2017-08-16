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