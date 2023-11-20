import { useDispatch} from "react-redux";
import { deleteContact} from "redux/contact/operations";
import { Button} from '@chakra-ui/react'
import { useState } from "react";
import Modal from '../Modal/Modal'
import css from '../Contact/Contact.module.css';

export default function Contact({id,name, number}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };


  const handleDelete = () => dispatch(deleteContact(id));

    
    return (<>
    <li className={css.item} key={id}> 
      <span className={css.text_name}>{name}</span>
      <span className={css.text_number}>{number}</span>
      <div className={css.button_container}>
               <Button colorScheme='yellow'  className={css.button}
               type='button' onClick={handleDelete}>Delete</Button>
               <Button colorScheme='yellow'  className={css.button}
               type='button' 
               onClick={handleOpenModal}>Update</Button>
      </div>
               </li>

               {isOpenModal && <Modal isOpen={isOpenModal} 
               id={id}
               name={name}
               number={number}
               onClose={closeModal} />}
    </>
               )
}




