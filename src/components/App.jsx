import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(()=>import('../Pages/Home'));
const LoginPage = lazy(()=>import('../Pages/Login'));
const RegistrationPage = lazy(()=>import('../Pages/Registration'));
const ContactsPage = lazy(()=>import('../Pages/PhoneBook'));
const ProfilePage = lazy(()=>import('../Pages/Profile'))


export default function App(){

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCurrentUser())
  },[dispatch])

  return(<>
   <Routes>
       <Route path='/' element={<Layout/> }>
          <Route path='/' element={<HomePage/>}/>
          <Route path='login' element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>}/>
          <Route path='registration' element={
            <PublicRoute>
              <RegistrationPage/>
            </PublicRoute>}/>
          <Route path='contacts' element={
          <PrivateRoute>
            <ContactsPage/>
          </PrivateRoute>}/>
          <Route path='profile' element={
          <PrivateRoute>
            <ProfilePage/>
          </PrivateRoute>}/>
        </Route>  
    </Routes>
  </>
    
  )
}






