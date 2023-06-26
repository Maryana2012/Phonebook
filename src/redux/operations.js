import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL('https://connections-api.herokuapp.com');
export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, thunkAPI)=> {
    try{
        const response = await axios.get('https://connections-api.herokuapp.com/contacts');
        return response.data;
   } catch (error){
    return thunkAPI.rejectWithValue(error.message);
   }
})


export const addContact= createAsyncThunk('contacts/addContact', 
async ({name, number}, thunkAPI)=>{
    try{
        const response = await axios.post('https://connections-api.herokuapp.com/contacts', {name, number});
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact',
async (id, thunkAPI) => {
    try{
        const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`)
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
})