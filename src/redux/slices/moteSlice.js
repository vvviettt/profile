import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'dark',
};

export const moteSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateMote: (state) => {
            state.value = state.value === 'dark' ? 'light' : 'dark';
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateMote } = moteSlice.actions;

export default moteSlice.reducer;
