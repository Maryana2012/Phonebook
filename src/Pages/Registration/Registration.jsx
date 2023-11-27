import { useDispatch } from "react-redux"
import { registration } from "redux/auth/authOperations";
import FormAuth from "../../components/FormAuth/FormAuth";
import css from '../../components/FormAuth/FormAuth.module.css'


export default function Registration(){
    const dispatch = useDispatch();
    return(<>
      <h2 className={css.title}>Registration</h2>
      <FormAuth 
      onSubmit ={(formData)=> dispatch(registration(formData))}
      buttonText="Sign Up"
      isRegistration={true}/>
    </>
    )
}