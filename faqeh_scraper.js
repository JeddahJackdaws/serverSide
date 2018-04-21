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
    var names = document.querySelectorAll('.doctorsres > a > h3');
    return _.map(names, function(n) {
        return n.innerText;
    });
}

function getSpecialities() {
    var specialities = document.querySelectorAll('.doctorsres > h3')
    return _.map(specialities, function(s) {
        return s.innerText;
    });
}

casper.start();
var result = [];
for (var pages = 1; pages < 38; pages++) {
    var url = 'https://dsfh.med.sa/?sfid=470&sf_paged=' + pages;
    casper.thenOpen(url, function() {
        console.log("scraping...");
        itemsList.names = this.evaluate(getNames);
        itemsList.specialities = this.evaluate(getSpecialities);
        var x = 0;
        for (i = 0; i < itemsList.names.length; i++) {
            result.push({
                name: itemsList.names[i],
                id: 0,
                speciality: itemsList.specialities[i + x] + ',' + itemsList.specialities[i + x + 1],
                hospital: 'Dr. Soliman Fakeeh Hospital',
                rank: '',
                totalReviews: 0,
                dateFound: Date.now(),
                city: 'Jeddah',
                province: 'Makkah'
            });
            x++;
        }
    });
}
casper.then(function() {
    fs.write('./faqeh_result.json', JSON.stringify(result), 'w');
    console.log('Writing... ' + result.length + ' names');
});
casper.run();