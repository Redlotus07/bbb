import User from '../../../src/models/userModel'; // Adjust the path as necessary

describe('User  Model', () => {
    it('should create a user successfully', async () => {
        const user = await User.create({ name: 'John Doe', email: 'john@example.com' });
        expect(user).toHaveProperty('id');
        expect(user.name).toBe('John Doe');
    });
});