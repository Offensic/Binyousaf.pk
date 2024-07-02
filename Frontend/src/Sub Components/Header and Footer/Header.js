import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';



import { ContextAPI } from '../../ContextAPI/Context';



function Header(props) {

  const { SHOW, setSHOW } = useContext(ContextAPI)
  const handleCloseCartOffcanvas = () => setSHOW(false);
  const handleShowCartOffcanvas = () => setSHOW(true);

  const [cart, setcart] = useState()
  const [total, settotal] = useState()
  const [cartpdate, setcartpdate] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const NavbarRef = useRef();
  const NavbarIcons1 = useRef();
  const NavbarIcons2 = useRef();
  const NavbarIcons3 = useRef();
  const NavbarIcons4 = useRef();
  const NavbarIcons5 = useRef();

  const button1 = useRef();
  const button2 = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        NavbarRef.current.style.backgroundColor = 'white';
        NavbarRef.current.style.marginTop = '-40px';
        // NavbarRef.current.className = 'shadow-sm'
        button1.current.style.color = 'black';
        button2.current.style.color = 'black';
        NavbarIcons1.current.style.color = 'black';
        NavbarIcons2.current.style.color = 'black';
        NavbarIcons3.current.style.color = 'black';
        NavbarIcons4.current.style.color = 'black';
        NavbarIcons5.current.style.color = 'black';




      }

      else {
        NavbarRef.current.style.backgroundColor = 'transparent';
        NavbarRef.current.style.marginTop = '0px';
        // NavbarRef.current.className = 'shadow-none'
        button1.current.style.color = 'white';
        button2.current.style.color = 'white';
        NavbarIcons1.current.style.color = 'white';
        NavbarIcons2.current.style.color = 'white';
        NavbarIcons3.current.style.color = 'white';
        NavbarIcons4.current.style.color = 'white';
        NavbarIcons5.current.style.color = 'white';



      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {

    const cartItem = JSON.parse(localStorage.getItem('Cart'))

    if (cartItem) {
      setcart(cartItem)
      const multiply_quanity_and_price = cartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
      let sum = 0;
      multiply_quanity_and_price.forEach(total => sum += total)
      settotal(sum)
      setcartpdate(false)
    }



  }, [cartpdate])

  const CrossCart = useRef()
  function DeletCart(item) {


    setTimeout(() => {

      const FilterDeleteCart = cart.filter(items => items.id !== item.id)
      const InsertICart = localStorage.setItem("Cart", JSON.stringify(FilterDeleteCart))
      setcart(FilterDeleteCart)
      setcartpdate(true)

    }, 500)


  }





  return (

    <div>
      <div className='bg-dark text-center h-[40px] d-flex justify-center'  ><span className='text-[white]  text-center text-lg font-Mukta hover:text-[#bb7b1c] p-2 pb-3 transition delay-300 ease-out cursor-pointer' style={{ fontSize: 'clamp(8px, 3vw, 15px)' }}>FREE STANDARD DELIVERY WITH MIN. SPEND OF $60</span></div>

      <Navbar className='d-flex justify-content-between pt-0 text-[white] z-10 w-full' style={{ position: 'fixed', padding: 'clamp(10px, 5vw, 50px)' }} ref={NavbarRef}>
        <div className='d-flex justify-center'>
          <span className='mt-0.5 p-1 text-[white] font-medium hidden sm:block' ref={button1}>Menu</span><button onClick={handleShow}  ><i className="bi fs-3 bi-list-ul font-bold text-[white]" ref={button2} ></i></button>
        </div>

        <Offcanvas show={show} onHide={handleClose} {...props} className='bg-dark'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="font-mukta d-flex flex-col">
              <NavLink className='text-[white] p-5 pb-0 text-[1.2rem] hover:text-[#bb7b1c]' to='/'>HOME</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Boski'>BOSKI</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Washwear'>WASH & WEAR</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Kurta'>KURTA</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Menshawal'>MEN SHAWL</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Cotton'>COTTON</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/product-category/Karandi'>KARANDI</NavLink>
              <NavLink className='text-[white] p-5 pb-0 pt-4 text-[1.2rem] hover:text-[#bb7b1c] transition delay-150 ease-out' to='/contact-us'>CONTACT US</NavLink>





              <h5 className='p-5 mt-10 pb-0 text-[1.2rem]'>{process.env.REACT_APP_OWNER_NAME}</h5>
            </Nav>

          </Offcanvas.Body>
        </Offcanvas>

        {/* Logo */}
        <div className='ml-[70px] sm:ml-[0px]'>
          <img src="/assest/Home pages/Logo.png" alt="" style={{ width: 'clamp(70px, 10vw, 100px)' }} />
        </div>

        {/* Four Icons */}
        <div className='p-2'>
          <button><a href="#" ref={NavbarIcons1} ><i className='bx bx-search hover:text-[#bb7b1c] sm:text-[1.4rem] text-[1.3rem] transition delay-100 ease'></i></a></button>
          <button><a href="#" ref={NavbarIcons2} ><i className='bx bxs-heart hover:text-[#bb7b1c] sm:text-[1.4rem] text-[1.3rem] transition delay-100 ease' ></i></a></button>
          <button onClick={() => handleShowCartOffcanvas()}><a href="#" ref={NavbarIcons3} ><i className='cartIcon bx bx-cart-add hover:text-[#bb7b1c] sm:text-[1.4rem] text-[1.3rem] transition delay-100 ease'></i></a> </button>
          <button ><a target='_blank' href="https://www.facebook.com/binyousafclothing" ref={NavbarIcons4} ><i className='bx bxl-facebook  hover:text-[#bb7b1c] sm:text-[1.4rem] text-[1.3rem] transition delay-100 ease' ></i></a></button>

          <button><a target='_blank' href="https://www.instagram.com/binyousafclothing/" ref={NavbarIcons5} ><i className='bx bxl-instagram  hover:text-[#bb7b1c] sm:text-[1.4rem] text-[1.3rem] transition delay-100 ease' ></i></a></button>
        </div>


        <Offcanvas show={SHOW} onHide={handleCloseCartOffcanvas} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="buy-offcanvas" style={{ padding: 'clamp(5px, 6vw, 20px)' }}>
              <h3 className='text-[#333333] font-RussoOne font-light' style={{ fontSize: 'clamp(1.2em, 2vw, 1.5em)' }}>Shopping Cart</h3>


              <div className="overflow-auto h-[38vh] scrollbar-hidden w-full">
                {cart && cart.length > 0 ? (
                  cart.map((items) => {
                    return (
                      <div className="d-flex justify-between mt-4 h-[96px]" ref={CrossCart}>

                        <div className="d-flex justify-between w-[180px]" >
                          <div className="w-16 h-14"><Link to="#"><img src={`${process.env.REACT_APP_Image_Url}${items.name}`} alt="" /></Link>{" "}</div>

                          <div className="content">
                            <Link to="/blackboski" className="text-[black] hover:text-[#bb7b1c]"><span className="text-sm">{items.title}</span> </Link><br />
                            <span className="text-sm">  {items.quantity} ×{items.price} </span>
                          </div>

                        </div>

                        <div className="text-[black] hover:text-[#bb7b1c] cursor-pointer" onClick={() => DeletCart(items)}>
                          <span> ×</span>
                        </div>
                      </div>

                    );
                  })


                ) : (
                  <div >
                    <div>No items in cart</div>
                    <h2 className='hover:text-[red] text-[8vh] mt-32 text-center' ><i className="bi bi-emoji-neutral-fill"></i></h2>

                  </div>

                )}

                {/* {props.price1 && !isNaN(props.price1) ? count * props.price1 : 0} */}
              </div>



              {/* {cart && cart.length > 1 ? ( */}
              <div>
                <div className='d-flex justify-between align-items-center pt-16'>
                  <span className='text-base font-sans font-bold '>Subtotal:</span>
                  <span className='text-base font-sans font-medium'> Rs, {total}</span>
                </div>

                <div className="buttons mt-4">
                  <Link to='/products/cart'><button className='text-white text-sm bg-[#333333] hover:bg-[#bb7b1c] w-[100%] h-14 mb-2 transition delay-200 ease-out'>View cart</button></Link>
                  <Link to='/products/checkout'> <button className='text-white text-sm bg-[#333333] hover:bg-[#bb7b1c] w-[100%] h-14 transition delay-200 ease-out'>Checkout</button></Link>
                </div>
              </div>

              {/* ) :  */}
              {/* null */}
              {/* } */}
            </div>
          </Offcanvas.Body>
        </Offcanvas>


      </Navbar>


    </div>
  );
}

export default Header