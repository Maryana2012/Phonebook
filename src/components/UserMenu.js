import { useDispatch } from "react-redux";
import { userNameSelector } from "redux/auth/authSelectors";

export default function UserMenu(){
    const dispatch = useDispatch();
    return(
        <>
          <span>Welcome!!! {userNameSelector}</span>
          <button type="button" 
        //   onClick={()=>{dispatch()}}
          >Log Out</button>

        </>
    )
}