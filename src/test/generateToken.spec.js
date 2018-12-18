const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect;
chai.use(chaiHttp);

describe('Token block', () => {
    let token;
    const URL = 'http://api.cd2.d.skywind-tech.com:8001';
    const PATH = '/api/v1/login';
    const DATA = {
        secretKey: "MASTER_KEY-swftest_ENTITY-swftest_BRAND",
        username: "swftest_USER",
        password: "swftest_QaZ321!"
    };

    it('Generate token', (done)  => {
        chai.request(URL)
            .post(PATH)
            .set("Content-Type", "application/json")
            .send(DATA)
            .end((err, res) => {
                expect(res).to.have.status(200);
                token = res.body
                console.log(token);
                done();
            });
        });
    });
