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
            <div className="w-[250px] text-white bg-black px-3 py-2 z-[1000] fixed right-5 bottom-10 rounded-md">
                <p>Note: 👇</p>
                <p className="text-sm tracking-wide text-white ">
                    This site is a cloned project for showcasing my skills. Visit the original site
                    <a href='https://binyousaf.pk/' target="_blank" className="pl-1  cursor-pointer hover:text-orange-300">
                        Binyousaf.pk
                    </a>
                    <br />
                    <a href='https://www.linkedin.com/in/zia-been/' target="_blank" className="pl-1  cursor-pointer hover:text-orange-300">
                        Who made this !
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