import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
export default function AuthNav(){
    return(
        <nav className={css.nav}>
          <NavLink className={css.link} to='/registration'><span className={css.nav_text}>Registration</span></NavLink>
          <NavLink className={css.link} to='/login'><span className={css.nav_text}>Log In</span></NavLink>
        </nav>
    )
}