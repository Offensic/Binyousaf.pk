import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css';
import { useRef, useState } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Importing the loader
import Loader from '../MoreComponent/Loader2';


function Aboutus() {
    // ------------------------------------------------------------------ SUbmitdata function and  State for Contact form,
    const [username, setusername] = useState('');
    const [useremail, setuseremail] = useState('');
    const [usernumber, setusernumber] = useState('');
    const [usermessage, setusermessage] = useState('');
    // State for the loader
    const [loader, setloader] = useState(null)



    function Submitdata(e) {
        e.preventDefault();

        setloader(true)
        axios.post(`${process.env.REACT_APP_Backend_URL}user/Contactus`, { username, useremail, usernumber, usermessage })

            .then((response) => {

                if (response.data === 'Success') {

                    toast.success("Thanks for Contact us 🚀 ", { theme: 'colored', autoClose: 2000, pauseOnHover: false })

                    setusername('');
                    setuseremail('');
                    setusernumber('');
                    setusermessage('');

                    setloader(false)

                } else {

                    toast.info("Message is not Send 🤕", { theme: 'colored', autoClose: 2000, pauseOnHover: false })
                    setloader(false)

                }
            })
            .catch(error => {

                toast.error("Failed to Submit Form 😴", { theme: 'dark', autoClose: 2000, pauseOnHover: false })
                setloader(false)


            })


    }




    // ------------------------------------------------------------------- useref and Function for the Change Video and image
    const videoRef = useRef(null)
    const imgeRef = useRef(null);


    setTimeout(() => {

        const newsrc = 'Logo video2.mp4'
        videoRef.current.src = newsrc;
        videoRef.current.className = 'mix-blend-overlay'


        const newimg = 'Logo Straight.svg';
        imgeRef.current.src = newimg

        imgeRef.current.className = 'mix-blend-overlay '
    
        


    }, 80000)

    return (
        <div>

            {loader ? (

                <Loader/>

            ) : (


                <div>
                    <div className='container1  mt-28 mb-20 bg-dark w-[100vw] h-[80vh]'>
                        <div className='box1 d-flex justify-center items-center' >
                            <video src="Logo video1.mp4" className='mix-blend-screen' autoPlay loop ref={videoRef}></video>
                            <img src="Logo White.svg" className='mix-blend-screen' alt="" ref={imgeRef} />
                        </div>
                    </div>

                    <Container fluid>
                        <Row>

                            <Col xl={6} lg={6} md={6} xm={12} >
                                <div className='d-flex justify-center items-center pt-20 sm:pt-0 sm:pb-0 pb-5 sm:w-full'>
                                    <img className='' src="https://images.unsplash.com/photo-1566070143658-523a24797109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                </div>
                            </Col>

                            <Col xl={6} lg={6} md={6} xm={12} className='' style={{ paddingRight: 'clamp(5px, 5vw, 200px)' }} >

                                <h2 className='text-[#383838] font-RussoOne font-bold text-3xl'>Welcome to <br /> Bin Yousaf Online Store</h2>

                                <h5 className='mt-4 text-[18px] text-[#444444] font-sans  font-normal leading-8'>With over 30 years of experience in the textile sector, producing fabric that is rich in quality and craftwork, BinYousaf has successfully ventured into the retail sector by establishing itself as a high-end, fast fashion Men’s wear brand.</h5>

                                <h5 className='mt-4 text-[18px] text-[#444444] font-sans font-normal leading-8'>Staying true to the name of the brand, BinYousaf focuses on producing apparel that is fashionable, stylish and timeless – by introducing outfits that have trendy silhouettes and are majorly made of embroidered and traditionally crafted fabric. Catering to a wide set of audience, by launching various ranges throughout the year, BinYousaf manages to design clothes that are unique, effortless and perfect for every event.</h5>

                                <h5 className='mt-4 text-[18px] text-[#444444] font-sans font-normal leading-8'>Fusing eastern, cultural artwork with contemporary style of art, the brand fashions clothes that are meant to be worn by modern men of every age and kind. Keeping this in mind, while accepting and promoting the beauty and individuality of each men, their age, size and aesthetics. </h5>

                                <h5 className='mt-4 text-[18px] text-[#444444] font-sans font-normal leading-8'>BinYousaf is a High End Luxury Fabric Brand, and and specializes in Boski, Lawn, Khaddar and cotton formals and also cater seasons essentials including Swiss and Velvet.</h5>

                                <h5 className='mt-4 text-[18px] text-[#444444] font-sans font-normal leading-8'>So for every season, for every occasion, we have got you covered!</h5>
                            </Col>
                        </Row>
                    </Container>


                    <h2 className='text-[#383838]  text-center text-4xl font-RussoOne mt-20 mb-14'>Our Partners</h2>

                    <div className='w-full'>
                        <img className='w-full h-56' src="partnergrey.svg" alt="" />
                    </div>


                    <div className='w-full relative'>


                        <div className=' top-[100px] left-0 w-full h-full'>

                            <Container fluid >
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12} className='bg-[#bb7b1c]'>

                                        <img src="Untitled design.svg" alt="" className='w-full h-full' />
                                    </Col>

                                    <Col xl={6} lg={6} md={6} sm={12} className=' d-flex justify-center items-center flex-col w-full  bg-[#bb7b1c] p-5'>



                                        <form onSubmit={(e) => Submitdata(e)} method='POST'>
                                            <div>

                                                <input type="text" name='name' placeholder='Name*' className='w-full mt-4 h-[60px] text-light focus:outline-none border-b-2 border-gray-100 bg-transparent placeholder-gray-100 pl-[15px]' value={username} required autoComplete='off' onChange={(e) => setusername(e.target.value)} />
                                                <input type="email" name='email' placeholder='Email*' className='w-full mt-4 h-[60px] text-light focus:outline-none border-b-2 border-gray-100 bg-transparent placeholder-gray-100 pl-[15px]' value={useremail} required autoComplete='off' onChange={(e) => setuseremail(e.target.value)} />
                                                <input type="number" name='phonenumber' placeholder='Phone Number' className='w-full mt-4 h-[60px] text-light focus:outline-none border-b-2 border-gray-100 bg-transparent placeholder-gray-100 pl-[15px]' value={usernumber} autoComplete='off' onChange={(e) => setusernumber(e.target.value)} />
                                                <textarea type='textarea' name="message" id="" rows="6" placeholder='How i can help you? ' className='mt-4 w-full text-light  bg-transparent focus:outline-none border-b-2 border-gray-100 placeholder-gray-100 pl-[15px]' value={usermessage} autoComplete='off' onChange={(e) => setusermessage(e.target.value)}></textarea>

                                                <div className='w-full d-flex justify-center mt-4'>
                                                    <button className='bg-[#444444] text-[white] w-26 p-3 mt-1 hover:bg-[#ffff] hover:text-[black] transition delay-200 ease-out'>Send Message</button>
                                                </div>
                                            </div>

                                        </form>



                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Aboutus