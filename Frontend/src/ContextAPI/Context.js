import React, { createContext, useState } from 'react'



export const ContextAPI = createContext();

function Context(props) {

const [storetoken, setStoretoken] = useState();
const [cart , setcart]  = useState([]);
const [IsCouponApplied , setIsCouponApplied ] = useState()
const [SHOW, setSHOW] = useState(false)

const [total, settotal] = useState('0');
const [subtotal , setsubtotal] = useState('0')

  return (
    <div>
    <ContextAPI.Provider value={{storetoken, setStoretoken, cart: cart, setcart,  IsCouponApplied, setIsCouponApplied, SHOW, setSHOW, total, settotal , subtotal , setsubtotal }}>
    
      {props.children}

    </ContextAPI.Provider>
    </div>
  )
}

export default Context


