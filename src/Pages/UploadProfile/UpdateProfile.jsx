// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {updateAvatar} from "../../redux/auth/authOperations.js";
// import { Navigate } from "react-router-dom";

// const UpdateProfile = () =>{
//     const [file, setFile]= useState(null);
//     const dispatch = useDispatch();

//     const handleChange = (e)=>{
//         setFile(e.target.files[0]);
//     }

//     const handleUpdate =()=>{
//         dispatch(updateAvatar(file));
//         <Navigate to='/profile' />
//     }

// return (<>
//    <h2>Update profile</h2>
//    <input type="file" onChange={handleChange}/>
//    <button type="button" onClick = {handleUpdate}>Upload file</button>

// </>)
// }

// export default UpdateProfile;