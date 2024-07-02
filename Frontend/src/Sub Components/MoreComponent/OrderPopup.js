import React from 'react'
import { useNavigate } from 'react-router-dom';




function OrderPopup({ show, setshow }) {



    const navigate = useNavigate()
    function ChangeLocation() {

        
        navigate('/')
        

    }


    return (
        <div className='bg-[white]' >

            <div className='d-flex justify-center w-full h-full'>

                <div className=' fade-in-down w-[400px] h-[380px] bg-[white]  fixed z-50 shadow-lg mt-[-40px]  d-flex justify-center flex-col items-center p-3 rounded-lg' >
                    <span><i className="bi bi-check2-circle text-green text-[3.5rem] text-[#4bec4b] "></i></span>
                    <h2 className='text-dark font-mukta font-extrabold tracking-wider '>THANK YOU 🥳</h2>
                    <span className='font-sans text-dark '>For Choosing <span className='text-[black] hover:text-[#bb7b1c] transition delay-200 ease-out cursor-pointer'>Binyousaf.pk</span></span>
                    <span className='font-sans text-dark'>Your data will be save Buddy Dont worry <span><i className="bi bi-emoji-smile-upside-down-fill"></i></span> </span>

                    <button className='mt-5 text-[white] font-extrabold font-mukta bg-[#bb7b1c] hover:bg-[green] w-28 rounded-md shadow-md h-10 transition delay-200 ease-out hover:text-2xl' onClick={() => { setshow(false); ChangeLocation() }}>OK</button>
                </div>
            </div>



        </div>
    )
}

export default OrderPopup