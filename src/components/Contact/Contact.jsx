import { useDispatch} from "react-redux";
import css from '../Contact/Contact.module.css';
import { deleteContact } from "redux/contact/operations";
import { Button} from '@chakra-ui/react'

export default function Contact({id,name, number}) {
 
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
    return (<li className={css.item} key={id}> <span className={css.item__text}>
      <span className={css.text_name}>{name}</span>
      <span className={css.text_number}>{number}</span></span>
               <Button colorScheme='yellow' size='md'
               type='button' onClick={handleDelete}>Delete</Button></li>)
}




