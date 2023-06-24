import { NavLink } from "react-router-dom";

export default function Navigation(){
    return (
        <nav>
            <NavLink to='/'>Main</NavLink>
            <NavLink to="/">Notations</NavLink>
        </nav>
    )
}