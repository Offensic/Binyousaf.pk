import React, { useEffect } from 'react'
import '../App.css';
// import Header from '../Sub Components/Header';
// import Footer from '../Sub Components/Footer';

import Slider from '../Sub Components/Home Component/Slider';
import Grid from '../Sub Components/Home Component/Grid';
import Newslatter from '../Sub Components/Home Component/Newslatter';
import axios from 'axios';




function Home() {


    useEffect(() => {

        axios.get(`https://api.ipify.org/`).then(response => {

            var UserIpAddress = response.data
            localStorage.setItem('Ip', UserIpAddress)

            axios.post(`${process.env.REACT_APP_Backend_URL}user/Ipaddress`, { UserIpAddress })

        }).catch(err => console.log(err))


    }, [])


    return (
        <div className='overflow-hidden relative'>
            {/* Disclaimer Note: */}
            <div className="w-[250px] text-white bg-black px-3 py-4 z-[1000] fixed right-5 bottom-10 rounded-md">
                <p>Note: 👇</p>
                <p className="text-sm tracking-wide text-white ">
                    This site is a cloned project for showcasing my skills.
                    <a href="https://ochi.design/" target="_blank" className="text-white  cursor-pointer hover:text-orange-300">
                        Visit the original site
                    </a>
                </p>
            </div>

            {/* < Header /> */}
            <Slider />
            <Grid />
            <Newslatter />
            {/* < Footer /> */}



        </div>
    )
}

export default Home