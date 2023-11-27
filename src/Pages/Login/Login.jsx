import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations";
import FormAuth from "../../components/FormAuth/FormAuth";
import css from '../../components/FormAuth/FormAuth.module.css'

export default function Login(){
    const dispatch = useDispatch();
    return(<>
      <h1 className={css.title}>Log In</h1>
      <FormAuth 
          onSubmit ={(formData)=> dispatch(logIn(formData))}
          buttonText="Log In"
          isRegistration={false}/>
    </>
    )
}