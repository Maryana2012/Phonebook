import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations";
export default function Registration(){
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
        <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
         

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