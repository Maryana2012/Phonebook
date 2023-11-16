import { useDispatch, useSelector } from "react-redux";
import { userEmailSelector } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";
import { Button } from '@chakra-ui/react'
import css from './Navigation.module.css'

export default function UserMenu(){
  const dispatch = useDispatch();
    const userEmail = useSelector(userEmailSelector)
    return(
        <div className={css.nav}>
          <span className={css.user_menu_text}>{userEmail}</span>
          <Button colorScheme='yellow'  size='md'
          type="button" onClick={()=>{dispatch(logOut())}}>Log Out</Button>
        </div>
    )
}