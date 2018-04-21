// Google Places API, https://developers.google.com/places/web-service/search
var fs = require('fs');
const API_KEY = process.env.API_KEY;
const request = require('request');
var data = [];
var doc = JSON.parse(fs.readFileSync("./gmaps_result.json"));

for (var index = 0; index < doc.length; index++) {
    var url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + doc[index].Id + '&key=' + API_KEY;
    console.log("getting reviews for: " + doc[index].Id);
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

function writer(body) {
    if (body.result !== undefined) {
        if (body.result.reviews == undefined) { console.log("no reviews") } else {
            for (var revIndex = 0; revIndex < body.result.reviews.length; revIndex++) {
                data.push({
                    reviewerId: body.result.reviews[revIndex].author_url,
                    medicalId: body.result.place_id,
                    reviewerName: body.result.reviews[revIndex].author_name,
                    reviewDate: body.result.reviews[revIndex].time,
                    reviewText: body.result.reviews[revIndex].text
                })
            }
        }
        console.log("writing " + data.length + " reviews")
        fs.writeFileSync("./gmaps_reviews.json", JSON.stringify(data), 'utf8');
    }
}