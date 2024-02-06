'use strict';

function get(url) {
    return fetch(url)
        .then(function (response) {
            return response
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.error('ERROR:', error);
        });
}