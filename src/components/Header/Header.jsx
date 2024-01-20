import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "redux/auth/authSelectors";
import css from '../Navigation.module.css'

export default function Header(){
   const isLoggedIn = useSelector(isLoggedInSelector);
    return(
        <header className={css.nav_box}>
           <Navigation/>
           {isLoggedIn ? <UserMenu/> :  <AuthNav/>}
        </header>
    )
}