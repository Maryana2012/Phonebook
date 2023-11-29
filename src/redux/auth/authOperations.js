import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:8000/users/'
const token ={
    set(token){
        axios.defaults.headers.common.Authorization=`Bearer ${token}` 
    },
    unset(){
       axios.defaults.headers.common.Authorization='';
    }
}


export const registration = createAsyncThunk('/auth/register', 
async({name, email, password}, thunkAPI)=>{
    try{
       const {data} = await axios.post(`${BASE_URL}/signup`, {name, email, password});
       token.set(data.token)
       return data;
    } catch (error){ thunkAPI.rejectWithValue(error.message);
      if(error.response.status === 409)
        toast.error("This email is in use")}
}) 


export const logIn = createAsyncThunk('/auth/login', 
async({email,password},thunkAPI)=>{
    try{
       const {data} = await axios.post(`${BASE_URL}/login`, {email, password});
       token.set(data.token);
       return data;
    } catch (error){ thunkAPI.rejectWithValue(error.message);
        if(error.response.status === 401){
         toast.error("Email or password is wrong")
        }
    }
}) 


export const logOut = createAsyncThunk('/users/logout',
async(_,thunkAPI)=>{
    try{
        await axios.post(`${BASE_URL}/logout`);
        token.unset();
    }
    catch(error){ thunkAPI.rejectWithValue(error.message); }
})


export const fetchCurrentUser = createAsyncThunk('/users/current',
async (_, thunkAPI)=>{
    const state = thunkAPI.getState();
    const persistedToken = state.authReducer.token;
    if(persistedToken === null){ return thunkAPI.rejectWithValue() }
    token.set(persistedToken);
    try{
       const {data} =  await axios.get(`${BASE_URL}/current`);
       return data;
    }
    catch(error)  { thunkAPI.rejectWithValue(error.message); }
 })

 export const updateAvatar = createAsyncThunk('users/updateAvatar',
 async({file, newUser}, thunkAPI)=>{
    try {
        const formData = new FormData();
        formData.append('avatar', file);
        formData.append('updateName',newUser.name);
        formData.append('updateEmail', newUser.email);
        formData.append('updatePassword', newUser.password) 
        
        const {data} = await axios.patch(`${BASE_URL}/avatar`, formData, {headers:{"Content-Type": "multipart/form-data"}});
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
 })