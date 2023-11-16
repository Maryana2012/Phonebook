import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations";
import css from './Login.module.css'

export default function Login(){
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();
      const form = e.target;
      const newUser={
          email: form.elements.email.value,
          password: form.elements.password.value, 
        }
     
      dispatch(logIn(newUser));
      form.reset();
    }

    return(
        <form className={css.form__container} onSubmit={handleSubmit}>
        <h1 className={css.title}>Log In</h1>
         
        <label className={css.label}><span className={css.label__form}>Email</span></label>
        <input className={css.input} 
        type="email"
         name="email"
        //  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
         title="Email must contain @"
         placeholder="penelopa@gmail.com"
         required
         />

        <label className={css.label}><span className={css.label__form}>Password</span></label>
        <input className={css.input} 
        type='password'
         name="password"
        //  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"       
         required
       
          />

        <Button  className={css.button_add}  colorScheme='yellow' size='md'
        type="submit">Log In</Button>
        </form>
    )
}