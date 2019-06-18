const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../../server')
// const chai = require('../../controllers/userController');
const expect = chai.expect;
chai.use(chaihttp);

describe('user should be redirected to the homepage', function () {
  it('user should be redirected to the home page', function (done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
  })
});

describe(" user should be redirected the register page", function () {
  it('should diplay the provider sign up page', function (done) {
    chai.request(app)
      .get('/register')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done()
      })
  })
})

describe('user is able to register or sign up', function () {
  it('should enable a user to signup', function (done) {
    let person = {
      firstName: 'John',
      lastName: 'Doe',
      password: 'test',
      phone: '343 - 343 - 3432',
      address: '123 Test address',
      zipcode: 40032
    }
    chai.request(app)
      .post('/register')
      .set('content-type', 'application/json')
      .send(person)
      .end(function (err, res) {
        // expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done()
      })
  });

  it('user should not enter numbers in the first name field', function (done) {
    let person = {
      firstName: 12356,
    }
    chai.request(app)
      .post('/register')
      // .set('content-type', 'application/json')
      .send(person)
      .end(function (err, res) {
        // expect(err).to.be.null;
        expect(res).to.have.status(422);
        expect(res.body.message).to.equal("error")
        expect(res).to.be.json;
        done()
      });

  })
  it('requires first name field', function (done) {
    let person = {
      lastName: 'Doe',
      password: 'test',
      phone: '343 - 343 - 3432',
      address: '123 Test address',
      zipcode: 40032
    }
    chai.request(app)
      .post('/register')
      .send(person)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(422);
        expect(res.body.message).to.equal("Your name is needed")
        expect(res).to.be.json;
        done()
      });

  })
  it('user should enter last name', function (done) {
    let person = {
      lastName: 12356,
    }
    chai.request(app)
      .post('/register')
      .send(person)
      .end(function (err, res) {
        expect(res).to.have.status(422)
        expect(res.body.message).to.equal('Your name is needed')
        done()
      })
  })
})
describe('the maps page is displayed', function () {
  it('should display the maps page without any errors', function (done) {
    chai.request(app)
      .get('/map')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(err).to.be.null
        done()
      })
  })
})