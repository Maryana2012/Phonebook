import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
    reducer: contactReducer,
    reducer: authReducer
});
