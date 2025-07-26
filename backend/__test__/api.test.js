const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  let token;
  let createdId;

  it('POST /login (valid)', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'pass' })
      .expect(200);
    expect(res.body.token).toBe('test-token');
    token = res.body.token;
  });

  it('POST /login (invalid)', async () => {
    await request(app)
      .post('/login')
      .send({ username: 'wrong', password: 'bad' })
      .expect(401);
  });

  it('GET /items (no token)', async () => {
    await request(app).get('/items').expect(403);
  });

  it('GET /items (with token)', async () => {
    const res = await request(app)
      .get('/items')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /items', async () => {
    const res = await request(app)
      .post('/items')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'New Item' })
      .expect(201);
    createdId = res.body.id;
    expect(res.body.name).toBe('New Item');
  });

  it('PUT /items/:id', async () => {
    const res = await request(app)
      .put(`/items/${createdId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated Item' })
      .expect(200);
    expect(res.body.name).toBe('Updated Item');
  });

  it('DELETE /items/:id', async () => {
    await request(app)
      .delete(`/items/${createdId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204);
  });
});
