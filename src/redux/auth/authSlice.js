import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './authOperations';


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
      [register.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logIn.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
    }
})

export const authReducer = authSlice.reducer;

