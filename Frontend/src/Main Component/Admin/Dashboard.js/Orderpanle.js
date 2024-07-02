import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, Legend, CategoryScale, PointElement, LinearScale, Title, Filler } from 'chart.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(

    LineController, LineElement, Legend, CategoryScale, PointElement, LinearScale, Title, Filler

)





function Orderpanle() {

    // --------------------------------------------------------------------- States for Setting the data
    const [data, setdata] = useState('');
    const [title, settitle] = useState('');
    const [quantity, setquantity] = useState('');
    const [itemprice, setitemprice] = useState('');
    const [caetgory, setcategory] = useState('')
    const [ProductLength, setProductLength] = useState('0')
    const [Orderlength, setOrderlength] = useState('0')
    const [Totalsale, setTotalsale] = useState('0');
    const [Ip, setIpAddress] = useState('')

    // --------------------------------------------------------------------- State for setting the messages
    const [todaydate, settodayDate] = useState('');




    // -------------------------------------------------------------------- State for the line Graph for  setting it valeues
    const [chartData, setChartData] = useState({

        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', "Nov", 'Dec'],
        datasets: [
            {
                label: 'Sales Chart',
                // data: [0, 1200, 600, 90, 40, 50, 60, 70, 80, 90, 100],
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: '#52b788',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',

            }
        ]
    });


    // Chart Configuratin for the x and y axix values color
    const chartOptions = {
        scales: {
            y: {
                ticks: {
                    color: 'white',
                },
            },


            x: {

                ticks: {

                    color: 'white',
                }
            }


        },
    };

    // --------------------------------------------------------------- Uss Effect for getting a Ip Address  
    useEffect(() => {

        // Axios Request For Getting Ip Address
        axios.get(`${process.env.REACT_APP_Backend_URL}admin/get/ipaddress`, {

            withCredentials: true

        }).then(success => {
            console.log(success.data)
            setIpAddress(success.data.length)
        }

        )
            .catch(error => { console.log(error) })


    }, [])


    // ----------------------------------------------------------------- Axios Request to get the Order
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_Backend_URL}admin/user/getorder`, {

            withCredentials: true

        }).then(response => {
            setdata(response.data)

            // Calculating the  Order
            setOrderlength(response.data.length)


            // Making a Total Sales Price of Order 
            const OrderData = response.data;
            let sum = 0;
            const Calculating_A_price = OrderData.map(item => item.total)
            Calculating_A_price.forEach(number => sum += number)
            setTotalsale(sum)



            //--------------------------------------------------------  Calution a sales on the base of month on show on the graph
            const CheckMonth = response.data
            const today = new Date()
            const year = today.getFullYear();


            // Calution for the january
            const janfilter = CheckMonth.filter(item => item.month === 1 && item.year === year)
            const jantotal = janfilter.map(item => item.total);
            let janSum = 0
            jantotal.forEach(number => janSum += number);



            // caluculaton for the Ferbuary
            const Febfilter = CheckMonth.filter(item => item.month === 2 && item.year === year);
            const Febtotal = Febfilter.map(item => item.total);
            let FebSum = 0
            Febtotal.forEach(number => FebSum += number);



            // Caulculation for the March
            const Marchfilter = CheckMonth.filter(item => item.month === 3 && item.year === year);
            const Marchtotal = Marchfilter.map(item => item.total);
            let MarchSum = 0
            Marchtotal.forEach(number => MarchSum += number);




            // Caulculation for the April
            const Aprilfilter = CheckMonth.filter(item => item.month === 4 && item.year === year);
            const Apriltotal = Aprilfilter.map(item => item.total);
            let AprilSum = 0
            Apriltotal.forEach(number => AprilSum += number);




            // Caulculation for the May
            const Mayfilter = CheckMonth.filter(item => item.month === 5 && item.year === year)
            const Maytotal = Mayfilter.map(item => item.total);
            let MaySum = 0
            Maytotal.forEach(number => MaySum += number);



            //  Calculation for the June 
            const Junefilter = CheckMonth.filter(item => item.month === 6 && item.year === year);
            const JuneTotal = Junefilter.map(item => item.total);
            let JuneSum = 0;
            JuneTotal.forEach(number => JuneSum += number);



            // Calculation for the July 
            const JulyFilter = CheckMonth.filter(item => item.month === 7 && item.year === year);
            const JulyTotal = JulyFilter.map(item => item.total);
            let Julysum = 0;
            JulyTotal.forEach(number => Julysum += number);


            // Calculation for the August 
            const Augustfilter = CheckMonth.filter(item => item.month === 8 && item.year === year);
            const AugustTotal = Augustfilter.map(item => item.total);
            let AugustSum = 0;
            AugustTotal.forEach(number => AugustSum += number);


            // Calculation for the Septemeber
            const SeptemeberFilter = CheckMonth.filter(item => item.month === 9 && item.year === year);
            const SeptemeberTotal = SeptemeberFilter.map(item => item.total);
            let SeptemeberSum = 0;
            SeptemeberTotal.forEach(number => SeptemeberSum += number);

            // Calculation for Octuber
            const OctuberFilter = CheckMonth.filter(item => item.month === 10 && item.year === year);
            const OctuberTotal = OctuberFilter.map(item => item.total);
            let OctuberSum = 0;
            OctuberTotal.forEach(number => OctuberSum += number);


            // Calculation for November 
            const NovemberFilter = CheckMonth.filter(item => item.month === 11 && item.year === year)
            const NovemberTotal = NovemberFilter.map(item => item.total)
            let NovemberSum = 0;
            NovemberTotal.forEach(number => NovemberSum += number);


            // Calclation for December
            const DecemberFilter = CheckMonth.filter(item => item.month === 12 && item.year === year)
            const DecemberTotal = DecemberFilter.map(item => item.total);
            let DecemberSum = 0;
            DecemberTotal.forEach(number => DecemberSum += number);




            // Updating the graph value with month sales
            setChartData({
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', "Nov", 'Dec'],
                datasets: [
                    {
                        label: 'Sales Chart',
                        data: [janSum, FebSum, MarchSum, AprilSum, MaySum, JuneSum, Julysum, AugustSum, SeptemeberSum, OctuberSum, NovemberSum, DecemberSum],
                        backgroundColor: 'white',
                        borderColor: '#52b788',
                        tension: 0.5,
                        fill: true,
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'white',
                        pointHoverBorderColor: 'white',
                        pointHoverBackgroundColor: 'black'
                    }
                ]
            })


            // Checkig the date


        })
            .catch(err => {
                console.log("Failed to get Orders Data" + err)
            })



    }, [])



    // ------------------------------------------------------------------ Axios Request for All Category For Calulating
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_Backend_URL}admin/product/Category`, {

            withCredentials: true

        }).then(response => {
            setcategory(response.data)
            setProductLength(response.data.length);
        })

            .catch(err => { console.log("Failed to get ALl product" + err) })

    }, [setcategory])





    // ----------------------------------------------------------------------- Calulator 
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("");
        }
    };

    const handleClear = () => {
        setInput("");
    };



    // ---------------------------------------------------------- function for Deleting the Order 
    function DelteOrder(id) {

        axios.delete(`${process.env.REACT_APP_Backend_URL}admin/user/deleteorder/` + id, {
            withCredentials: true

        }).then((respnse) => {

            if (respnse.data == 'Order Successfully Delted') {
                toast.success('Order Deleted 👋', { theme: 'dark', autoClose: 2000, pauseOnHover: false, })
            }

            else {
                toast.error("Failed to Deleted", { theme: 'dark', autoClose: 2000, pauseOnHover: false })
            }
        })
            .catch(err => { toast.error('Failed to Send Data to the server') })
    }

    const navigate = useNavigate()
    function Logout() {

        localStorage.removeItem('token')

        toast.success("Successfully Logout 👋", {

            closeOnClick: true,
            pauseOnHover: false,
            autoClose: 2000,


        })

        navigate('/login')
    }


    return (
        <div className='p-2 mt-4'>
            <div className='h-[80vh] w-full bg-[#081c15] rounded-md  mt-4 shadow-2xl p-2 d-flex justify-start'>


                {/* Navbar */}
                <div className='w-20 h-full rounded-md shadow-2xl bg-[#b7e4c7] relative' >

                    <div className='h-[70%] d-flex justify-around items-center flex-col' >

                        <div className='m-1 p-1  h-18 rounded-full d-flex justify-around flex-col text-[white]   hover:bg-[#ced4da] hover:text-[black] transition delay-100 ease-out '>
                            <img src="/assest/Dashboard/avatar_12.jpg" alt="" className='rounded-full' />
                        </div>


                        <a href="#graph"> <div className='text-[white]  m-1 shadow-md rounded-md  text-center w-14 h-14 d-flex justify-center flex-col cursor-pointer hover:bg-[#081c15] transition delay-200 ease-out '>
                            <button> <i className=" bi bi-graph-up-arrow sm:text-[1.2rem] text-[1.1rem]"></i></button>
                            <h6 className='text-center w-full  text-sm'>Graph</h6>
                        </div>
                        </a>


                        <a href="#sales"> <div className='text-[white]  m-1 shadow-md rounded-md text-center w-14 h-14 d-flex justify-center flex-col cursor-pointer hover:bg-[#081c15] hover:text-[white]  transition delay-100 ease-out '>
                            <button><i className="bi bi-currency-dollar sm:text-[1.2rem] text-[1.1rem]"></i></button>
                            <h6 className='text-center w-full  sm:text-sm text-[12px]'>Sales </h6>
                        </div>
                        </a>

                        <a href="#order"> <div className='text-[white] m-1 shadow-md rounded-md text-center w-14 h-14 d-flex justify-center flex-col cursor-pointer hover:bg-[#081c15] hover:text-[white]  transition delay-100 ease-out '>
                            <button><i className="bi bi-cart-check-fill sm:text-[1.2rem] text-[1.1rem]"></i></button>
                            <h6 className='text-center w-full  sm:text-sm text-[12px]'>Orders</h6>
                        </div>
                        </a>

                        <div onClick={() => { Logout() }} className='text-[white] m-1 shadow-md rounded-md text-center w-14 h-14 d-flex justify-center flex-col cursor-pointer hover:bg-[red] hover:text-[white]  transition delay-100 ease-out '>
                            <button><i className="bi bi-box-arrow-left sm:text-[1.2rem] text-[1.1rem]"></i></button>
                            <h6 className='text-center w-full  sm:text-sm text-[12px]'>Logout</h6>
                        </div>


                    </div>


                </div>

                <div className='d-flex  w-full d-flex justify-between flex-col  overflow-y-auto scrollbar-hidden sm:ml-0 ml-2'>
                    {/* Column for Shwowing Data    */}
                    <Container fluid className='h-[full] w-full' id='sales'>
                        <Row className='d-flex justify-evenly items-center'>

                            <Col lg={2} xl={2} md={5} sm={12} xs={12} className='bg-[#1b4332] text-[white]  rounded-md mt-3 h-44 p-4 shadow-lg hover:bg-[#b7e4c7] hover:text-[#081c15] transition delay-100 ease-out'>

                                <div className='h-10  w-10  rounded-full  text-center  d-flex justify-center items-center bg-[#dad7cd]'>
                                    <i className="text-[#03045e] font-bold sm:text-[1.3rem] text-[1.1rem]  bi bi-currency-dollar"></i>
                                </div>

                                <div>
                                    <h3 className='mt-3'>{Totalsale}</h3>
                                    <h6 className='text-sm mt-0 '>Total Sales<span className='font-light text-sm  ml-[40%] '> 0.73% ↑</span></h6>
                                </div>




                            </Col>

                            <Col lg={2} xl={2} md={5} sm={12} xs={12} className='bg-[#1b4332] text-[white]  rounded-md mt-3 h-44  p-4 shadow-lg hover:bg-[#b7e4c7] hover:text-[#081c15] transition delay-100 ease-out'>
                                <div className='h-10  w-10  rounded-full  text-center  d-flex justify-center items-center bg-[#dad7cd]'>
                                    <i className="text-[#03045e] font-bold sm:text-[1.3rem] text-[1.1rem]  bi bi-clipboard-check"></i>
                                </div>

                                <div>
                                    <h3 className='mt-3'>{ProductLength}</h3>
                                    <h6 className='text-sm mt-0 '>Total Product<span className='font-light text-sm   ml-[25%]'> 70% </span></h6>
                                </div>
                            </Col>

                            <Col lg={3} xl={3} md={5} sm={12} xs={12} className='bg-[#1b4332] text-[white] h-44 p-4 rounded-md mt-3  shadow-lg hover:bg-[#b7e4c7] hover:text-[#081c15] transition delay-100 ease-out'>
                                <div className='h-10  w-10  rounded-full  text-center  d-flex justify-center items-center bg-[#dad7cd]'>
                                    <i className="text-[#03045e] font-bold sm:text-[1.3rem] text-[1.1rem]  bi bi-cart3"></i>
                                </div>

                                <div>
                                    <h3 className='mt-3'>{Orderlength}.00</h3>
                                    <h6 className='text-sm mt-0 '>Orders<span className='text-[red] text-sm ml-[55%] '> 0.33% !</span></h6>
                                </div>


                            </Col>


                            <Col lg={4} xl={4} md={5} sm={12} xs={12} className='d-flex justify-between flex-row p-3 bg-[#1b4332] text-[white] h-44  rounded-md mt-3  shadow-lg'>

                                <div className='w-50 rounded-md p-2 bg-[#081c15]  hover:bg-[#b7e4c7] hover:text-[#081c15] shadow-2xl'>
                                    <div className='h-10  w-10  rounded-full  text-center  d-flex justify-center items-center bg-[#dad7cd]'>
                                        <i className="text-[#03045e] font-bold sm:text-[1.3rem] text-[1.1rem] bi bi-eye"></i>
                                    </div>

                                    <div>
                                        <h3 className='mt-3'>{Ip}.00</h3>
                                        <h6 className='text-sm mt-0 '>Total Views<span className='font-light text-sm  sm:ml-[10%] ml-[60%]   '> 0.43% ↑</span></h6>
                                    </div>

                                </div>


                                <div className='w-52 rounded-md p-2 bg-[#081c15]  shadow-2xl relative hover:bg-[#b7e4c7]   h-full d-flex justify-center'>
                                    
                                    <div className='circle  w-32 h-32 rounded-full d-flex justify-center items-center rotation-spo ' style={{ border: '9px dashed white',  }}>

                                        <div className='box w-full h-full d-flex justify-center items-center ronded-full'><span >{Orderlength}.0%</span></div>

                                    </div>
                                </div>
                           

                            </Col>

                        </Row>
                    </Container>



                    {/* Container for the graph  and Calculator*/}
                    <Container fluid className='h-full'>
                        <Row className='d-flex justify-between p-4 flex-row h-full' id='graph'>
                            <Col lg={7} xl={7} md={8} sm={12} xs={12} className='bg-[#b7e4c7]  rounded-md h-[100%]  w-full mt-2 '>

                                <div>

                                    <Line data={chartData} options={chartOptions} />

                                </div>

                            </Col>

                            <Col lg={4} xl={4} md={4} sm={12} xs={12} className='rounded-md shadow-2xl bg-[#1b4332]  h-full w-full mt-2 p-0'  >

                                <div className='p-3'>

                                    <div>
                                        <div className='d-flex justify-center mt-2 '>
                                            <input className="w-full mb-4 px-2 py-2 sm:text-lg text-sm  border rounded " placeholder='Verify total before shipment' type="text" value={input} readOnly />

                                        </div>

                                        <div className="grid grid-cols-4 gap-2">
                                            <button className="col-span-2 bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("7")}>7</button>
                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("8")}>8</button>
                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] text-dark" onClick={() => handleClick("9")}>9</button>
                                            <button className="bg-[#081c15]  text-white text-dark p-2 text-center" onClick={() => handleClick("/")}>/</button>

                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("4")}>4</button>
                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("5")}>5</button>
                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("6")}>6</button>
                                            <button className="bg-[#081c15]  text-white text-dark t p-2 text-center" onClick={() => handleClick("*")}>*</button>

                                            <button className="bg-[white] hover:bg-[#73b197] p-2 text-center" onClick={() => handleClick("1")}>1</button>
                                            <button className="bg-[white] hover:bg-[#73b197] p-2 text-center" onClick={() => handleClick("2")}>2</button>
                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("3")}>3</button>
                                            <button className="bg-[#081c15]  text-white text-dark p-2 text-center" onClick={() => handleClick("-")}>-</button>

                                            <button className="bg-[white] hover:bg-[#73b197] hover:text-[white] p-2 text-center" onClick={() => handleClick("0")}>0</button>
                                            <button className="bg-[#081c15]  text-white font-bold font-mukta p-2 text-center" onClick={handleCalculate}>=</button>
                                            <button className="bg-[#081c15]  text-white text-dark p-2 text-center" onClick={() => handleClick("+")}>+</button>
                                            <button className="bg-[red] rounded-md text-white p-2 text-center text-sm" onClick={handleClear}>Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>





                    {/* Contianer for the Order section */}
                    <div fluid id='order' style={{ padding: 'clamp(0px , 1vw, 16px)', }}>
                        <div className='bg-[#b7e4c7] h-[55vh] rounded-md shadow-lg overflow-auto scrollbar-hidden' >

                            {/* Header */}
                            <div className='shadow-lg bg-[#081c15] rounded-md sticky top-1 left-0 right-0 m-1'>
                                <h2 className='w-full text-center text-light'>ORDER HERE 👋</h2>
                                <hr className='text-light' />
                            </div>

                            {/* style={{marginLeft: 'clamp(1px, 3vw, 100px)', marginRight: 'clamp(1px, 3vw, 100px)'}} */}

                            {data.length >= 1 ? (
                                data && data.map(item => (

                                    <Container fluid className='d-flex justify-center item-center mb-5'>
                                        <Row className='bg-[white] rounded-lg p-3  d-flex justify-center w-[1050px] m-1'>



                                            {/* Column for the order Detail */}

                                            <Col xl={7} lg={7} md={6} sm={12} xs={12} className='p-3' >
                                                <div className='d-flex justify-start flex-row gap-5'  >

                                                    <div>
                                                        <h6 className='text-sm font-bold font-Lato italic  '>Name :</h6>
                                                        <h6 className='text-sm font-bold font-Lato italic '>Location :</h6>
                                                        <h6 className='text-sm font-bold font-Lato italic '>Apartment:</h6>
                                                        <h6 className='text-sm font-bold font-Lato italic '>Postal Code :</h6>
                                                        <h6 className='text-sm font-bold ont-Lato italic   '>Phone Number :</h6>
                                                        <h6 className='text-sm font-bold ont-Lato italic '>Email :</h6>
                                                        <h6 className='text-sm font-bold  font-Lato italic  '>Notes :</h6>
                                                        <h6 className='text-sm font-bold  font-Lato italic '>Date :</h6>
                                                        <h6 className='text-sm font-bold  font-Lato italic '>Status :</h6>
                                                        <h6 className='text-sm font-bold  font-Lato italic '>IpAddress :</h6>
                                                    </div>
                                                    <div>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Firstname} - {item.Lastname}  </h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Contryregion}, {item.Towncity} , ({item.Streetaddress}) </h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Apartment} </h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Postalcode} </h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Phonenumber}</h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Emailaddress}</h6>
                                                        <h6 className='text-sm font-medium font-Lato italic  '>{item.Notes}</h6>
                                                        <h6 className='text-sm font-bold text-[red]  font-Lato italic '>{item.date}</h6>
                                                        <h6 className='text-sm font-bold text-[black]  font-Lato italic '>{item.status}</h6>
                                                        <h6 className='text-sm font-bold text-[black]  font-Lato italic '>{item.IpAddress}</h6>
                                                    </div>

                                                </div>

                                            </Col>




                                            {/* Column for the Total  */}
                                            <Col xl={4} lg={4} md={6} sm={12} xs={12} className='overflow-y-auto scrollbar-hidden border-t-0 ' style={{ border: '2px solid black', borderTop: 'none', borderBottom: 'none' }}>
                                                <div>
                                                    <h4 className='font-bold font-LeagueSpartan text-center'>ORDER</h4>


                                                    <div className='d-flex justify-between w-full' >

                                                        <div>
                                                            <h5 className='font-sans font-bold text-xl '>ITEM</h5>
                                                            <hr />

                                                            <span className='font-normal font-sans tracking-wide text-sm'>
                                                                {item.title.map((title, index) => (
                                                                    <span style={{ display: 'block' }} key={index}>
                                                                        {title} × <span>{item.quantity[index]}</span>
                                                                    </span>
                                                                ))}
                                                            </span>

                                                        </div>



                                                        <div>
                                                            <h5 className='font-sans font-bold text-xl'>PRICE</h5>
                                                            <hr />

                                                            <span className='font-normal font-sans tracking-wider text-sm'>
                                                                {item.itemprice.map((itemprice, index) => (

                                                                    <span key={index} style={{ display: 'block' }}>{itemprice}</span>
                                                                ))}
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <hr />


                                                    <div className='d-flex justify-between flex-row mt-3' >
                                                        <div >
                                                            <h6 className='font-sans font-medium text-sm'>COUPON APPLIED</h6>
                                                            <h6 className='font-bold font-sans sm:text-lg text-base'>SubTotal</h6>
                                                            <h5 className='font-bold font-sans sm:text-xl text-base'>Total</h5>

                                                        </div>


                                                        <div>
                                                            <h5 className='font-Lato font-medium text-[red] text-sm'>{item.IsCouponApplied}</h5>
                                                            <h6 className='font-bold font-sans sm:text-lg text-base'>{item.subtotal}</h6>
                                                            <h5 className='font-bold font-sans sm:text-xl text-base'>Rs, {item.total}</h5>

                                                        </div>

                                                    </div>

                                                </div>
                                            </Col>

                                            <Col xl={1} lg={1} md={12} sm={12} xs={12} className='p-2 m-0'>
                                                <div className='d-flex justify-around  items-center p-1 flex-col  bg-[#081c15] h-full w-[100%]  rounded-lg'>

                                                    <button className='bg-[white] text-[black] hover:bg-[#56ab91]  hover:text-[white] w-full sm:h-12 h-10 rounded-lg sm:m-0 m-1'><i className="bi bi-airplane-engines  sm:text-[1.2rem] text-[1rem]"></i></button>
                                                    <button className='bg-[white] text-[black] hover:bg-[#56ab91]  hover:text-[white] w-full sm:h-12 h-10 rounded-lg sm:m-0 m-1 '><i className="bi bi-check-circle-fill  sm:text-[1.2rem] text-[1rem]"></i></button>
                                                    <button className='bg-[white] text-[black] hover:bg-[red]  hover:text-[white] w-full sm:h-12 h-10 rounded-lg sm:m-0 m-1 ' onClick={() => DelteOrder(item._id)}><i className="bi bi-trash3  sm:text-[1.3rem]  text-[1rem]"></i></button>

                                                </div>
                                            </Col>




                                        </Row>

                                    </Container>
                                ))

                            ) : (

                                <Container fluid className='d-flex justify-center item-center mb-5 '>
                                    <Row className='bg-[white] rounded-lg p-3  d-flex justify-center w-60  m-1'>

                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className='text-center'>
                                            <h4 className='text-dark'>No Order 🥴</h4>
                                        </Col>

                                    </Row>
                                </Container>



                            )}



                        </div>
                    </div>








                </div>







            </div>
        </div >
    )
}

export default Orderpanle