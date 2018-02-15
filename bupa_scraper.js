var fs = require('fs');
var casper = require('casper').create({
    clientScripts: [
        'node_modules/lodash/lodash.js'
    ],
    pageSettings: {
        loadImages: false,
        loadPlugins: true
    },
    logLevel: "error",
    verbose: true
});


var itemsList = {};

function getHospital() {
    var hospital = document.querySelectorAll('.contentContainer > .contentTable.hospitalTableContent > tbody > tr > td');
    return _.map(hospital, function(n) {
        return n.innerText;
    });
}

function clickNext() {
    casper.click(".nextBtn");
    casper.wait(5000, function() {});
    // casper.click(".nextBtn a");
}

casper.start('http://www.bupa.com.sa/arabic/bupaforbusiness/bupacorporate/pages/hospital-network.aspx');
var result = [];
for (var index = 0; index < 2; index++) {
    // scrape data
    // casper.then(function() {
    console.log("scraping...");
    itemsList.hospital = casper.evaluate(getHospital);
    for (i = 5; i < 104; i++) {
        result.push({
            name: itemsList.hospital[i],
            street: itemsList.hospital[i + 1],
            area: itemsList.hospital[i + 4],
            phone: itemsList.hospital[i + 3]
        });
        i += 4;
    }
    clickNext();
    // });
}
casper.then(function() {
    fs.write('./bupa_result.json', JSON.stringify(result), 'w');
    console.log('Writing... ' + result.length + ' hospitals');
});
casper.run();