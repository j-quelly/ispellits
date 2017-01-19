const request = require('supertest');
const chance = require('chance').Chance();
const should = require('should');

const username = chance.email();
const stub = {
  name: username,
  score: 10
};

process.env.NODE_ENV = 'testing';
process.env.PORT = 3005;

describe('Loading Express', () => {
  var app, server;

  beforeEach(() => {
    delete require.cache[require.resolve('../../bin/www')];
    app = require('../../server').default;
    server = require('../../bin/www').default;
  });

  afterEach((done) => {
    server.close(done);
  });

  it('responds to /api/players', (done) => {
    request(app)
      .get('/api/players')
      .expect(200, done);
  });

  it('404 everything else', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });

  describe('Player', () => {
    it('should create a player', (done) => {
      request(app)
        .post('/api/players')
        .send(stub)
        .expect(201)
        .end((err, res) => {
          if (err) {
            throw err;
          }

          res.body.name.should.equal(stub.name);
          res.body.score.should.equal(stub.score);

          done();
        });
    });


    it('should respond with an array of players', (done) => {
      request(app)
        .get('/api/players')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          res.body.should.be.a.Array();
          done();
        });
    });
  });
});
