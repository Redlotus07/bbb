import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubscriptionState {
    plans: any[]; // Define a plan type as needed
    currentPlan: any | null;
}

const initialState: SubscriptionState = {
    plans: [],
    currentPlan: null,
};

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setPlans: (state, action: PayloadAction<any[]>) => {
            state.plans = action.payload;
        },
        setCurrentPlan: (state, action: PayloadAction<any>) => {
            state.currentPlan = action.payload;
        },
    },
});

export const { setPlans, setCurrentPlan } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;