import { useDispatch, useSelector} from "react-redux";
import { contactsSelector } from "redux/contact/selector";
import css from '../Form/Form.module.css'
import { addContact, updateContact } from "redux/contact/operations";
import { Button, Input } from '@chakra-ui/react'
import { useState } from "react";

export default function Form({id, name, number}) {
  const dispatch = useDispatch();
  const contact = useSelector(contactsSelector);
  const [nameUpdate, setNameUpdate] = useState(name);
  const [numberUpdate, setNumberUpdate] = useState(number);

  const nameChange = (e) =>{
    setNameUpdate(e.target.value)
  }

  const numberChange =(e)=>{
    setNumberUpdate(e.target.value)
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    if (contact.some(element => element.name.toLowerCase() === form.elements.name.value.toLowerCase())) {
        alert(`is already in contacts`);
    } else {
        const newUser = {
        id,  
        name: form.elements.name.value, 
        number: form.elements.phone.value
       }
       if(!name){
         dispatch(addContact(newUser));
       } else {
        dispatch(updateContact(newUser))
       }
       }
    form.reset();
  }
  
  return (
  <form className={css.form__container} onSubmit={handleSubmit}>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Name</span> 
    {name ? (<Input className={css.input}
           type="text"
           name="name"
           value={nameUpdate}
           onChange={nameChange}
           pattern="^[a-zA-Zа-яА-Я]+$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required/>)
    :
    (<Input className={css.input}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required/>) 
           }
           </label>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Number</span>
    {number ? (
      <Input className={css.input}
          type="tel"
          name="phone"
          value={numberUpdate}
          onChange={numberChange}
          pattern="^[0-9]+$"
         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         required/>
    ) 
    :(
     <Input className={css.input}
            type="tel"
            name="phone"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
    )
    }
    </label>
    <Button colorScheme='yellow' size='md' className={css.button_add}
     type="submit">{name ? 'Update' : 'Add Contact'}</Button>
  </form>)
}
