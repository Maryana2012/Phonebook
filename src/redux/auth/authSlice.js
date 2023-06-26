import { createSlice } from '@reduxjs/toolkit';
import {  logIn, logOut, registration } from './authOperations';


const initialStateUser={
    user: { name: '',
            email: ''},
    token: null,
    isLoggedIn: false

}

const authSlice = createSlice ({
    name:"auth",
    initialState: initialStateUser,
    extraReducers:{
      [registration.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      },
      [logIn.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logOut.fulfilled](state){
        state.user = { name: '', email: ''};
        state.token = null;
        state.isLoggedIn = false;
      }
    }
})

export const authReducer = authSlice.reducer;

