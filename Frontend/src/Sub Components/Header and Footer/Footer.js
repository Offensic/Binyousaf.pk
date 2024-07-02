import React, {useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Footer() {

  const notallowedchr = ", ; :{}[]()$*&^%$#!-+=<>/`~_''";
  const Singupref = useRef()
  
  function Singup(){

   const email =  Singupref.current.value;

   if(notallowedchr.split('').some((char) => email.includes(char) ) || email.length < 8 || email.length > 18 || !email.includes('@')){

    
    toast.success("Email is not valid",{

      pauseOnHover: false,
      autoClose: 2000,
      position: 'top-center',
      closeOnClick: true,
      theme: 'dark'

    })
    

   }

   else{

    toast.success("Successfull Subsribe Newsletter",{

      pauseOnHover: false,
      autoClose: 2000,
      position: 'top-center',
      closeOnClick: true,
      theme: 'colored'

    })
    
   }
    


  }
  return (
    <div>
      <Container fluid className='bg-[#333333] '>
        <Row className='flex justify-between sm:flex-column xs:flex-column ' style={{ padding: 'clamp(1rem, 5vw, 4rem)'}}>
          <Col xl={5} lg={5} md={5} sm={4} xs={12} className='p-3' >
            <h2 className=' text-light lg:text-lg xl:text-lg md:text-base sm:text-base text-base font-sans tracking-tight'>Subscibe receive Moren News</h2> <hr className='bg-light text-white' />
            <div className='mt-[41px]'>
              <input className='w-[78%] h-[58px] bg-[#444444] text-light focus:outline-none placeholder-[#fff] placeholder:text-lime-50  p-2' type="Email" placeholder='Email' ref={Singupref} /><button className='w-[22%] h-[58px] bg-[#222222] text-[white] hover:text-[#bb7b1c] focus:outline-none hover:bg-black xl:text-base lg:text-base sm:text-xs  transition delay-75 ease-out' onClick={() => Singup()} >Sing Up</button>
            </div>
          </Col>

          <Col xl={3} lg={3} md={3} sm={4} xs={12} className='p-3 sm:p-0 xs:p-0'>
            <h2 className='text-light lg:text-lg xl:text-lg md:text- sm:text-base text-base font-sans tracking-tight'>Help</h2>
            <hr className='bg-light text-white' />
            <div className='d-flex justify-content-between flex-row md:flex-column sm:flex-column text-white text-sm sm:text-sm mt-[41px] '>
              <NavLink to='/shipping'><span className='sm:text-sm text-sm hover:text-[#bb7b1c] text-[white] transition delay-75 ease-out'>Shipping</span>  </NavLink><NavLink to='/contact-us'><span className='sm:text-sm text-sm hover:text-[#bb7b1c] text-[white] transition delay-75 ease-out'>Contact Us</span></NavLink>
            </div> <br />
            <NavLink to='/return-exchange'><span className='text-[white] sm:text-sm text-sm hover:text-[#bb7b1c] transition delay-75 ease-out'>Return/Exchange</span></NavLink>
            </Col>

          <Col xl={3} lg={3} md={3} sm={4} xs={12} className='p-3 sm:p-0 xs:p-0' >
            <h2 className='text-light lg:text-lg xl:text-lg md:text-sm sm:text-base text-base font-sans tracking-tight'>Explore</h2><hr className='bg-light text-white' />
            <div className='mt-[41px]'>
              <NavLink to='/about-us'><span className='sm:text-sm text-sm hover:text-[#bb7b1c] text-[white] transition delay-75 ease-out'>About Us </span><br /> <br /></NavLink>
              <NavLink to='/product-category/Boski'><span className='sm:text-sm text-sm hover:text-[#bb7b1c] text-[white] transition delay-75 ease-out'>Get the Look</span></NavLink>
            </div>

          </Col>

        </Row>

        <Row>
          <Col xl={12} lg={12} sm={12} md={12} xs={12}  className='bg-[#222222] w-[100%] h-[60px] d-flex justify-content-center align-items-center gap-5'>
            <i className="fa-brands fs-5.5 text-[white]  fa-facebook-f hover:text-[#bb7b1c]"></i>
            <i className="fa-brands fs-5 text-[white] hover:text-[#bb7b1c] fa-instagram"></i></Col>
        </Row>
      </Container>

{/* Whatsapp Contact us Page */}
      <div className="d-flex justify-end fixed" style={{ bottom: '25px', right: '25px' }}>

        <div className='mt-4 rounded-full'>
          <div className='w-24 h-6 mr-1 bg-white rounded text-center'>Contact Us</div>
        </div>

        <div className='circle d-flex justify-center align-items-center bg-green-400  rounded-full w-[50px] h-[50px]'>
        <a href="https://wa.me/+923084602122" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp fs-2 text-white" aria-hidden="true"></i>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer