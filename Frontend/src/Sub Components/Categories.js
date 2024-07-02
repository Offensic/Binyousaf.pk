import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';

import Product from './Product Component/Product'
import Loader from './MoreComponent/Loader1';

import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CategoryContext = createContext();



function Categories() {

  const { categoryparam } = useParams()
  const [Category, setCategory] = useState([]);
  const [loader, setloader] = useState(true)


  useEffect(() => {

    axios.get(`${process.env.REACT_APP_Backend_URL}category/${categoryparam}`).then(res => {

      setCategory(res.data)
      setloader(false)
    })
      .catch(err => { console.log("Failed to get Product to the server" + err) })



  }, [categoryparam])


  return (
    <div>

      <Container fluid className='mt-20'>
        <Row >
          <Col lg={3} xl={3} md={3} sm={12} xs={12} className='bg-white text-dark order-last order-md-first'>
            <div className="product-name mt-3 xs:m-5 md:m-10 lg:m-20"> <h2 className='text-xl font-RussoOne font-sm'>Categories</h2> <br />
              <br />
              <NavLink to='/product-category/Men' className='text-[black]  hover:text-[#bb7b1c]'>Men</NavLink><br /><br />
              <NavLink to='/product-category/Boski' className='text-[black]  hover:text-[#bb7b1c]'>Boski</NavLink><br /><br />
              <NavLink to='/product-category/Washwear' className='text-[black]  hover:text-[#bb7b1c]'>Wash & Wear</NavLink><br /><br />
              <NavLink to='/product-category/Kurta' className='text-[black]  hover:text-[#bb7b1c]'>Kurta</NavLink><br /><br />
              <NavLink to='/product-category/Menshawal' className='text-[black]  hover:text-[#bb7b1c]'>Men Shawl</NavLink><br /><br />
              <NavLink to='/product-category/Cotton' className='text-[black]  hover:text-[#bb7b1c]'>Cotton</NavLink><br /><br />
              <NavLink to='/product-category/Karandi' className='text-[black]  hover:text-[#bb7b1c]'>Karandi</NavLink><br /><br />

            </div>
          </Col>

          <Col xl={9} lg={9} sm={12} md={9} xs={12} className='mb-24' >
            <Container>
              <Row>

                {loader ? (


                  <Loader />



                ) :

                  Category.length >= 1 ? (
                    Category.map(item => (
                      <Col xl={4} lg={4} md={6} sm={6} xs={12} style={{ padding: 'clamp(10px, 2vw, 25px)', }} key={item._id}  >

                        <div className='relative d-flex justify-between flex-row'>

                          <div className='absolute w-full text-end p-2'>
                            <span className='bg-[#8ebb25] text-light   py-1 px-3 text-xs rounded-3xl'  >Sale!</span>
                          </div>


                          <NavLink to={item.id} className='Mainimage'>
                            <img src={item.path}  className='hover:contrast-[80%] ' alt="Image of product" />
                          </NavLink>




                          <div className='absolute w-full h-14 left-0 top-100  d-flex justify-center items-center iconbox'>
                            <div className='d-flex justify-around w-44 '>
                              <div className='text-base font-bold  text-white d-flex justify-center items-center font-mukta bg-[#3f3e3e] w-10 h-10 hover:bg-[#bb7b1c] transition delay-200 ease-out icon'>Buy</div>
                              <div className='text-base  text-white d-flex justify-center items-center bg-[#3f3e3e] w-10 h-10 hover:bg-[#bb7b1c] transition delay-200 ease-out icon'><i className="bi bi-zoom-in"></i></div>
                              <div className='text-base  text-white d-flex justify-center items-center bg-[#3f3e3e] w-10 h-10 hover:bg-[#bb7b1c] transition delay-200 ease-out icon'><i className="bi bi-heart"></i></div>
                              <div className='text-base  text-white d-flex justify-center items-center bg-[#3f3e3e] w-10 h-10 hover:bg-[#bb7b1c] transition delay-200 ease-out icon'><i className="bi bi-arrows-angle-contract"></i></div>
                            </div>
                          </div>

                        </div>

                        <h3 className='text-center pt-2 ' style={{ fontSize: 'clamp(10px, 3vw, 18px)' }}> <NavLink to={item.id} className='text-[#444444]  font-medium	font-RussoOne hover:text-[#bb7b1c]'>{item.title}</NavLink><br />
                          <del className='text-gray-500 text-xs font-normal'>{item.offprice}</del>
                          &nbsp;<font id="price" className='text-yellow-700 text-base font-medium'>{item.price}</font>
                        </h3>



                      </Col>

                    ))

                  ) :

                    <Col className='pt-4 p-[70px] items-center'>
                      <div className='w-[100%] bg-[#eeeff2] h-25px] d-flex justify-content-start pt-2' >
                        <p className='text-sm'>👀 &nbsp; No product were found matching your selection</p>
                      </div>
                    </Col>

                }

              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categories





