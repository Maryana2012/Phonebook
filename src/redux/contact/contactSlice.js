import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from "nanoid"; 
import { addContact, deleteContact, fetchContacts, updateContact } from './operations';

const contactInitialState = {
    contact: [],
    isLoading: false,
    errorContact: null,
    filter: ''
} ;

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    extraReducers:{
        [fetchContacts.pending](state){
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, {payload}){
            state.isLoading = false;
            state.errorContact = null;
            state.contact=payload;
        },
        [fetchContacts.rejected](state, {payload}){
            state.isLoading = false;
            state.errorContact = payload;
        },
        [addContact.pending](state){
            state.isLoading = true;
        },
        [addContact.fulfilled](state, {payload}){
            state.isLoading = false;
            state.errorContact = null;
            state.contact.push(payload);
        },
        [addContact.rejected](state,{payload}){
            state.isLoading=false;
            state.errorContact = payload;
        },
        [deleteContact.pending](state){
            state.isLoading=true;   
        },
        [deleteContact.fulfilled](state,{payload}){
            state.isLoading= false;
            state.errorContact =null;
            const index = state.contact.findIndex(contact => contact._id === payload._id);
            state.contact.splice(index, 1);  
        },
        [updateContact.pending](state){
            state.isLoading=true;
        },
        [updateContact.fulfilled](state,{payload}){
            console.log(payload)
            state.isLoading=false;
            state.errorContact=null;
            const index = state.contact.findIndex(contact => contact._id === payload._id);
            state.contact.splice(index, 1, payload)
        },
        
    },
    reducers:{
        visibleContact: (state, { payload }) => {
            state.filter = payload;
       }
    },
}) 

export const contactReducer = contactsSlice.reducer;
export const {visibleContact} = contactsSlice.actions; 