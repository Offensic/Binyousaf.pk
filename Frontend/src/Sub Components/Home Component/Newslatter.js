import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

function Newslatter() {
  return (
    <div>
      <Container fluid className='mx-auto accordion-body flex-justify-center border-black mt-5 pt-5 mb-5 pb-5'>
        <Row className='mb-24'>
          <Col xl={3} lg={3} md={2} sm={1} xs={0}></Col>
          <Col xl={6} lg={6} md={8} sm={10} xs={12} ><h1 className='text-center text-[#333333] text-4xl font-sans font-bold tracking-[.17em]' style={{fontSize: 'clamp(25px, 5vw, 35px)'}}>NEWSLETTER</h1>

            <p className='text-center text-[15px] sm:text-base'>Subscribe our newsletter to get notify about discount and latest update. Don’t worry, we not < br/> spam!</p>


        
            <Form className='d-flex justify-content-center h-[80%] '>
             <input  className='w-[60%] h-[50%] focus:outline-none border-b-2 border-slate-200  placeholder-gray-500 font-normal' type="text" placeholder='Enter your email here' /><i className="bi bi-arrow-right fs-2 hover:text-[#bb7b1c]"  ></i>
             </Form>
          </Col>

          <Col xl={3} lg={3} md={2} sm={1} xs={0} ></Col>

        </Row>
      </Container>



    </div>
  )
}

export default Newslatter