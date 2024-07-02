import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';



// import { useContext } from 'react';
// import {ContextAPI} from '../../ContextAPI/Context';




function LoginPage() {


    // const {setStoretoken} = useContext(ContextAPI)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ShowregisterButton, setShowregisterButton] = useState()
    const Navigate = useNavigate()


    useEffect(() => {



        axios.get(`${process.env.REACT_APP_Backend_URL}admin/get/setregisterbutton`, {
            withCredentials: true
        }).then(response => {

        

            if(response.data[0].register === 'true'){

                setShowregisterButton(true)

            }

            else{
                setShowregisterButton(false)
            }


        })

            .catch(err => { console.log("Failed !", err) })


    }, [])


    // ------------------------------------------------------- Function for the Register Admin
    function ResgiterUser(e) {
        e.preventDefault();

        const disallowedCharacters = ", ; :\"[]()*&^%$#!_+=<>~:";
        if (!email || !password) {
            toast.warning("Please enter email and password 😕", {
                autoClose: '2000',
                closeOnClick: true,
                pauseOnHover: false,

            })
        }

        else {
            if (disallowedCharacters.split("").some(char => email.includes(char))) {
                toast.error("Oops !  Email Include Invalid Character 🤨", {
                    autoClose: '2000',
                    closeOnClick: true,
                    pauseOnHover: false,
                })
            }


            else if (email.length < 7 || !email.includes("@") || !email.endsWith(".com")) {

                toast.error("Email Must be Valid for Register 😐", {
                    autoClose: '2000',
                    closeOnClick: true,
                    pauseOnHover: false,
                })


            }
            else if (password.length < 6) {
                toast.info("🥺 Password must be strong", {
                    position: "top-left",
                    autoClose: '2000',
                    closeOnClick: true,
                    pauseOnHover: false,
                })
            }


            else {
                axios.post(`${process.env.REACT_APP_Backend_URL}Owner/admin/register`, { email, password })
                    .then((response) => {

                        if (response.data === "Email is already Been used") {
                            toast.error(response.data, {
                                autoClose: '2000',
                                closeOnClick: true,
                                pauseOnHover: false,
                            })
                        }

                        else {

                            toast.success(response.data + " We Have not recover Option Must remember Your password 🤐" + password, {
                                autoClose: '3000',
                                closeOnClick: true,
                            })
                            // toast.send("Now you are able to Login")
                            setEmail('');
                            setPassword('');
                        }

                    })

                    .catch(() => {
                        toast.info("Failed to Send Data to Server Temporary error", {
                            theme: "colored",
                            autoClose: '4000',
                        })
                    })
            }
        }
    }


    // ------------------------------------------------------- Function for the Login Admin
    function LoginAdmin(e) {

        e.preventDefault();
        axios.post(`${process.env.REACT_APP_Backend_URL}Owner/admin/login`, { email, password }, {
            withCredentials: true
        }).then((response) => {
            // console.log(response.data)
            if (response.data.status === "Successfully Login") {
                toast.success(response.data.status + "🥳", {
                    closeOnClick: true,
                    autoClose: 2000,
                    pauseOnHover: false,
                })
                // setStoretoken(response.data.token)

                console.log(response)
                Cookies.set('token', response.data.token, {
                    expires: 1,
                    secure: true, // secure flag tell cookies send on https or not
                    sameSite: 'None', // it is to allowed  cookies on different origin 
                    // httpOnly: true,

                })
                const token = response.data.token
                localStorage.setItem('token', token)

                // axios.defaults.headers.common['Authorization'] = `Bearer ${token};`

                // window.location.replace('/admin/panel')
                Navigate('/admin/panel')


            } else if (response.data === "Email is Not Correct") {
                toast.error(response.data + "😌", {
                    closeOnClick: true,
                    autoClose: 3000,
                    pauseOnHover: false,
                })
            }




            else {
                toast.error("Invalid Password 🥺")
            }

        })

            .catch((error) => { toast.error("Failed to Send Data to Server Temporary error", error) })

    }




    return (
        <>


            <div className='d-flex justify-center mb-5 mt-[130px] mr-[30px]'>

                <form onSubmit={(e) => LoginAdmin(e)}>

                    <div className='Login-form shadow-2xl bg-[white] w-[330px] h-[430px] d-flex justify-center items-center flex-col rounded-lg '>
                        {/* <img src="Logo.png" alt="Logo Image" className='w-[90px]' /> */}

                        <h4 className='text-dark  font-bold text-3xl'>LOGIN IN</h4>
                        <input type="email" placeholder='Email' name='email' className='mt-3 px-2 py-2 shadow-sm font-normal border-slate-700 placeholder-slate-400 focus:outline-none rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={30} />
                        {/* {nameerror ? <span className='font-sans top-[-10px] text-[red]' style={{fontSize: '12px'}}>Email Must be Greater then 8 chr</span> : ''} */}
                        <input type="password" placeholder='Password' name='password' className='mt-3 px-2 py-2 shadow-sm font-normal border-slate-700 placeholder-slate-400 focus:outline-none rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />


                        <button className='mt-[100px] p-1 w-full  bg-[black] text-white  hover:bg-[#bb7b1c] rounded-md transition delay-100 ease-out' >LOGIN</button>
                        {ShowregisterButton ? (
                            <button onClick={(e) => ResgiterUser(e)} className=' mt-3 p-1 w-[100%] bg-[black] text-white  hover:bg-[#bb7b1c] rounded-md transition delay-100 ease-out' >REGISTER</button>
                        ): 

                        null
                        }

                    </div>
                </form>
            </div>



            {/* <TokenContext.Provider value={{storetoken, setStoretoken}}>
                <AdminPanel />
            </TokenContext.Provider> */}
        </>

    )
}

export default LoginPage