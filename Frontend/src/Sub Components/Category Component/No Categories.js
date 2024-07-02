import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function NoCategories() {
    return (
        <div>
            <Container fluid className='mt-20'>
                <Row>
                    <Col lg={3} xl={3} md={3} sm={12} xs={12} className='bg-white text-dark'>
                        <div className="product-name m-5 mt-3"> <h2 className='text-xl font-RussoOne font-sm'>Categories</h2> <br />
                            <br />
                            <NavLink to='/product-category/Men' className='text-[black]  hover:text-[#bb7b1c]'>Men</NavLink><br /><br />
                            <NavLink to='/product-category/Boski' className='text-[black]  hover:text-[#bb7b1c]'>Boski</NavLink><br /><br />
                            <NavLink to='/product-category/Washwear' className='text-[black]  hover:text-[#bb7b1c]'>wash & wear </NavLink><br /><br />
                            <NavLink to='/product-category/Kurta' className='text-[black]  hover:text-[#bb7b1c]'>Kurta</NavLink><br /><br />
                            <NavLink to='/product-category/Menshawal' className='text-[black]  hover:text-[#bb7b1c]'>Men Shawal</NavLink><br /><br />
                            <NavLink to='/product-category/Cotton' className='text-[black]  hover:text-[#bb7b1c]'>Cotton</NavLink><br /><br />
                            <NavLink to='/product-category/karandi' className='text-[black]  hover:text-[#bb7b1c]'>Karandi</NavLink><br /><br />
                        </div>
                    </Col>

                    <Col xl={9} lg={9} sm={9} md={9} xs={9} >

                        <Row className='pt-4 p-[70px] items-center'>
                            <div className='w-[100%] bg-[#eeeff2] h-25px] d-flex justify-content-start pt-2' >
                                <p className='text-sm'>👀 &nbsp; No product were found matching your selection</p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default NoCategories