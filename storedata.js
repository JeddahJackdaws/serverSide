var MongoClient = require('mongodb').MongoClient;

var filereader = require('fs');

var url = "mongodb://bes:root@ds249128.mlab.com:49128/jackdaws";



var file0 = filereader.readFileSync("gmaps_result.json");
var gmaps = JSON.parse(file0);
var file1 = filereader.readFileSync("merged_result.json");
var merged = JSON.parse(file1);

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("jackdaws");
    for (var i = 0; i < Object.keys(gmaps).length; i++) {
        dbo.collection("H").insertOne({
            name: gmaps[i].name,
            Id: gmaps[i].Id,
            city: gmaps[i].city,
            location: gmaps[i].location,
            rating: gmaps[i].rating,
            totalReviews: gmaps[i].totalReviews,
            datefound: gmaps[i].datefound,
            provence: gmaps[i].provence
        }, function(err, res) {
            if (err) throw err;
        });
    }

    for (var i = 0; i < Object.keys(merged).length; i++) {
        dbo.collection("D").insertOne({
            name: merged[i].name,
            speciality: merged[i].speciality,
            hospital: merged[i].hospital,
            rank: merged[i].rank,
            totalReviews: merged[i].totalReviews,
            dateFound: merged[i].dateFound,
            city: merged[i].city,
            province: merged[i].province
        }, function(err, res) {
            if (err) throw err;
        });
    }
    console.log("Resultsgmaps.json inserted");
    console.log("Resultsmerged.json inserted");
    db.close();
});