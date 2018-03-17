process.env.NODE_ENV = 'test';

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
describe('/GET hello', () => {
	it('it should GET hello world string', (done) => {
		chai.request(app)
			.get('/hello')
			.end((err, res) => {
				expect(res).to.have.status(200);
				res.body.should.should.be.a('object');
				res.body.should.have.property('message');
				res.body.should.have.property('message').equal('Hello World!');
				done();
			});
	});
});
