import { NavLink } from "react-router-dom"
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { isLoggedInSelector } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";




export default function Header(){
   
    // const isLoggedIn = useSelector(authSelectors.isLoggedInSelector)
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
           
            <UserMenu/>
             <AuthNav/>
          
           {/* <NavLink to='/login'>LogIn</NavLink>

           <NavLink to='/registration'>Registration</NavLink> */}
          
           {/* <NavLink to='/contacts'>Contacts</NavLink> */}
        </nav>
    )
}