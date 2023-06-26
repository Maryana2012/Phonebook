import { useDispatch, useSelector } from "react-redux";
import { userNameSelector } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";

export default function UserMenu(){
  const dispatch = useDispatch();
    const userName = useSelector(userNameSelector)
    return(
        <>
          <span>Welcome!!! {userName}</span>
          <button type="button" 
          onClick={()=>{dispatch(logOut())}}
          >Log Out</button>

        </>
    )
}