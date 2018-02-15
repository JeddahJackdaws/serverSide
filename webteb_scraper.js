var fs = require('fs');
var casper = require('casper').create({
    clientScripts: [
        'node_modules/lodash/lodash.js'
    ],
    pageSettings: {
        loadImages: false,
        loadPlugins: false
    },
    logLevel: "error",
    verbose: true
});


var itemsList = {};

function getNames() {
    var names = document.querySelectorAll('.content.border.doctor > a > span[itemprop="name"]');
    return _.map(names, function(n) {
        return n.innerText;
    });
}

function getSpecialities() {
    var specialities = document.querySelectorAll('.content.border.doctor > span.speciality')
    return _.map(specialities, function(s) {
        return s.innerText;
    });
}

function getCities() {
    var cities = document.querySelectorAll('.content.border.doctor > span.adress');
    return _.map(cities, function(c) {
        return c.innerText;
    });
}

casper.start('https://doctor.webteb.com/search?CountryID=59&CityID=38&InsuranceCompany=0&SpecialityID=47&SubSpecialityID=0&Text=');

// scroll down and wait
casper.then(function() {
    console.log('scrolling...');
    this.scrollToBottom();
    casper.wait(5000, function() {
        console.log("Scrolling to bottom and waiting....");
    });
});

// scrape data
casper.then(function() {
    console.log("scraping...");
    itemsList.names = this.evaluate(getNames);
    itemsList.specialities = this.evaluate(getSpecialities);
    itemsList.cities = this.evaluate(getCities);
    var result = [];
    for (i = 0; i < itemsList.names.length; i++) {
        result.push({
            name: itemsList.names[i],
            speciality: itemsList.specialities[i],
            hospital: '',
            rank: '',
            totalReviews: 0,
            dateFound: Date.now(),
            city: itemsList.cities[i],
            province: 'Makkah'

        });
    }
    fs.write('./webteb_result.json', JSON.stringify(result), 'w');
    console.log('Writing... ' + itemsList.names.length + ' names');
});

casper.run();