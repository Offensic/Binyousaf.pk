import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Edit() {


    // State for Setting a data in to the input field
    const [data, setedata] = useState({

        title: '',
        category: '',
        id: '',
        imageurl: '',
        file: null,
        price: '',
        offprice: '',

    })

    const navigate = useNavigate();
    const location = useLocation();
    const captureid = location.state.ProductID

    // UseEffect for Making a request to  backend  to get data For Edting
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_Backend_URL}admin/product/` + captureid, {

            withCredentials: true

        }).then((response) => {
            setedata(response.data)
        })
            .catch(err => {
                toast.error("Failed to Get Data to the server Sorry 😫")
            })


    }, [captureid])


    // Funtion for Updating a value 
    // function ChangeHandler(e) {
    //     const newdata = { ...data };
    //     if (e.target.id === "file") {
    //         newdata[e.target.id] = e.target.files[0];
    //     } else {
    //         newdata[e.target.id] = e.target.value;
    //     }
    //     setedata(newdata);
    // }


    function handleInputChange(event) {
        const { name, value } = event.target;
        setedata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleFileChange(event) {
        setedata(prevData => ({
            ...prevData,
            file: event.target.files[0]
        }));
    }


    function SubmitData(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('id', data.id);
        formData.append('category', data.category);
        // formData.append('imageurl', data.imageurl);
        formData.append('price', data.price);
        formData.append('offprice', data.offprice);
        formData.append('sale', data.sale);
        formData.append('file', data.file)


        axios.post(`${process.env.REACT_APP_Backend_URL}admin/update/UpdateCategory/` + captureid, formData, {

            headers: {
                "Content-Type": 'multipart/form-data'
            },

            withCredentials: true

        }
        ).then((response) => {
            console.log(response)
            if (response.data === "Product Successfully Updated") {

                toast.success("Product Successfully Updated 😀", { closeOnClick: true, autoClose: 2000, pauseOnHover: false, })
                setTimeout(() => {
                    navigate('/admin/panel')
                }, 1000)
            }

            else if (response,data  === 'Invalid Signatures 🎃'){
                navigate('/login')
                toast.error("Login Again")

            }

            else {
                toast.error("Failed to Update Product 😶", response.data)

            }
        }).catch(err => { toast.error("Failed to send data to the server 😴" + err) })
    }

    // Function on the Button for moving backword
    function Backwindow() {
        window.location.assign('/admin/panel')
    }

    return (
        <div>


            <div className='d-flex justify-center items-center w-[100%] h-[100vh] mb-24' >

                <div className='bg-light w-[400px] overflow-auto shadow-2xl mt-[10px] rounded-md' style={{ zIndex: '1000' }} >

                    <button onClick={() => Backwindow()}><i className="bi bi-arrow-left text-[2.5rem] "></i></button>
                    <div className='d-flex justify-center w-full h-[65px] '>
                        <h1 className='font-bold'>BINYOUSUF.PK</h1>
                    </div>

                    <form onSubmit={(e) => SubmitData(e)} method='POST' encType="multipart/form-data">
                        <div className='p-2 bg-gray-200 overflow-auto h-[60vh]'>
                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2">PRODUCT NAME:</label>
                                <input type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" value={data.title} placeholder="Product Title" required onChange={(e) => handleInputChange(e)} />
                            </div><br />

                            <div>
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Category: </label>
                                <select id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.category} required onChange={(e) => handleInputChange(e)}  >
                                    <option value="" selected >Select Category</option>
                                    <option value="Men">Men</option>
                                    <option value="Boski">Boski</option>
                                    <option value="Washwear">Washwear</option>
                                    <option value="Kurta">Kurta</option>
                                    <option value="Menshawal">Menshawal</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Karandi">Karandi</option>
                                </select>

                            </div><br />

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark ">PRODUCT ID: </label>
                                <input type="text" id="id" name='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Must be a Name of Product in small case e.g:(black-boski)" value={data.id} required onChange={(e) => handleInputChange(e)} />
                            </div><br />

                            {/* <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Image Url:</label>
                                <input type="text" id="imageurl" name='imageurl' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Image Url (optional)" value={data.imageurl} onChange={(e) => handleInputChange(e)} />
                            </div> */}

                            <div>

                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-4" for="file_input">Upload file <span className='text-sm  font-normal font-sans text-red-400'>( File is Required  ) </span></label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" id="file" type="file" name='file' onChange={(e) => handleFileChange(e)} />

                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-4" for="file_input">Image preview: </label>

                            <div className='w-full d-flex justify-center  mt-2 bg-light  rounded-md shadow-md p-2 '>
                                <img src={data.path} alt="" className='w-36 h-38 rounded-xl' /><br />

                            </div>

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-4 uppercase">Price:</label>
                                <input type="text" id="price" name='price' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Price" value={data.price} required onChange={(e) => handleInputChange(e)} />
                            </div>

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-3 uppercase">OFF Price:</label>
                                <input type="text" id="offprice" name='offprice' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Off Price (optional)" value={data.offprice} onChange={(e) => handleInputChange(e)} />
                            </div>

                            <div>

                                <label for="sale" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Category: </label>
                                <select id="sale" name='sale' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={data.sale} onChange={(e) => handleInputChange(e)} >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>

                                </select>
                            </div><br /><br />

                            <button className='w-full h-[40px] text-white bg-[black] hover:bg-[#bb7b1c] rounded-md'>SUBMIT</button>

                        </div>

                    </form>

                </div>
            </div>


        </div>
    )
}

export default Edit