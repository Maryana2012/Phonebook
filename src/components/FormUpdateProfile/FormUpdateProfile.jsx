import { Button } from '@chakra-ui/react'
// import {useDropzone} from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/authOperations';
import { useState } from 'react';
import css from './FormUpdateProfile.module.css'

const FormUpdateProfile = () =>{
    const dispatch = useDispatch();

    // const {getRootProps, getInputProps} = useDropzone()
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
        const newUser = {
          name: nameUpdate,
          email: emailUpdate,
          password: passwordUpdate
        }
        dispatch(updateAvatar({file, newUser}));
    }


    return(
        
        <form className={css.form__container} 
        onSubmit={handleUpdate}
        >
        
        {/* <div {...getRootProps({onClick:()=> handleChange()})} >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div> */}
        <img src={user.avatarURL.includes('gravatar') ? user.avatarURL : `http://localhost:8000/${user.avatarURL}`} alt={user.name} width='250' height='250'/>
        <input type="file" onChange={handleChange}/>
        <label className={css.label}><span className={css.label__form}>Name</span></label>
        <input className={css.input}
         type="text"
         name="name"
         value={nameUpdate}
         onChange={nameChange}
         required
         size='md'
        />
        
        

        <label className={css.label}><span className={css.label__form}>Email</span></label>
        <input className={css.input} 
        type="email"
         name="email"
         value={emailUpdate}
         onChange={emailChange}
         required
         size='md'/>

        <label className={css.label}><span className={css.label__form}>Password</span></label>
        <input className={css.input} 
         type="password" 
         name="password"
         value={passwordUpdate}
         onChange={passwordChange}
        
         size='md'/>
         <Button 
         className={css.button} colorScheme='yellow' size='md'
         type="submit">Update</Button>
        </form>
    )

}

export default FormUpdateProfile;