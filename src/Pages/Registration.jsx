import { useDispatch } from "react-redux"
import { register } from "redux/auth/authOperations";

export default function Registration(){
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();
      const form = e.target;
      const newUser={
        name: form.elements.name.value, 
        email: form.elements.email.value,
        password: form.elements.password.value,  
      }
     
      dispatch(register(newUser));
      form.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label>Name</label>
        <input type="text"
         name="name"
        //  pattern="^[a-zA-Zа-яА-Я]+$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
        />
        

        <label>Email</label>
        <input type="text"
         name="email"
        //  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
         title="Email must contain @"
         required
         />

        <label>Password</label>
        <input type='text'
         name="password"
        //  pattern="pattern=[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"       
         required
         />
         <button type="submit">Sign In</button>
        </form>
    )
}