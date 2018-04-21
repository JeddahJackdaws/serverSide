var fs = require('fs');
var assert = require('chai').assert;

describe("webteb_scraper testing", function() {
    it("file webteb_result.json Found", function() {

        var resultFile = fs.readFileSync("./webteb_result.json");
        assert.exists(resultFile, "resultFile exists");

    })

});