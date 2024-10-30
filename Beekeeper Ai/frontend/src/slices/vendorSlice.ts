import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VendorState {
    vendors: any[]; // Define a vendor type as needed
}

const initialState: VendorState = {
    vendors: [],
};

const vendorSlice = createSlice({
    name: 'vendor