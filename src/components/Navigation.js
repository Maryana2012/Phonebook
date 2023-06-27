import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation(){
    return (
        <nav className={css.nav}>
            <NavLink className={css.link} to='/'><span className={css.nav_text}>Main</span> </NavLink>
            <NavLink className={css.link} to="/contacts"><span className={css.nav_text}>Contacts</span></NavLink>
        </nav>
    )
}