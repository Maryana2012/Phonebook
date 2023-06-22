import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// axios.defaults.baseURL('https://connections-api.herokuapp.com');

export const register = createAsyncThunk('/auth/register', 
async({name, email, password})=>{
    try{
       const response = await axios.post('https://connections-api.herokuapp.com/users/signup', {name, email, password});
       return response.data;
    } catch (error){
        return  console.log(error)
        // thunkAPI.rejectWithValue(error.message);
    }
}) 

export const logIn = createAsyncThunk('/auth/login', 
async({email,password})=>{
    try{
       const response = await axios.post('https://connections-api.herokuapp.com/users/login', {email, password});
       return response.data;
    } catch (error){
        return  console.log(error)
        // thunkAPI.rejectWithValue(error.message);
    }
}) 