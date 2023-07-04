/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: "Italian twin brother plumbers Mario and Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away.",
  platforms: "PC, Console",
  image: "https://people.com/thmb/cK_RpydkLMmjxyqe3vOqksRVXuI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x207:721x209)/super-mario-bros-2026fec1a6fc4e1fbbe6f0bbb3adedab.jpg",
  releaseDate: "1983",
  rating: 5
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});
