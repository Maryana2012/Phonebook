import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "redux/auth/authSelectors";

export default function Header(){
   const isLoggedIn = useSelector(isLoggedInSelector);
    return(
        <nav>
           <Navigation/>
           {isLoggedIn ? <UserMenu/> :  <AuthNav/>}
        </nav>
    )
}