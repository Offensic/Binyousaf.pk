import React, { useContext, useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Loader from '../MoreComponent/Loader2';


import axios from 'axios';
import _ from 'lodash';


import { ContextAPI } from '../../ContextAPI/Context';

function Product(props) {

    // ContextAPI for Setting the cart data
    const { cart, setcart } = useContext(ContextAPI);

    // State for Show on the React Boootstrap Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loader, setloader] = useState(true)


    // State for the Total and Quanity 
    const [count, setCount] = useState(1);
    const [total, settotal] = useState();

    function plus() {
        setCount(count + 1);
    }
    function minus() {

        if (count > 1) {
            setCount(count - 1);
        }
    }


    // Use param for the Category and product check inside the url and getting the data 
    // on the base of it from the Backend.
    const { categoryparam } = useParams();
    const { productid } = useParams();
    // State for the prodcut and Categroy data
    const [product, setproducts] = useState([]);
    const [category, setcategory] = useState([]);


    // -----------------------------------------------------  Axios Request for Product base on the id
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_Backend_URL}product/${productid}`).then(res => {
            setproducts(res.data)

        })
            .catch(err => { console.log("Failed to Get Each Product Data" + err) })

    }, [productid])


    // ------------------------------------------------------ Axios Request for the all Category
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_Backend_URL}category/${categoryparam}`).then(res => {
            setcategory(res.data)
            setloader(false)

        }).catch(err => { console.log("failed to get Catgegory") })


    }, [])

    // Filter the Category to show the 4 random object instead of Buy Now object
    const filterCategory = category.filter(items => items.id !== productid)
    const shuffledData = _.shuffle(filterCategory);
    const RandomCategory = shuffledData.slice(0, 4)



    const getimage = (item) => {
        window.open(`${process.env.REACT_APP_Image_Url}${item}`)

    }



    // ---------------------------------------------------------- Funcion for Add product in to the LocalStorage means Cart
    function AddtoCart(item) {
        const storeCart = JSON.parse(localStorage.getItem('Cart'))

        if (storeCart) {
            const FilterCart = storeCart.filter(storeCart => storeCart.id !== item.id)
            const updateCart = [...FilterCart, { ...item, quantity: count }]
            localStorage.setItem('Cart', JSON.stringify(updateCart))

            const CartItem = JSON.parse(localStorage.getItem('Cart'))
            setcart(CartItem)


            const multiply_quanity_and_price = CartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
            let sum = 0;
            multiply_quanity_and_price.forEach(total => sum += total)
            settotal(sum)

        }
        else {
            const insertcart = { ...item, quantity: count }
            localStorage.setItem('Cart', JSON.stringify([insertcart]))

            const CartItem = JSON.parse(localStorage.getItem('Cart'))
            setcart(CartItem)

            const multiply_quanity_and_price = CartItem.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
            let sum = 0;
            multiply_quanity_and_price.forEach(total => sum += total)
            settotal(sum)



        }
    }



    // ----------------------------------------------------------- Function for Deleting the cart
    const CrossCart = useRef()
    function DeletCart(item) {
        // CrossCart.current.classList.add('grayscale')
        // CrossCart.current.classList.add('bg-gray-300')

        setTimeout(() => {

            const FilterDeleteCart = cart.filter(items => items.id !== item.id)
            const InsertICart = localStorage.setItem("Cart", JSON.stringify(FilterDeleteCart))
            setcart(FilterDeleteCart)

            const multiply_quanity_and_price = FilterDeleteCart.map(item => item.quantity * item.price.replace(/[^0-9]/g, ''))
            let sum = 0;
            multiply_quanity_and_price.forEach(total => sum += total)
            settotal(sum)

            const CartItem = JSON.parse(localStorage.getItem('Cart'))
            setcart(CartItem)

        }, 500)

    }


    // ----------------------------------------------------------- Zoom Effect for Magnify Glass Try 3 Working Success 
    const imagezoom = useRef();
    const handleImageZoom = (event) => {
        const imgNode = imagezoom.current;
        const { left, top, width, height } = imgNode.getBoundingClientRect();
        const x = ((event.pageX - left) / width) * 100;
        const y = ((event.pageY - top) / height) * 100;
        imgNode.style.setProperty("--x", `${x}%`);
        imgNode.style.setProperty("--y", `${y}%`);
    };


    return (

        <div>


            {loader ? (


                <Loader />

            )

                : (
                    product.map((item) => (
                        <div key={item._id}>


                            <Container fluid style={{ padding: 'clamp(0px, 6vw , 80px)', paddingTop: '0px', paddingBottom: '0px' }} className='mt-20 relative' >
                                <Row>
                                    <Col lg={6} xl={6} md={12} sm={12} xs={12} className='image cursor-pointer'>


                                        <img src={item.path} alt='This is an image' onClick={() => getimage(item.name)} ref={imagezoom} onMouseMove={handleImageZoom} />

                                    </Col>

                                    <Col lg={6} xl={6} md={12} sm={12} xs={12} className='px-5 sticky '>
                                        <h1 className='text-[#333333] font-RussoOne ' style={{ fontSize: 'clamp(20px, 3vw , 30px)' }}>{item.title}</h1>
                                        <del className='text-gray-400 text-xl'>{item.offprice}</del> &nbsp; &nbsp;<font id="price" className='text-yellow-600 text-2xl font-medium'>{item.price}</font>
                                        <hr />

                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Fabric:  <span className='font-normal'>Boski – lavish Boski FALL | Plain | Wrinkle Free | Poly Viscose | Soft & Smooth</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Season: <span className='font-normal'> Tropical</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Length: <span className='font-normal'> 4 meters</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Width:  <span className='font-normal'> 56+ inches</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Warranty: <span className='font-normal'>7 days refund policy without any question.</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Design: <span className='font-normal'>Plain</span></li>
                                        <li type='circle' className='font-bold text-[#333333] leading-8'>Styles: <span className='font-normal'>Bright, Solid</span></li>
                                        <li type='circle'> <span className='font-normal leading-8'>Light Weight & Fall Finish</span></li>
                                        <li type='circle'> <span className='font-normal leading-8'>Easy exchange or return available</span></li>


                                        <div className='d-flex justify-between w-fit  mt-5' style={{ height: 'clamp(57px, 5vw, 62px)' }}>

                                            <div className='counter w-20  text-[#333333] d-flex justify-evenly align-items-center' style={{ border: '1px solid #bbbfbc' }} >
                                                <button><span id='minus' onClick={minus}>-</span></button>
                                                <button><span id='number'>{count}</span></button>
                                                <button><span id='plus' onClick={plus}>+</span></button>
                                            </div>


                                            <div className="ml-3 text-center d-flex justify-center items-center    bg-[#333333] text-[white] text-sm sm:text-base hover:bg-[#bb7b1c] transition delay-200 ease-out" style={{ width: 'clamp(135px, 15vw, 250px)' }} onClick={() => { handleShow(); AddtoCart(item) }}>Buy now</div>
                                        </div>

                                        <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title></Offcanvas.Title>
                                            </Offcanvas.Header>

                                            <Offcanvas.Body>
                                                <div className="buy-offcanvas" style={{ padding: 'clamp(5px, 6vw, 20px)' }}>
                                                    <h3 className='text-[#333333] font-RussoOne font-light' style={{ fontSize: 'clamp(1.2em, 2vw, 1.5em)' }}>Shopping Cart</h3>


                                                    <div className="overflow-auto h-[38vh] scrollbar-hidden w-full">
                                                        {cart && cart.length > 0 ? (
                                                            cart.map((item) => {
                                                                return (
                                                                    <div className="d-flex justify-between mt-4 h-[96px]" ref={CrossCart}>

                                                                        <div className="d-flex justify-between w-[180px]" >
                                                                            <div className="w-16 h-14"><Link to="#"><img  src={item.path} alt="image" /></Link>{" "}</div>

                                                                            <div className="content">
                                                                                <Link to="/blackboski" className="text-[black] hover:text-[#bb7b1c]"><span className="text-[15px] sm:text-base">{item.title}</span> </Link><br />
                                                                                <span className="text-sm">  {item.quantity} ×{item.price} </span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="text-[black] hover:text-[#bb7b1c] cursor-pointer" onClick={() => DeletCart(item)}>
                                                                            <span> ×</span>
                                                                        </div>
                                                                    </div>

                                                                );
                                                            })


                                                        ) : (<div>No items in cart</div>

                                                        )}

                                                        {/* {props.price1 && !isNaN(props.price1) ? count * props.price1 : 0} */}
                                                    </div>



                                                    <div className='d-flex justify-between align-items-center pt-16'>
                                                        <span className='text-base font-sans font-bold '>Subtotal:</span>
                                                        <span className='text-base font-sans font-medium'> Rs, {total}</span>
                                                    </div>

                                                    <div className="buttons mt-4">
                                                        <Link to='/products/cart'><button className='text-white text-sm bg-[#333333] hover:bg-[#bb7b1c] w-[100%] h-14 mb-2 transition delay-200 ease-out'>View cart</button></Link>
                                                        <Link to='/products/checkout'> <button className='text-white text-sm bg-[#333333] hover:bg-[#bb7b1c] w-[100%] h-14 transition delay-200 ease-out'>Checkout</button></Link>
                                                    </div>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>


                                        <div className='mt-4 two-icon'>
                                            <i className='bi bi-heart font-sans hover:text-[#bb7b1c]'></i>  <span className='text-xs hover:text-[#bb7b1c]'>ADD TO WISHLIST</span>  <i className="bi bi-arrow-left-right ml-4 font-serif hover:text-[#bb7b1c]"></i>   <span className='font-sans text-xs hover:text-[#bb7b1c]'>ADD TO COMPARE</span>
                                        </div>

                                        <br />
                                        <hr />
                                        <br />
                                        <br />
                                        <h6 className='text-sm font-sans text-[#444444]'>Category:  <Link to='/boski' className='text-[#444444]  hover:text-[#bb7b1c] text-sm'>{item.title}</Link> <hr /></h6>


                                        <div className="four-icon">
                                            <i className="fa-brands text-[#444444] fs-6 fa-facebook-f p-2 hover:text-[#bb871c]"></i>
                                            <i className="fa-brands text-[#444444] fs-6 fa-twitter p-2 hover:text-[#bb871c]"></i>
                                            <i className="fa-brands text-[#444444] fs-6 fa-linkedin-in p-2 hover:text-[#bb871c]"></i>
                                            <i className="fa-brands  text-[#444444] fs-6 fa-pinterest-p p-2 hover:text-[#bb871c]"></i>
                                        </div>
                                    </Col>
                                </Row>

                                <hr />

                                <Row className='mb-20'>
                                    <h1 className='text-center font-RussoOne text-3xl mt-5 mb-5'>Related Products</h1>

                                    {RandomCategory.length >= 1 ? (

                                        RandomCategory.map(item => (
                                            <Col lg={3} xl={3} md={6} sm={12} xs={12} className='hover:contrast-[80%] p-3' key={item._id}>
                                                <NavLink to={`/product/${item.id}`} >
                                                    <img alt='This is an image' src={item.path} className='hover:contrast-[80%]' />
                                                </NavLink>

                                                <h3 className='text-center pt-2 ' style={{ fontSize: 'clamp(10px, 3vw, 18px)' }}>
                                                    <span className='text-gray-800  font-medium	font-RussoOne'> <NavLink to={`/product/${item.id}`} className='hover:text-yellow-700  no-underline text-gray-800'>  {item.title}</NavLink></span><br />
                                                    <del className='text-gray-500 text-xs font-normal'>{item.offprice}</del>
                                                    &nbsp;<font id="price" className='text-yellow-700 text-base font-medium'>{item.price}</font>
                                                </h3>

                                            </Col>


                                        ))
                                    ) : (

                                        <div className='d-flex justify-center flex-col items-center'>
                                            <h2 className='hover:text-[red] text-[8vh]' ><i className="bi bi-emoji-neutral-fill"></i></h2>
                                            <Link to={`/product-category/Boski`}><button className='w-36 h-14 text-sm mt-3 font-sans bg-[white] text-[black] hover:bg-[#bb7b1c] hover:text-[white] trasition delay-300 ease-in-out  border-black border-2 hover:border-0'>Back to Home</button></Link>
                                        </div>

                                    )}
                                </Row>



                            </Container>

                        </div>

                    ))

                )
            }


        </div >
    );
}
export default Product









