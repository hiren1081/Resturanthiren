import React from 'react'
import NavbarComp from './NavbarComp'
import {
   Redirect
  } from 'react-router-dom';
 const Logout = () => {
    localStorage.clear()
    return <Redirect to="/login" />
}

export default Logout