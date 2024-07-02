import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { useContext } from 'react';
import { ContextAPI } from '../../ContextAPI/Context';

function Cart() {

  //----------------------------- State for  the cart data after getting in to the LocalStoage.
  const [cart, setcart] = useState([]);

  //------------------------------ State for Set a Coupon true if the Coupon is Applied  then I Check my Coupon is Applied or not in 
  const { IsCouponApplied, setIsCouponApplied } = useContext(ContextAPI);
  // State For Applying a Coupon
  const [couponmessage, setcouponmessage] = useState(null)
  const [UserCoupon, setuserCoupon] = useState()

  //------------------------------- States for Showing a message on the base of if Item is delted  or Updated 
  const [updatemessage, showupdatemessage] = useState(false)
  const [deletemessage, showdeletemessage] = useState(false)
  // State for Showing a Delted product id inside a Delete message
  const [deletemessageid, showdeletemessageid] = useState('')

  // State for Ruuning a useEfect After Updating the Cart  when this State is Update  then my Funion is Run that  
  const [Cartupdate, setCartupdate] = useState(false)


  //------------------------------ State for making the total and Subtoal I set Total state separate 
  // because i want to show different price on when my Coupon is Applied in the Subtotal  
  // show previos price that I show before applying the token. 
  const { total, settotal } = useContext(ContextAPI)
  const { subtotal, setsubtotal } = useContext(ContextAPI)
  //  State for the quantity 
  const [count2, setcount2] = useState(0);





  //------------------------------ Funcion for multily quantity and price and add to gather making a total
  function multiply_price_and_quantity() {

    let sum = 0;
    const multiply_price_and_quantity = cart.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
    multiply_price_and_quantity.forEach(number => sum += number)
    settotal(sum)
    setsubtotal(sum)


  }



  //-------------------------------------------- UseEffect for Getting a Cart data with multiply funcion 
  // because total is not show on the fist time 
  useEffect(() => {


    const cartItem = JSON.parse(localStorage.getItem('Cart'))
    setcart(cartItem)


    let sum = 0;
    const multiply_price_and_quantity = cartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
    multiply_price_and_quantity.forEach(number => sum += number)
    settotal(sum)
    setsubtotal(sum)


    // setTimeout(() => {

    //   toast.info('Here have little Logic Problem In Cart so Please Ignore. 👋 ',{theme: 'colored', pauseOnHover: true, position: 'bottom-left' })

    // }, (5000));

  }, [Cartupdate])


  // ----------------------------------------- Function for Plus Quantity
  function updateQuantityplus(itemId, newQuantity) {
    const updateCart = cart.map((item) => {
      if (item.id === itemId) {

        return { ...item, quantity: newQuantity }
      }

      else {
        return item;
      }

    });

    setcart(updateCart)
    localStorage.setItem('Cart', JSON.stringify(cart))


    multiply_price_and_quantity();

  }

  // ----------------------------------------- Funcion for the minus Quantity 
  function updateQuantityminus(itemId, newQuantity) {
    const updateCart = cart.map((item) => {

      if (item.id === itemId && item.quantity + count2 > 1) {

        return { ...item, quantity: newQuantity };
      }

      else {
        return item;
      }

    })

    setcart(updateCart)
    localStorage.setItem('Cart', JSON.stringify(cart))

    multiply_price_and_quantity();


  }


  /// ---------------------------------------- Code for delting a item inside an Cart
  function DeleteCart(itemID) {
    const filterDleteCart = cart.filter((item) => item.id !== itemID)

    setcart(filterDleteCart)
    localStorage.setItem('Cart', JSON.stringify(filterDleteCart))


    let sum = 0;
    const multiply_price_and_quantity = filterDleteCart.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
    multiply_price_and_quantity.forEach(number => sum += number)
    settotal(sum)
    setsubtotal(sum)

    showdeletemessage(true)
    showdeletemessageid(itemID)

    setTimeout(() => {
      showdeletemessage(false)

    }, 5000)


  }



  //------------------------------------------ Show update message and update Cart with button
  function UpdateCart() {

    setCartupdate(true)
    showupdatemessage(true)

    setTimeout(() => {

      showupdatemessage(false)
    }, 5000)

  }



  const CouponRef = useRef(null)
  const SubtotalRef = useRef()

  //------------------------------------------ Function for Apply the Coupon code. 
  function ApplyCoupon() {
    const ValidCoupon = 2020;

    const UserCoupon = CouponRef.current.value;
    setuserCoupon(UserCoupon)

    if (ValidCoupon == UserCoupon) {

      setcouponmessage(true)
      toast.success('Coupon Claimed Successfully 😲', { pauseOnHover: false, autoClose: 2000, theme: 'colored', position: 'top-center', })
      setIsCouponApplied(true)

      SubtotalRef.current.className = 'line-through';
      CouponRef.current.value = '';

      // Discount Formula 
      const offprice = total * 0.20
      const Disocuntprice = total - offprice
      settotal(Disocuntprice)

      // Setting a price in a Discont price in a LocalStorage if the UserCoupon is Correct 
      localStorage.setItem('Total', Disocuntprice)
      localStorage.setItem('Applied', '2022')



      setTimeout(() => {
        setcouponmessage(null)
      }, 5000)

    }

    else if (UserCoupon === '') {
      setcouponmessage(null)
    }


    else {
      CouponRef.current.value = '';
      setcouponmessage(false)

    }
  }




  return (
    <div>




      {cart && cart.length >= 1 ? (
        <Container className='mt-36 mb-20' fluid style={{ padding: 'clamp(3vw, 3vw, 80vw)', }}>
          <Row >

            {/* Update and Dlete message */}
            {updatemessage && <div className=' bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center  mb-8 text-sm font-sans font-normal'><span className='text-[#1cf51c] sm:pl-10 p-2 pr-2 font-sans sm:text-[1.4rem] text-[1.3rem]'><i className="bi bi-check-lg"></i> </span>Cart updated</div>}
            {deletemessage && <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center  mt-2 mb-12 text-sm font-sans font-normal'><span className='text-[#1cf51c] sm:pl-10 p-2 pr-2 font-sans sm:text-[1.4rem] text-[1.3rem]'><i className="bi bi-check-lg"></i> </span>“{deletemessageid}” removed. </div>}


            {/* Coupon Message Depend in true or false State  */}
            {couponmessage === null ? null : couponmessage ?
              <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[#1cf51c] sm:pl-10 p-2  font-sans sm:text-[1.4rem] text-[1.3rem]'><i className="bi bi-check-lg "></i></span>Coupon "{UserCoupon}" Applied Successfully 🤩 </div>
              :
              <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[red] sm:pl-10 p-2  font-sans sm:text-[1.4rem] text-[1.3rem]'><i className="bi bi-x-lg"></i></span>Coupon "{UserCoupon}" does not exist! </div>
            }

            <Col xl={8} lg={8} md={12} sm={12}>



              <div className='w-full'>

                <div className='bg-[#f3f0f0] h-10 lg:bg-[white] text-dark d-flex justify-between' >

                  <span className='text-dark font-medium text-sm text-center w-24 sm:ml-32' >Product</span>
                  <span className='text-dark font-medium text-sm text-end'>Price</span>
                  <span className='text-dark font-bold text-sm text-center sm:block hidden'>Quantity</span>
                  <span className='text-dark font-medium text-sm text-end'>Subtotal</span>

                </div>

                <hr />

                <div>


                  {cart.map(item => {
                    return (
                      <div key={item.id} className='shadow-sm rounded-sm d-flex justify-between mt-4'>


                        <div className='d-flex justify-between items-center sm:w-60 w-22'>
                          <div className='cursor-pointer text-xl text-[black] hover:text-[#bb7b1c]'>
                            <span onClick={() => DeleteCart(item.id)}>×</span>
                          </div>

                          <div className='d-flex justify-between w-44 items-center'>
                            <img src={item.path} alt="" className='w-[70px] h-[95px]' /> <div className='w-32  text-center'><span className='text-[black] sm:text-sm text-[12px] font-normal hover:text-[#bb7b1c]'>{item.title}</span></div>
                          </div>

                        </div>


                        <div className='mt-[35px] text-end'>
                          <span className='sm:text-sm text-[12px] w-full h-full text-center'>{item.price}</span>
                        </div>



                        <div className='text-center d-flex justify-center items-center sm:block hidden' >
                          <div className='w-12 d-flex justify-between sm:block hidden'>
                            <button className='sm:block hidden text-[black] hover:text-[#bb7b1c]' onClick={() => updateQuantityminus(item.id, item.quantity - 1)}>-</button>
                            <span className='sm:block hidden' >{item.quantity + count2}</span>
                            <button className='sm:block hidden text-[black] hover:text-[#bb7b1c]' onClick={() => updateQuantityplus(item.id, item.quantity + 1)}>+</button>
                          </div>
                        </div>



                        <div className='font-medium text-end d-flex justify-end'>
                          <span className='text-end  mt-[35px] sm:text-sm text-[12px]'> Rs {item.quantity * parseFloat(item.price.replace(/[^0-9]/g, ''))} </span>
                        </div>


                      </div>
                    )

                  })}




                </div>
              </div>

              <div className='d-flex justify-between mt-3' style={{ maxWidth: '990px', }}>

                <div>
                  <input type="text" className='text-sm text-[black] focus:outline-none border-b-2 h-10  text-start' placeholder='Coupon code' required ref={CouponRef} />
                  <button className='sm:text-sm text-[12px] text-[black] hover:text-[#bb7b1c] transition delay-200 ease-out' onClick={() => ApplyCoupon()} >Apply coupon</button>
                </div>


                <div>
                  <button onClick={() => UpdateCart()}><span className=' text-sm text-[black] hover:text-[#bb7b1c] transition delay-75 ease-out' >Update Cart</span></button>
                </div>
              </div>


            </Col>

            <Col xl={4} lg={4} md={12} sm={12} >
              <div className='bg-[#f9f9f9] p-4'>

                <span className='text-dark text-sm font-medium'>Cart totals</span>

                <div className='d-flex justify-between mt-5'>
                  <span className='text-sm font-normal'>Subtotal</span>
                  <span className='text-sm font-normal' ref={SubtotalRef}>₨ {subtotal}</span>
                </div>


                <div className='d-flex justify-between mt-3'>
                  <span className='text-sm font-normal'>Shipping</span>
                  <span className='text-sm font-normal'>Flat rate</span>

                </div>

                <div className='d-flex justify-end mt-3'>
                  <span className='text-end text-sm'>
                    <span>Shipping to</span> <span className='text-sm font-bold'>Punjab.</span>
                  </span>

                </div>

                <div className='d-flex justify-end mt-3'>
                  <span className='text-end text-sm'><span>Change address</span></span>
                </div>

                <hr />


                <div className='d-flex justify-between'>
                  <span className='text-sm font-normal'>Total</span>
                  <span className='text-sm font-normal'>₨ {total}</span>
                </div>

              </div>

              <Link to='/products/checkout'><button className='w-full h-16 bg-[#333333] hover:bg-[#bb7b1c] text-center items-center text-light mt-2 transition delay-200 ease-out'>PROCEED TO CHECKOUT</button></Link>

            </Col>
          </Row>
        </Container>


      ) :

        <div className='mt-28'>
          <Container className='p-32'>
            <Row>
              <Col lg={12} xl={12} md={12} sm={12} >

                <div className='bg-[#eeeff2] text-[#444444] w-full h-14  d-flex  justify-start items-center pl-3 font-sans text-sm'><span className='text-[#1cf51c] pl-10 pr-2 font-sans text-[1.4rem]'><i className="bi bi-check-lg"></i></span>Your cart is curenlt empty.</div>

                {deletemessage && <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-3 mb-24 text-sm mt-3 font-normal'><span className='text-[#1cf51c] pl-10 pr-2 font-sans text-[1.4rem]'><i className="bi bi-check-lg"></i></span>“{deletemessageid}” removed. </div>}

                <div className='w-full mt-9 d-flex justify-center items-center'>

                  <Link to='/product-category/Boski'><button className='text-base font-medium w-48 h-16 bg-[#333333] hover:bg-[#bb7b1c] text-[white] '>RETURN TO SHOP</button></Link>

                </div>

              </Col>
            </Row>
          </Container>
        </div>

      }




    </div>
  )
}

export default Cart