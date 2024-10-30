import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinanceState {
    expenses: number[];
    revenue: number[];
}

const initialState: FinanceState = {
    expenses: [],
    revenue: [],
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<number>) => {
            state.expenses.push(action.payload);
        },
        addRevenue: (state, action: PayloadAction<number>) => {
            state.revenue.push(action.payload);
        },
    },
});

export const { addExpense, addRevenue } = financeSlice.actions;
export default financeSlice.reducer;