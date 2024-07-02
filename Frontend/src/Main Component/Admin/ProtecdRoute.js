import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useContext } from 'react';
// import {ContextAPI} from '../../ContextAPI/Context';

import Cookies from 'js-cookie';
function ProtecdRoute(props) {

  // const {storetoken} = useContext(TokenContext)
    const  CookiesToken = Cookies.get('token')

  const navigate = useNavigate()
  const {Component} = props

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token !== CookiesToken) {
      // toast.warn("Invalid Token 🥶",{
      //   pauseOnHover: false,
      //   closeOnClick: true,
      //   autoClose: 2000,
      //   theme: 'dark',


      // })
      navigate('/login')
      
      // console.log(token)
      // console.log("This is a token", storetoken)
    }


  },[]);
  return (
    <div>

    <Component />
    
    </div>
  )
}

export default ProtecdRoute