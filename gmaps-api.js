// Google Places API, https://developers.google.com/places/web-service/search
var fs = require('fs');
const API_KEY = process.env.API_KEY;
const request = require('request');
var data = [];

var latitude = [21.56039, 21.42686, 24.74870];
var longitude = [39.17313, 39.82544, 46.71799];
var radius = [19097, 8565, 24247];
var type = 'hospital'
var keyword = ['general', 'eye', 'dentist'];
for (var key = 0; key < 3; key++) {
    for (var index = 0; index < 3; index++) {
        var location = latitude[index] + ',' + longitude[index];
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
            location + '&rankby=distance' + '&type=' + type + '&keyword=' + keyword[key] + '&key=' + API_KEY;
        console.log(url);
        request(url, {
            json: true
        }, function(err, res, body) {
            if (err) {
                console.log(err);
                return;
            }
            data.push(body);
            fs.appendFile("./gmaps_result.json", JSON.stringify(data), 'utf8', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("data was saved!");
            });
        });
    }

}