import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

import ModalUpdateProfile from "components/ModalUpdateProfile/ModalUpdateProfile";
import css from '../Profile/Profile.module.css'

const Profile =()=>{
   const [isOpenModal,setIsOpenModal]=useState(false);
   const user = useSelector(state => state.authReducer.user);

   const handleOpenModal = () =>{
    setIsOpenModal(true);
   }

   const closeModal =() =>{
     setIsOpenModal(false); 
   }
   

   return(
    <main className={css.main}>
     <div className={css.container}>
     <h2 className={css.title}>Profile</h2>
     <img src={user.avatarURL.includes('gravatar') ? user.avatarURL : `https://phonebook-backend-q6eg.onrender.com/${user.avatarURL}`} alt={user.name} className={css.avatar} width='250' height='250'/>
     <p className={css.text}><span className={css.title_span}>Name:</span> {user.name}</p>
     <p className={css.text}><span className={css.title_span}>Email:</span> {user.email}</p>
 
    <Button className={css.button}
      type="button" colorScheme='yellow' size='md'
      onClick={handleOpenModal}>Update</Button>

      {isOpenModal && <ModalUpdateProfile onClose={closeModal} />}
 </div>
    </main>
 )
}

export default Profile;