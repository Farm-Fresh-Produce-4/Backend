const request = require('supertest');
const db = require('../data/dbConfig.js');
const server = require('../api/server.js');

describe('auth-router', () => {
  describe('POST /register', () => {
    beforeEach(async() => {
      await db('farmers').truncate();
    })
    it('should return 201 created', async() => {
      await request(server)
        .post('/api/auth/farmer/register')
        .send({ username: 'test for test', password: 'pizza' })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a JSON object', async() => {
      await request(server)
        .post('/api/auth/farmer/register')
        .send({ username: 'Piggot Dunceby', password: 'cookies'})
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  })

  describe('POST /login', () => {
    it('should return 200 OK', async() => {
      await request(server)
        .post('/api/auth/farmer/login')
        .send({ username: 'Piggot Dunceby', password: 'cookies' })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it('should return a JSON object', async() => {
      await request(server)
        .post('/api/auth/farmer/login')
        .send({ username: 'Piggot Dunceby', password: 'cookies' })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        })
    });
  })
})