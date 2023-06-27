import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors";

export default function PublicRoute({children}){
    const isLogged = useSelector(isLoggedInSelector);
    const location = useLocation();
    return (
        !isLogged ? children : <Navigate to={location.state ?? '/'} />
    )
}