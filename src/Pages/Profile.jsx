import { useSelector } from "react-redux";

const Profile =()=>{
 const user = useSelector(state => state.authReducer.user);
 console.log(user)
 return(<h2>Profile</h2>)
}

export default Profile;