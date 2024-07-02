import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (

    <div className=' pl-1.5 pr-1.5 m-0 pt-0'>

      <Carousel className='m-0 p-0'>
        <Carousel.Item>
          <img
            className="d-block w-100" src="Main pic.jpeg" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="asset 9.jpeg" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="asset 7.jpeg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

    
    </div>
  );
}

export default Slider;