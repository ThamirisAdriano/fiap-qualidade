const request = require('supertest');
const app = require('../app'); 

describe('User Authentication Flow', () => {
  it('should register a user, login, and access protected route', async () => {
    const newUser = {
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    };
    const userCreationResponse = await request(app).post('/users/register').send(newUser);
    expect(userCreationResponse.statusCode).toBe(201);

    const loginResponse = await request(app).post('/users/login').send({
      email: 'testuser@example.com',
      password: 'password123',
    });
    expect(loginResponse.statusCode).toBe(200);
    expect(loginResponse.body).toHaveProperty('token');
    const { token } = loginResponse.body;

    const protectedResponse = await request(app)
      .get('/some-protected-route')
      .set('Authorization', `Bearer ${token}`);
    expect(protectedResponse.statusCode).toBe(200);
  });
});
