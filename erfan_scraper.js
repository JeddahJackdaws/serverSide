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
    var names = document.querySelectorAll('.description > h3');
    return _.map(names, function(n) {
        return n.innerText;
    });
}

function getSpecialities() {
    var specialities = document.querySelectorAll('.description > h5')
    return _.map(specialities, function(s) {
        return s.innerText;
    });
}

casper.start('http://ebgh.med.sa/ar/%D8%A3%D8%B7%D8%A8%D8%A7%D8%A6%D9%86%D8%A7-2/');

// scrape data
casper.then(function() {
    console.log("scraping...");
    itemsList.names = this.evaluate(getNames);
    itemsList.specialities = this.evaluate(getSpecialities);
    var result = [];
    for (i = 0; i < itemsList.names.length; i++) {
        result.push({
            name: itemsList.names[i],
            id: 0,
            speciality: itemsList.specialities[i],
            hospital: 'Dr. Erfan & Bagedo general hospital',
            rank: '',
            totalReviews: 0,
            dateFound: Date.now(),
            city: 'Jeddah',
            province: 'Makkah'
        });
    }
    fs.write('./erfan_result.json', JSON.stringify(result), 'w');
    console.log('Writing... ' + itemsList.names.length + ' names');
});

casper.run();