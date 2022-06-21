import { configureStore } from '@reduxjs/toolkit';
import moteReducer from './slices/moteSlice';
export const store = configureStore({
    reducer: {
        mote: moteReducer,
    },
});
