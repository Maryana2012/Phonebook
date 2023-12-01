import { Button } from '@chakra-ui/react'
import css from './FormAuth.module.css'

const FormAuth = ({onSubmit, buttonText, isRegistration}) =>{
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      const form = e.target;
      if(isRegistration){
          const formData={
            name: form.elements.name.value, 
            email: form.elements.email.value,
            password: form.elements.password.value,  
          }
          onSubmit(formData);
        }
       else{
          const formData={
            email: form.elements.email.value,
            password: form.elements.password.value,  
          }
         onSubmit(formData);
      }
    form.reset();
}


    return(
        <form className={css.form__container} onSubmit={handleSubmit}>
        {isRegistration &&
        <>
        <label className={css.label}><span className={css.label__form}>Name</span></label>
        <input className={css.input}
         type="text"
         name="name"
         pattern="^[a-zA-Zа-яА-Я]+$"
         placeholder="Penelopa"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required/>
        </>
         }
        

        <label className={css.label}><span className={css.label__form}>Email</span></label>
        <input className={css.input} 
        type="email"
         name="email"
         placeholder="penelopa@gmail.com"
         title="Email must contain @"
         required/>

        <label className={css.label}><span className={css.label__form}>Password</span></label>
        <input className={css.input} 
         type="password" 
         name="password"
         required/>

         <Button className={css.button} colorScheme='yellow' 
         type="submit">{buttonText}</Button>
        </form>
    )

}

export default FormAuth;