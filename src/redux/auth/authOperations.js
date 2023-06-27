import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
       const {data} = await axios.post('https://connections-api.herokuapp.com/users/signup', {name, email, password});
       token.set(data.token)
       return data;
    } catch (error){ thunkAPI.rejectWithValue(error.message);}
}) 


export const logIn = createAsyncThunk('/auth/login', 
async({email,password},thunkAPI)=>{
    try{
       const {data} = await axios.post('https://connections-api.herokuapp.com/users/login', {email, password});
       token.set(data.token);
       return data;
    } catch (error){ thunkAPI.rejectWithValue(error.message); }
}) 


export const logOut = createAsyncThunk('/users/logout',
async(_,thunkAPI)=>{
    try{
        await axios.post('https://connections-api.herokuapp.com/users/logout');
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
       const {data} =  await axios.get('https://connections-api.herokuapp.com/users/current');
       return data;
    }
    catch(error)  { thunkAPI.rejectWithValue(error.message); }
 })