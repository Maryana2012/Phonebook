import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// axios.defaults.baseURL('https://connections-api.herokuapp.com');
const token ={
    set(token){
        axios.defaults.headers.common.Authorization=`Bearer ${token}` 
    },
    unset(){
       axios.defaults.headers.common.Authorization='';
    }
}



export const registration = createAsyncThunk('/auth/register', 
async({name, email, password})=>{
    try{
       const {data} = await axios.post('https://connections-api.herokuapp.com/users/signup', {name, email, password});
       token.set(data.token)
       return data;
    } catch (error){
        return  console.log(error)
        // thunkAPI.rejectWithValue(error.message);
    }
}) 

export const logIn = createAsyncThunk('/auth/login', 
async({email,password})=>{
    try{
       const {data} = await axios.post('https://connections-api.herokuapp.com/users/login', {email, password});
       token.set(data.token);
       return data;
    } catch (error){
        return  console.log(error)
        // thunkAPI.rejectWithValue(error.message);
    }
}) 

export const logOut = createAsyncThunk('/users/logout',
async()=>{
    try{
        await axios.post('https://connections-api.herokuapp.com/users/logout');
        token.unset();
    }
    catch(error){
        return console.log(error)
    }
})