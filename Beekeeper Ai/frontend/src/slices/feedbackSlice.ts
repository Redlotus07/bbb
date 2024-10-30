import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackState {
    feedbacks: any[]; // Define a feedback type as needed
}

const initialState: FeedbackState = {
    feedbacks: [],
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addFeedback: (state, action: PayloadAction<any>) => {
            state.feedbacks.push(action.payload);
        },
        clearFeedbacks: (state) => {
            state.feedbacks = [];
        },
    },
});

export const { addFeedback, clearFeedbacks } = feedbackSlice.actions;
export default feedbackSlice.reducer;