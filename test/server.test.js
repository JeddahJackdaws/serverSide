var request = require('supertest');
var app = require('../server');
describe("express server testing", function() {

    beforeEach(function() {
        app.listen(3000);
    });
    afterEach(function() {
        app.close();
    });
    it('welcomes the user successfully', function(done) {
        request(app).get('/')
            .expect(200)
            .expect('Wellcome to BetterDoctor API')
            .end(done)
    })
})
