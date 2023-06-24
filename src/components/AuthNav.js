import { NavLink } from "react-router-dom";

export default function AuthNav(){
    return(
        <>
          <NavLink to='/registration'>Registration</NavLink>
          <NavLink to='/login'>Log In</NavLink>
        </>
    )
}