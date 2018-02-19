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
        console.log("searching city: " + index + " with key:" + key);
        request(url, {
            json: true
        }, function(err, res, body) {
            if (err) {
                console.log(err);
                return;
            }
            writer(body);
        });
    }

}

function writer(body) {
    for (var index = 0; index < body.results.length; index++) {
        var totalReviews1 = 0;
        var provence1 = "";
        if (body.results[index].reviews !== undefined) { totalReviews1 = body.results[index].reviews.length; }
        if (body.results[index].address_components !== undefined) { provence1 = body.results[index].address_components[2].long_name; }
        data.push({
            name: body.results[index].name,
            Id: body.results[index].place_id,
            city: body.results[index].vicinity,
            location: body.results[index].geometry.location,
            rating: body.results[index].rating,
            totalReviews: totalReviews1,
            datefound: Date.now(),
            provence: provence1
        })
    }
    console.log("writing " + data.length + " results")
    fs.writeFileSync("./gmaps_result.json", JSON.stringify(data), 'utf8');
}
