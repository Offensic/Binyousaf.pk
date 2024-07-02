import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../MoreComponent/Loader2'

function Contactus() {

  const [username, setusername] = useState('');
  const [useremail, setuseremail] = useState('');
  const [usernumber, setusernumber] = useState('');
  const [usermessage, setusermessage] = useState('');

// State for the Loader 
const [loader, setloader] = useState(null)



  function Submitdata(e) {
    e.preventDefault();

    setloader(true)

    axios.post(`${process.env.REACT_APP_Backend_URL}user/Contactus`, { username, useremail, usernumber, usermessage })

      .then((response) => {

        if (response.data === 'Success') {

          toast.success("Thanks for Contact us 🚀", { theme: 'colored', autoClose: 2000, pauseOnHover: false })
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



  return (
    <div>


      {loader ? (

        <Loader />

        )
       : (
        <Container fluid  >
          <Row  className='mt-5' style={{ padding: 'clamp(2px, 5%, 150px)' }}>
            <Col lg={7} xl={7} md={8} sm={12} xs={12} style={{ padding: 'clamp(5px, 4%, 100px)', }}>

              <h4 className='font-medium font-RussoOne  text-[#444444]' style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>Contact us for any questions</h4>


              <form method='POST' onSubmit={(e) => Submitdata(e)}>
                <div>

                  <input type="text" placeholder='Name*' className='w-full mt-4 h-[60px] focus:outline-none border border-gray-400 placeholder-gray-600 pl-[15px]' value={username} required autoComplete='off' onChange={(e) => setusername(e.target.value)} />
                  <input type="email" placeholder='Email*' className='w-full mt-4 h-[60px] focus:outline-none border border-gray-400 placeholder-gray-600 pl-[15px]' value={useremail} required autoComplete='off' onChange={(e) => setuseremail(e.target.value)} />
                  <input type="number" placeholder='Phone Number' className='w-full mt-4 h-[60px] focus:outline-none border border-gray-400 placeholder-gray-600 pl-[15px]' value={usernumber} autoComplete='off' onChange={(e) => setusernumber(e.target.value)} />

                  <textarea type='textarea' name="textarea" id="" rows="6" placeholder='How i can help you? ' className='mt-4 w-full  focus:outline-none border border-gray-400 placeholder-gray-600 pl-[15px]' value={usermessage} autoComplete='off' required onChange={(e) => setusermessage(e.target.value)}></textarea>

                  <button className='bg-[#444444] text-light w-26 p-3 mt-1 hover:bg-[#bb7b1c] transition delay-100 ease-out'>Send Message</button>
                </div>

              </form>
            </Col>

            <Col  lg={5} xl={5} md={4} sm={12} xs={12} style={{ padding: 'clamp(5px, 4%, 100px)',}}>

              <h4 className='font-medium font-RussoOne  text-[#444444]' style={{ fontSize: 'clamp(16px, 4vw, 28px)' }}>Get info</h4>

              <i className="bi bi-geo-alt text-[#bb7b1c] text-[1.4rem]"></i> <span className='font-bold text-[#444444]'>&nbsp;Office 1</span>
              <p className='text-[#575757] ml-8'>96-a Butt plaza near Wazir market Lahore block <br /> Azam cloth market Lahore</p>


              <div className='mt-20'>
                <hr />
              </div>
              <Link to='/'><i className="bi bi-envelope text-[#bb7b1c] text-[1.4rem]"></i><span className='text-[#333333] hover:text-[#bb7b1c]'> &nbsp; binyousafclothing@gmail.com</span><br /></Link>
              <Link to='/'><i className="bi bi-telephone text-[#bb7b1c] text-[1.4rem]" ></i><span className='text-[#333333] hover:text-[#bb7b1c]'> &nbsp; 0304 4695551</span> </Link>
              <br />
              <br /><br />

              <div className='sm:w-[90px] w-[65px] d-flex justify-between' >

                <Link to="https://www.instagram.com/binyousafclothing/"><i className="fa-brands text-[1.5rem] text-[#444444]  fa-facebook-f hover:text-[#bb7b1c]"></i></Link>
                <Link to="https://www.facebook.com/binyousafclothing"><i className="fa-brands text-[1.6rem] text-[#444444]  fa-instagram hover:text-[#bb7b1c]"></i></Link>

              </div>

            </Col>
          </Row>
        </Container>

        )}
    </div>
  )
}

export default Contactus