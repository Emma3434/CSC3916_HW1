//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

let echo_body = "emma";

describe('Echo', () => {
    beforeEach((done) => { //Before each
            done();
    });

    describe('/', () => {
        it('it should POST echo', (done) => {
            chai.request(server)
                .post('/')
                .send(echo_body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.eq(echo_body);
                    done();
                });
        });
    });

});