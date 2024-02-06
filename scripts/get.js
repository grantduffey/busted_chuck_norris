'use strict';

function get(url) {
    return fetch(url)
        .then(function (response) {
            return response.json(); // ADDED .json TO GET THE CATEGORIES
        })
        .then(function (data) {
            console.log(data)
            return data; // ADDED LINE TO RETURN DATA
        })
        .catch(function (error) {
            console.error('ERROR:', error);
        });
}