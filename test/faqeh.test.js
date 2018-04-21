var fs = require('fs');
var assert = require('chai').assert;

describe("faqeh_scraper testing", function() {
    it("file faqeh_result.json Found", function() {

        var resultFile = fs.readFileSync("./faqeh_result.json");
        assert.exists(resultFile, "resultFile exists");

    })

});