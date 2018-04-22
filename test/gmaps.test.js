var fs = require('fs');
var assert = require('chai').assert;

describe("google maps testing", function() {
    it("file gmaps_result.json Found", function() {

        var resultFile = fs.readFileSync("./gmaps_result.json");
        assert.exists(resultFile, "resultFile exists");

    })
});
