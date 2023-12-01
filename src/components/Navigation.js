import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation(){
   
    return (
        <nav className={css.nav}>
            <NavLink  to='/' style={({isActive})=>{return{color: isActive?'blue':'black'}}} ><span className={css.nav_text}>Main</span> </NavLink>
            <NavLink  to="/contacts" style={({isActive})=>{return{color: isActive?'blue':'black'}}} ><span className={css.nav_text}>Contacts</span></NavLink>
        </nav>
    )
}