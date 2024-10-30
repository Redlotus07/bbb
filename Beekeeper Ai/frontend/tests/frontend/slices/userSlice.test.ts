import userReducer, { login, logout } from '../../../src/slices/userSlice'; // Adjust the path as necessary

describe('userSlice', () => {
    const initialState = { user: null };

    it('should handle login', () => {
        const action = login({ id: 1, name: 'John Doe' });
        const state = userReducer(initialState, action);
        expect(state.user).toEqual({ id: 1, name: 'John Doe' });
    });

    it('should handle logout', () => {
        const action = logout();
        const state = userReducer({ user: { id: 1, name: 'John Doe' } }, action);
        expect(state.user).toBeNull();
    });
});