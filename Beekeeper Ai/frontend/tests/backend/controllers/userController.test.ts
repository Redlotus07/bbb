import { getUser  } from '../../../src/controllers/userController'; // Adjust the path as necessary

describe('User  Controller', () => {
    it('should return a user object for a valid ID', async () => {
        const user = await getUser (1); // Assume 1 is a valid user ID
        expect(user).toHaveProperty('id', 1);
        expect(user).toHaveProperty('name');
    });
});