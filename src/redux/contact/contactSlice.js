import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, updateContact } from './operations';

const initialStateContact = {
    contact: [],
    isLoading: false,
    errorContact: null,
    filter: ''
} ;

const handleFetchFulfilled =(state, {payload})=>{
    state.isLoading = false;
    state.errorContact = null;
    state.contact = payload;
};

const handleAddFulfilled =( state, {payload})=>{
    state.isLoading = false;
    state.errorContact = null;
    state.contact.push(payload);
}

const handleDeleteFulfilled = (state, {payload}) => {
    state.isLoading= false;
    state.errorContact =null;
    const index = state.contact.findIndex(contact => contact._id === payload._id);
    state.contact.splice(index, 1); 
}

const handleUpdateFulfilled = (state, {payload})=>{
    state.isLoading=false;
    state.errorContact=null;
    const index = state.contact.findIndex(contact => contact._id === payload._id);
    state.contact.splice(index, 1, payload)
}

const handleVisibleFulfilled = (state, {payload}) =>{
    state.filter = payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContact,
    reducers:{
        visibleContact: (state, { payload }) => {
            state.filter = payload;
       }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
        .addCase(addContact.fulfilled, handleAddFulfilled)
        .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
        .addCase(updateContact.fulfilled, handleUpdateFulfilled)
    }
}) 

export const contactReducer = contactsSlice.reducer;
export const {visibleContact} = contactsSlice.actions; 