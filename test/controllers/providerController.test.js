const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../../server')
const expect = chai.expect;
chai.use(chaihttp);

describe('testing the routes on the provider controller', function () {
  it('should redirect user to the provider controller page', function (done) {
    chai.request(app)
      .get('/allproviders/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done()
      })
  })
})


