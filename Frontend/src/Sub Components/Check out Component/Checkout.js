
// ------------------------------------------------------------------------- Import Basic Stuff
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// -------------------------------------------------------------------------- React Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ------------------------------------------------------------------------- Import SubComponent 
import { useContext } from 'react';
import { ContextAPI } from '../../ContextAPI/Context';
import OrderPopup from '../MoreComponent/OrderPopup';




function Checkout(props) {

  const [cart, setcart] = useState()
  const [total, setotal] = useState()
  const [subtotal, setsubtotal] = useState()


  // ------------------------------------------------------------------------- State for Coupon 
  const { IsCouponApplied, setIsCouponApplied } = useContext(ContextAPI)
  const [ShowCouponInputField, SetShowCouponInputField] = useState()
  const [couponmessage, setcouponmessage] = useState(null)
  const [UserCoupon, setuserCoupon] = useState()
  const [show, setshow] = useState(false);



  // ----------------------------------------------------------------------------- State for POSTING THE ORDER
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Companyname, setCompanyname] = useState('Optional');
  const [Contryregion, setContryregion] = useState('');
  const [Streetaddress, setStreetaddress] = useState('');
  const [Apartment, setApartment] = useState('Optional');
  const [Towncity, setTowncity] = useState('');
  const [Statecountry, setStatecountry] = useState('');
  const [Postalcode, setPostalcode] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Emailaddress, setEmailaddress] = useState('');
  const [Notes, setNotes] = useState('Optional');

  //------------------------------------------------------ State for Quantity , Title , Price, date , month and year
  const [title, settitle] = useState('');
  const [quantity, setquantity] = useState('');
  const [itemprice, setitemprice] = useState('');
  const [month, setmonth] = useState();
  const [year, setyear] = useState(0);
  const [date , setdata] = useState('')
  const [status , setstatus] = useState('Pending')
  const [IpAddress , setIpAddress] = useState('No')

  





  // ------------------------------------------------------Useeffect for Getting and Cart item and checkign token  is Applied or not 
  const CouponRef = useRef()
  const SubtotalRef = useRef()
  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem('Cart'));
    setcart(cartItem)

    const UserIpAddress = localStorage.getItem('Ip')
    setIpAddress(UserIpAddress)
    



    // ----------------Code for Setting a title and quanity that i can set as a order
    const title = cartItem.map(item => item.title)
    settitle(title)


    const quantity = cartItem.map(item => item.quantity)
    setquantity(quantity)

    const price = cartItem.map(item => item.price)
    setitemprice(price)


    // --------------- Coupon validiton
    const TOTAL = JSON.parse(localStorage.getItem('Total'))
    const CheckCoupon = JSON.parse(localStorage.getItem('Applied'))
    if (TOTAL !== null && CheckCoupon) {
      setIsCouponApplied(true)
      let sum = 0;
      const multily_price_and_quantity = cartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
      multily_price_and_quantity.forEach(number => sum += number)
      setsubtotal(sum)
      setotal(TOTAL)
      SubtotalRef.current.className = 'line-through';


    }

    else {
      setIsCouponApplied(false)
      let sum = 0;
      const multily_price_and_quantity = cartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
      multily_price_and_quantity.forEach(number => sum += number)
      setotal(sum)
      setsubtotal(sum)
    }



  }, [])


  //---------------- Function for Setting an Input field
  const ShowCouponField = () => {
    SetShowCouponInputField(true)
  }
  const HideCouponField = () => {
    SetShowCouponInputField(false);

  };




// -------------------------------------------------------------------- Function for Apply the Coupon code If it was not Appied on the Cart page.
  const ApplyCoupon = () => {
    const ValidCoupon = 2020;
    const userCoupon = CouponRef.current.value;
    setuserCoupon(userCoupon)

    if (ValidCoupon == userCoupon) {

      setcouponmessage(true)
      SetShowCouponInputField(false);
      setIsCouponApplied(true)
      SubtotalRef.current.className = 'line-through';
      const offprice = total * 0.20
      const Disocuntprice = total - offprice
      setotal(Disocuntprice)

      localStorage.setItem('Total', Disocuntprice)
      localStorage.setItem('Applied', '2022')


      

    }
    else if (userCoupon === '') {
      setcouponmessage(null)

    }

    else {
      setcouponmessage(false)
      SetShowCouponInputField(false);
    }
  }




  // -------------------------------------------------------------------------------------- Validation for the input field
  function Placeorder(e) {
    e.preventDefault();

    // console.log('defalt work')





    const DisallowedCharacter1 = ';:,.{}[]()*&^%$#@!_.,?/`~01234567890';
    const DisallowedCharacter2 = ';:,.{}[]()*&^%$#@!_.,?/`~';
    const DisallowedCharacter3 = ';:,{}[]()*&^%$#!_,?/`~';


    // Validaton for the First name
    if (DisallowedCharacter1.split('').some(char => Firstname.includes(char))) {
      toast.info('Please Provide a Valid First Name', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })

    }

    // Validation for the Lastname
    else if (DisallowedCharacter1.split('').some(char => Lastname.includes(char))) {
      toast.info('Please Provide a Valid Last  Name', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }

    // Validation for the CompanyName
    else if (DisallowedCharacter1.split('').some(char => Companyname.includes(char))) {
      toast.info('Please Provide a Valid Last  Name', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }

    // Validation for the Country Region
    else if (DisallowedCharacter1.split('').some(char => Contryregion.includes(char))) {
      toast.info('Please Provide a Valid Last  Name', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }



    // Validation for the Apartement
    else if (DisallowedCharacter2.split('').some(char => Apartment.includes(char))) {
      toast.info('Please Make sure you Type Correct', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }


    // Validation for the Town City
    else if (DisallowedCharacter2.split('').some(char => Towncity.includes(char))) {
      toast.info('Please Provide a Valid Location', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }



    // Validation for the Postal Code
    else if (DisallowedCharacter2.split('').some(char => Postalcode.includes(char))) {
      toast.info('Please Provide a Valid Postalcode', { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
    }

    else if (Postalcode.length !== 5) {

      if (Postalcode.length > 5) {
        toast.warning('Postalcode only Must 5 digit D', { theme: 'dark', pauseOnHover: false, autoClose: 2000, position: 'top-left', hideProgressBar: true })
      }

      else {

        toast.warning('Postal Code is Not less then 5 Digit', { theme: 'light', pauseOnHover: false, autoClose: 2000, position: 'top-left', hideProgressBar: true })

      }
    }


    // Validation for the Phone Number
    else if (Phonenumber.length !== 11) {

      if (Phonenumber.length > 11) {
        toast.warning('Phone number Lenght is greater then 11', { theme: 'dark', pauseOnHover: false, autoClose: 2000, position: 'bottom-center', hideProgressBar: true })
      }
      else if (Phonenumber.length < 11) {
        toast.warning('Phone number lenght is less then 11', { theme: 'dark', pauseOnHover: false, autoClose: 2000, position: 'bottom-center', hideProgressBar: true })
      }

    }


    // Validaiton fot the email
    else if (DisallowedCharacter3.split('').some(char => Emailaddress.includes(char)) || Emailaddress.length < 13 || !Emailaddress.includes('@') || !Emailaddress.endsWith('.com')) {

      toast.info('Email that You Provide is not Valid', { theme: 'colored', pauseOnHover: false, autoClose: 2000, position: 'top-center' })

    }

    else {

      // ------------------- Defnine a date , month, year for showing a sales on the graph of each month 
      const today = new Date();
      const date = today.toLocaleDateString()
      setdata(date)

      const year = today.getFullYear();
      setyear(year)

      const month = today.getMonth() + 1;
      setmonth(month);

      // ----------------- Axios request to Post the order
      axios.post(`${process.env.REACT_APP_Backend_URL}user/postorder`, { Firstname, Lastname, Companyname, Contryregion, Streetaddress, Apartment, Towncity, Statecountry, Postalcode, Phonenumber, Emailaddress, Notes, title, quantity, itemprice, total,  subtotal, IsCouponApplied, year, month, date , status, IpAddress })
        .then((response) => {

          if (response.data === 'Successfully Post the Order') {
            console.log(response.data)
            toast.success("Sucessfully Order Submit", { theme: 'dark', pauseOnHover: false, autoClose: 2000, })
            setshow(true)
            localStorage.removeItem('Total')
            localStorage.removeItem('Cart')      
            localStorage.removeItem('Ip')
          }

          else { 
            
            console.log(response.data)
            toast.success("Failed to Submit the Order",) }
        })
        .catch((err) => { toast.error('Failed to Submit the Data' + err) })


    }



  }


  return (
    <div >
      <Container fluid className='mb-10 relative mt-4 ' style={{ padding: 'clamp(2px, 10%, 160px)' }} >

        {show ?

          <OrderPopup show={show} setshow={setshow} />

          : null
        }

        {/* <OrderPopup value={show} ></OrderPopup> */}



        {IsCouponApplied ? null

          :
          <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[#1cf51c] sm:pl-10 pl-2 sm:pr-2 pr-1 font-sans text-[1.4rem] '><i className="bi bi-check-lg"></i> </span><span className='sm:text-base text-sm' >Have a coupon? <span className='text-[#333333]  hover:text-[#bb7b1c] transition delay-300 ease-out' onClick={ShowCouponInputField ? HideCouponField : ShowCouponField} >&nbsp;Click here to enter your code</span></span></div>
        }


        {ShowCouponInputField ?
          <label className="block">

            <span className=" block text-sm font-normal text-[#333333]">If you have a coupon code, please apply it below.</span>
            <div className='relatives d-flex justify-start'>
              <input type="text" name="firstname" className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-[50vh] h-12 sm:text-sm " placeholder="" ref={CouponRef} />
              <button className='ml-1 bg-[#444444] hover:bg-[#bb7b1c] text-light h-12 sm:w-32 w-36 mt-3 p-2 sm:text-sm text-[11px] transition delay-200 ease-out' onClick={ApplyCoupon}>Apply coupon</button>
            </div>

          </label>

          : null
        }


        {/* Coupon Message Depend in true or false State  */}
        {couponmessage === null ? null : couponmessage ?
          <div className='bg-[#eeeff2] text-[#444444] w-full sm:h-14 h-12   sm:pl-2 pl-0 mb-8 sm:text-base text-sm sm:pt-3 font-normal'><span className='text-[#1cf51c] sm:pl-10 pl-3 pr-2 font-sans text-[1.4rem]'><i className="bi bi-check-lg "></i></span><span>Coupon "{UserCoupon}" Applied Successfully You are Eligible to 20% discount 😎 </span></div>
          :
          <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[red] sm:pl-10 pl-3 pr-2 font-sans text-[1.8rem]'><i className="bi bi-x-lg"></i></span>Coupon "{UserCoupon}" does not exist! </div>
        }

        {/* {couponmessage === null ? (

          <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[#1cf51c] pl-10 pr-2 font-sans text-[1.4rem]'><i className="bi bi-check-lg "></i></span>Coupon "{UserCoupon}" Applied Successfully 🤩 </div>
        ) : couponmessage ? (
          <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[#1cf51c] pl-10 pr-2 font-sans text-[1.4rem]'><i className="bi bi-check-lg "></i></span>Coupon "{UserCoupon}" Applied Successfully 🤩 </div>
        ) : (
          <div className='bg-[#eeeff2] text-[#444444] w-full h-12  d-flex  justify-start items-center pl-2 mb-8 text-sm mt-3 font-normal'><span className='text-[red] pl-10 pr-2 font-sans text-[1.8rem]'><i className="bi bi-x-lg"></i></span>Coupon "{UserCoupon}" does not exist! </div>

        ) */}


        <form method='POST' onSubmit={(e) => Placeorder(e)}>
          <Row style={{ marginTop: '100px' }}>
            <Col lg={8} xl={8} md={12} sm={12} xs={12} >
              <h2 className='text-[#333333] font-RussoOne ' style={{ fontSize: 'clamp(20px, 3vw, 25px)' }}>Billing details</h2>
              <div className='bg-[#bb7b1c] mt-7 w-[100%] h-0.5'></div>




              <div className='d-flex justify-between flex-row w-[100%] pr-2 mt-5'>
                <label className="block w-[50%]">
                  <span className=" block text-sm font-normal text-[#333333]">First name <span className='text-sm font-light'>*</span></span>
                  <input type="text" name="Firstname" id='Firstname' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-full h-12 sm:text-sm " placeholder="" required onChange={(e) => setFirstname(e.target.value)} />
                </label>

                <label className="block w-[50%] pl-2">
                  <span className=" block text-sm font-normal text-[#333333]">Last name <span className='text-sm font-light'>*</span></span>
                  <input type="text" name="lastname" id='LastName' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-full h-12 sm:text-sm " placeholder="" required onChange={(e) => setLastname(e.target.value)} />
                </label>
              </div>



              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Company name (optional)<span className='text-sm font-light'>*</span></span>
                <input type="text" name="Companyname" id='Companyname' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-full h-12 sm:text-sm " placeholder="" onChange={(e) => setCompanyname(e.target.value)} />
              </label>


              <InputGroup>
                <span className=" block text-sm font-normal text-[#333333] mt-3">Country / Region<span className='text-sm font-light'>*</span></span>
                <select id="Contryregion" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none   focus:border-gray-800 block w-full p-2.5  dark:placeholder-gray-400 dark:text-dark " required onChange={(e) => setContryregion(e.target.value)} >
                  <option value="Select region"  ></option>
                  <option className='text-sm font-sans text-dark'>Pakistan</option>
                  <option className='text-sm'>Punjab</option>
                  <option className='text-sm'>Azad Kashmir</option>
                  <option className='text-sm'>Balochistan</option>
                  <option className='text-sm'>Gilgit Baltistan</option>
                  <option className='text-sm'>Islamabad Capital Territory</option>
                  <option className='text-sm'>Khyber Pakhtunkhwa</option>
                  <option className='text-sm'>Pujab</option>
                  <option className='text-sm'>Sindh</option>
                </select>

              </InputGroup>



              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Street address<span className='text-sm font-light'>*</span></span>
                <input type="text" name="Streetaddress" id='Streetaddress' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-700 focus:outline-none focus:border-gray-800  block w-full h-12 sm:text-sm " placeholder="Home number and street name" required onChange={(e) => setStreetaddress(e.target.value)} />

                <input type="text" name="Apartment" id='Apartment' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-700 focus:outline-none focus:border-gray-800  block w-full h-12 sm:text-sm " placeholder="Apartmen, suite, unit, etc.(optional)" onChange={(e) => setApartment(e.target.value)} />
              </label>

              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Town / County<span className='text-sm font-light'>*</span></span>
                <input type="text" name="Towncity" id='Towncity' className="mt-3 px-3 py-2  border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-800  block w-full h-12 sm:text-sm " placeholder="" required onChange={(e) => setTowncity(e.target.value)} />
              </label>

              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">State / County<span className='text-sm font-light'>*</span></span>
                <input type="text" name="Statecountry" id='Statecountry' className="mt-3 px-3 py-2  border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-800  block w-full h-12 sm:text-sm " placeholder="" onChange={(e) => setStatecountry(e.target.value)} />
              </label>

              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Postcode / ZIP<span className='text-sm font-light'>*</span></span>
                <input type="number" name="Postalcode" id='Postalcode' className="mt-3 px-3 py-2   border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-800  block w-full h-12 sm:text-sm " placeholder="XXXXX" required maxLength={5} minLength={5} onChange={(e) => setPostalcode(e.target.value)} />
              </label>



              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Phone<span className='text-sm font-light'> *</span></span>
                <input type="number" name="Phonenumber" id='Phonenumber' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-full h-12 sm:text-sm " placeholder="0300XXXXXXX" required minLength={11} maxLength={11} onChange={(e) => setPhonenumber(e.target.value)} />
              </label>


              <label className="block mt-3">
                <span className=" block text-sm font-normal text-[#333333]">Email address <span className='text-sm font-light'> *</span></span>
                <input type="email" name="Emailaddress" id='Emailaddress' className="mt-3 px-3 py-2  bg-white border  border-slate-400 placeholder-slate-400 focus:outline-none focus:border-gray-00  block w-full h-12 sm:text-sm " placeholder="" required onChange={(e) => setEmailaddress(e.target.value)} />
              </label>

              <div className='mt-3'>
                <input type="checkbox" /> <span className='font-mukta text-sm text-[#333333]'>Ship to different address?</span>
              </div>


              <p className='mt-8 text-sm text-[#333333] font-mukta font-medium '>Order notes (optional)</p>
              <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" className='h-[150px] rounded-0 shadow-none' id='Notes' placeholder='Notes about your order, e.g, special notes for delivery' onChange={(e) => setNotes(e.target.value)} />
              </InputGroup>


            </Col>





            <Col lg={4} xl={4} md={12} sm={12} xs={12} className='pl-3 ' >
              <h2 className='text-[#333333] font-RussoOne' style={{ fontSize: 'clamp(20px, 3vw, 25px)' }}>Your order</h2>
              <div className='bg-[#bb7b1c] mt-7 w-[100%] h-0.5'></div>

              <div className='d-flex justify-between w-[100wv] mt-12'>

                <span className='font-mukta text-sm'>Product</span>
                <span className='font-mukta text-sm'>Subtotal</span>
              </div>



              {cart && cart.map((item) => {
                return (
                  <>
                    <hr />
                    <div className='d-flex justify-between w-[100wv] mt-1' key={item._id}>
                      <span className=' font-normal text-sm'>{item.title} × <b>{item.quantity}</b> </span>
                      <span className='text-base'>Rs, {item.quantity * item.price.replace(/[^0-9]/g, '')}</span>
                    </div>
                  </>
                )
              })}



              <hr />
              <div className='d-flex justify-between w-[100wv] mt-4'>

                <span className='font-mukta text-sm'>Subtotal </span>
                <span className='text-lg font-medium' ref={SubtotalRef}>Rs, {subtotal}</span>
              </div>

              <hr />

              <div className='d-flex justify-between w-[100wv] mt-1'>

                <span className='font-mukta text-sm'>Shipping</span>
                <span className='font-mukta text-sm'>Flat rate</span>
              </div>

              <hr />

              <div className='d-flex justify-between w-[100wv] mt-1'>

                <span className='font-mukta text-sm'>Total</span>
                <span className='font-mukta text-2xl font-bold'>Rs, {total}</span>
              </div>

              <hr />


              <div className='mt-4 w-[95%]'>
                <input type="radio" />  <span className='font-mukta text-sm'> Cash on delivery <br /> Pay with cash upon delivery. <br /> <br /><span className='text-sm font-light'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy</span></span>
              </div>

              <button className='text-white text-sm bg-[#333333] hover:bg-[#bb7b1c] w-[100%] h-14 mb-2 mt-4 font-mukta transition delay-200 ease-out' >PLACE ORDER</button>



            </Col>
          </Row>

        </form>
      </Container>















    </div>
  )
}

export default Checkout