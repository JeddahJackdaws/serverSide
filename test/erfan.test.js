var fs = require('fs');
var assert = require('chai').assert;

describe("erfan_scraper testing", function() {
    it("file erfan_result.json Found", function() {

        var resultFile = fs.readFileSync("./erfan_result.json");
        assert.exists(resultFile, "resultFile exists");

    })

});