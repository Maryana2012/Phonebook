import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile =()=>{
 const user = useSelector(state => state.authReducer.user);

 return(<>
 <h2>Profile</h2>
 <p>{user.name}</p>
 <p>{user.email}</p>
 
 <img src={user.avatarURL.includes('gravatar') ? user.avatarURL : `http://localhost:8000/${user.avatarURL}`} alt={user.name} />
<Link to='update'>Update avatar</Link>
 

 </>)
}

export default Profile;