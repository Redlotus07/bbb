import request from 'supertest';
import app from '../../../src/app'; // Adjust the path to your Express app

describe('User  Routes', () => {
    it('should get a list of users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});