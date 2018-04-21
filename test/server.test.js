var request = require('supertest');

describe("express server testing", function() {
    var app;
    beforeEach(function() {
        app = require('../server');
    });
    it('welcomes the user successfully', function(done) {
        request(app).get('/')
            .expect(200)
            .expect('Wellcome to BetterDoctor API')
            .end(done)
    })
})