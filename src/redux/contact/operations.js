import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


// const BASE_URL = 'http://localhost:8000'
const BASE_URL = 'https://phonebook-backend-q6eg.onrender.com'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, thunkAPI)=> {
    try{
        const response = await axios.get(`${BASE_URL}/contacts`);
        return response.data;
   } catch (error){
    return thunkAPI.rejectWithValue(error.message);
   }
})


export const addContact= createAsyncThunk('contacts/addContact', 
async ({name, number}, thunkAPI)=>{
    try{
        const response = await axios.post(`${BASE_URL}/contacts`, {name, number});
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact',
async (id, thunkAPI) => {
  
    try{
        const response = await axios.delete(`${BASE_URL}/contacts/${id}`)
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const updateContact = createAsyncThunk('contact/updateContact',
async ({id, name, number}, thunkAPI)=>{
   
    try {
        const response = await axios.put(`${BASE_URL}/contacts/${id}`, {name, number});
        console.log(response.data)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})