// import React, { useEffect } from "react";
// import Form from "./Form/Form";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";
// import css from '../components/App.module.css'
// import { useDispatch, useSelector } from "react-redux";
// import { contactsSelector } from "redux/selector";
// import { fetchContacts } from "redux/operations";
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
// import AppBar from './AppBar';
// import Home from 'Pages/Home';
// import Registration from 'Pages/Registration';
// import Login from 'Pages/Login';
// import PhoneBook from 'Pages/PhoneBook';
import Header from './Header/Header';



const HomePage = lazy(()=>import('../Pages/Home'));
const LoginPage = lazy(()=>import('../Pages/Login'));
const RegistrationPage = lazy(()=>import('../Pages/Registration'));
const ContactsPage = lazy(()=>import('../Pages/PhoneBook'));


export default function App(){
  return(<>
    {/* <Header/> */}
<Routes>
       <Route path='/' element={<Layout/> }>
          <Route path='/' element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='registration' element={<RegistrationPage/>}/>
          <Route path='contacts' element={<ContactsPage/>}/>
       </Route>  
    </Routes>
  </>
    
  )
}

// export default function App(){
//   return(
//     <>
//       <AppBar/>

//         <Routes >
       
//        {/* <Switch > */}
//         <Route path='/' component={Home}/>
//         <Route path='/registration' component={Registration}/>
//         <Route path='/login' component={Login}/>
//         <Route path='/contacts' component={PhoneBook}/>
// {/* 
//        </Switch> */}
//         </Routes>
//     </>
//   )
// }

// export default function PhoneBook() {
//   const dispatch = useDispatch();
//   const {contact, isLoading, error}=useSelector(contactsSelector);

//   useEffect(()=>{
//     dispatch(fetchContacts())
//   },[dispatch])

//   return (<div className={css.container}>
//     <h1 className={css.title}> PhoneBook</h1>
//     <Form  /> 
//     <h2 className={css.title}>Contacts</h2>
//     {isLoading && <p>Loading tasks...</p>}
//     {error && <p>{error}</p>}
//     <Filter  />
//     {contact !== [] &&  <ContactList /> }
//     </div>)
// }





