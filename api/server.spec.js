const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('environment', () => {
    it('should set the environment to testing', function () {
      expect(process.env.DB_ENV).toBe('testing');
    })
  })
})