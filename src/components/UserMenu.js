import { useDispatch, useSelector } from "react-redux";
import { userEmailSelector } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";

export default function UserMenu(){
  const dispatch = useDispatch();
    const userEmail = useSelector(userEmailSelector)
    return(
        <>
          <span>Welcome!!! {userEmail}</span>
          <button type="button" onClick={()=>{dispatch(logOut())}}>Log Out</button>
        </>
    )
}