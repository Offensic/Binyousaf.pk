import React from 'react'
import { Link } from 'react-router-dom'


function pageNotFound() {
    return (
        <div>

            <div className='h-[100vh] w-[100%] d-flex justify-center flex-row mt-32' >

                <div className='d-flex justify-center flex row w-[700px]'>
                    <img src="page404.svg" alt=""  />

                    <div className='d-flex justify-center items-center flex-col'>
                        <h3 className='text-[#444444] font-AbrilFatface font-extrabold ' style={{ fontSize: 'clamp(30px, 4vw, 75px)' }}>Page Cannot</h3>
                        <h3 className='text-[#444444] font-AbrilFatface font-extrabold ' style={{ fontSize: 'clamp(30px, 4vw, 75px)' }}>Be Found !</h3>

                        <h6 className='text-[#444444] font-sans font-medium' style={{ fontSize: 'clamp(15px, 2vw,  20px)' }}>Sorry, This page not found</h6>

                        <Link to='/'><button className='w-[170px] h-14 text-sm mt-3 font-sans bg-[white] text-[black] hover:bg-[#bb7b1c] hover:text-[white] trasition delay-300 ease-in-out  border-black border-2 hover:border-0'>Back to Home</button></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default pageNotFound