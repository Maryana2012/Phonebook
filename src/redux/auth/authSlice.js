import { createSlice } from '@reduxjs/toolkit';
import {  fetchCurrentUser, logIn, logOut, registration, updateAvatar } from './authOperations';


const initialStateUser={
    user: { name: '',
            email: '',
            avatarURL: ''},
    token: null,
    isLoggedIn: false

}

const handleRegistrationFulfilled = (state, {payload})=>{
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const handleLoginFulfilled =(state, {payload}) =>{
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const handleLogoutFulfilled = (state)=>{
  state.user = { name: '', email: ''};
  state.token = null;
  state.isLoggedIn = false;
}

const handleCurrentFulfilled =(state, {payload}) =>{
  state.user = payload;
  state.isLoggedIn = true; 
}

const handleUpdateAvatar = (state, {payload})=>{
  console.log(payload)
  state.user.avatarURL = payload.avatar;
  state.user.name = payload.name;
  state.user.email = payload.email;
}

const authSlice = createSlice({
  name:"auth",
  initialState: initialStateUser,
  extraReducers: (builder) => {
    builder
    .addCase(registration.fulfilled, handleRegistrationFulfilled)
    .addCase(logIn.fulfilled, handleLoginFulfilled)
    .addCase(logOut.fulfilled, handleLogoutFulfilled)
    .addCase(fetchCurrentUser.fulfilled, handleCurrentFulfilled)
    .addCase(updateAvatar.fulfilled, handleUpdateAvatar)
  }
})

export const authReducer = authSlice.reducer;

