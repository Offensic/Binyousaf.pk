import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Grid() {
    return (

        <div>

            <h1 className='text-center text-zinc-700 text-size-lg pt-5 mt-5 font-sans font-black tracking-wider'> MEN </h1>
            <p className='text-center text-[#c2a18a] font-sans'>COLLECTION 2023</p>

            <Container fluid='lg' className='d-flex  justify-content-center flex-column align-items-center' >
                <Row className='m-lg-3 m-xl-5 p-lg-3 p-xl-4 pt-0  mt-0'>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5'><Link to='/product-category/Boski'><img src="/assest/Home pages/Boski.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Boski</h4></Link></Col>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5'><Link to='/product-category/Washwear'><img src="/assest/Home pages/Wash & Wear.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Wash & Wear</h4></Link></Col>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5' ><Link to='/product-category/Kurta'><img src="/assest/Home pages/Kurta.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Kurta</h4></Link></Col>
                </Row>
                <Row className='m-lg-3 m-xl-5  p-lg-3 p-xl-4 pt-lg-0 pt-xl-0 mt-xl-0 mt-lg-0'>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5' ><Link to='/product-category/Menshawal'><img src="/assest/Home pages/Men Shawl.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Men Shawl</h4></Link></Col>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5' ><Link to='/product-category/Cotton'><img src="/assest/Home pages/Cotton.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Cotton</h4></Link></Col>
                    <Col lg={4} xl={4} md={4} sm={4} xs={12} className='m-xs-8 gap-5' ><Link to='/product-category/Karandi'><img src="/assest/Home pages/karandi.jpeg" alt="" /><h4 className="Clothe-brand text-[#999999] text-center text-xl font-sans">Karandi</h4></Link></Col>
                </Row>

            </Container>


        </div>
    );
}

export default Grid;