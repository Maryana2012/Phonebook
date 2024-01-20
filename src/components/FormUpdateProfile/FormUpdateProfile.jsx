import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/authOperations';
import { useState } from 'react';
import css from './FormUpdateProfile.module.css'

const FormUpdateProfile = ({onClose}) =>{
    const dispatch = useDispatch();
    
    const user = useSelector(state=>state.authReducer.user);
    const [file, setFile]= useState(null); 
    const [nameUpdate, setNameUpdate] = useState(user.name);
    const [emailUpdate, setEmailUpdate] = useState(user.email);
    const [passwordUpdate, setPasswordUpdate] = useState(user.password);
    

    const handleChange = (e)=>{
        setFile(e.target.files[0]);
     }

    const nameChange =(e)=>{
      setNameUpdate(e.target.value);
    }

    const emailChange =(e)=>{
        setEmailUpdate(e.target.value);
      }

      const passwordChange =(e)=>{
        setPasswordUpdate(e.target.value);
      }

    const handleUpdate =(e)=>{
        e.preventDefault();
        if(passwordUpdate){
          const newUser = {
            name: nameUpdate,
            email: emailUpdate,
            password: passwordUpdate
          }
          dispatch(updateAvatar({file, newUser}));
          onClose()
        } else{
          const newUser = {
            name: nameUpdate,
            email: emailUpdate,
          }
          dispatch(updateAvatar({file, newUser}));
          onClose()
        }
    }


    return(
        
        <form className={css.form__container} 
        onSubmit={handleUpdate}
        >
        <img src={user.avatarURL.includes('gravatar') ? user.avatarURL : `https://phonebook-backend-q6eg.onrender.com/${user.avatarURL}`} alt={user.name} className={css.avatar} width='150' height='150'/>
        <input type="file" onChange={handleChange} className={css.input_file} />
       
        <label className={css.label}><span className={css.label__form}>Name</span></label>
        <input className={css.input}
            type="text"
            name="name"
            value={nameUpdate}
            onChange={nameChange}/>
        
        <label className={css.label}><span className={css.label__form}>Email</span></label>
        <input className={css.input} 
        type="email"
         name="email"
         value={emailUpdate}
         onChange={emailChange}/>

        <label className={css.label}><span className={css.label__form}>Password</span></label>
        <input className={css.input} 
         type="password" 
         name="password"
         value={passwordUpdate}
         onChange={passwordChange}/>
         <Button 
         className={css.button} colorScheme='yellow' size='md'
         type="submit">Update</Button>
        </form>
    )

}

export default FormUpdateProfile;