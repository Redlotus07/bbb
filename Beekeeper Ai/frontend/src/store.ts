import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import financeReducer from './slices/financeSlice';
import subscriptionReducer from './slices/subscriptionSlice';
import themeReducer from './slices/themeSlice';
import feedbackReducer from './slices/feedbackSlice';
import vendorReducer from './slices/vendorSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        finance: financeReducer,
        subscription: subscriptionReducer,
        theme: themeReducer,
        feedback: feedbackReducer,
        vendor: vendorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;