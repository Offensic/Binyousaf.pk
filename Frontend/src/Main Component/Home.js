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
        <div className='overflow-hidden'>

            {/* < Header /> */}
            <Slider />
            <Grid />
            <Newslatter />
            {/* < Footer /> */}



        </div>
    )
}

export default Home