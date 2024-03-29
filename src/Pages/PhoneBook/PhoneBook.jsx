import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { contactsSelector, errorSelector, isLoadingSelector } from "redux/contact/selector";
import { fetchContacts } from "redux/contact/operations";
import css from '../PhoneBook/PhoneBook.module.css'


export default function PhoneBook() {
  const dispatch = useDispatch();
  const contact = useSelector(contactsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector); 


  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  return (
  <main className={css.main}>
 
  <div className={css.container}>
    <h2 className={css.title}>Add new contact</h2>
    <Form  /> 
  </div>
  <div className={css.container}>
    <h2 className={css.title}>Contacts</h2>
    {isLoading && <p>Loading contacts...</p>}
    {error && <p>{error}</p>}
    <Filter  />
    {contact &&  <ContactList /> }
  </div>
    
    </main>
    )
}
