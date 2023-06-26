import { NavLink } from "react-router-dom"
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
// import { isLoggedInSelector } from "redux/auth/authSelectors";
import { authReducer } from "redux/auth/authSlice";
import { isLoggedInSelector } from "redux/auth/authSelectors";




export default function Header(){
   const isLoggedIn = useSelector(isLoggedInSelector);
   console.log(isLoggedIn)
//    console.log(authReducer.isLoggedIn)
    return(
    //     <header>
    //     <Navigation/>
    //     <UserMenu/>
    //     <AuthNav/>
    //     {/* {isLoggedInSelector ? <UserMenu/> :  <AuthNav/>} */}
    //    </header>

  

        <nav>
           {/* <NavLink to='/'>Home</NavLink> */}
           <Navigation/>
           {/* {console.log(isLoggedIn)} */}
           {isLoggedIn ? <UserMenu/> :  <AuthNav/>}
            {/* <UserMenu/>
             <AuthNav/> */}
          
           {/* <NavLink to='/login'>LogIn</NavLink>

           <NavLink to='/registration'>Registration</NavLink> */}
          
           {/* <NavLink to='/contacts'>Contacts</NavLink> */}
        </nav>
    )
}