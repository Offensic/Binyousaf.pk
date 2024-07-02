import React from 'react'
import { useState, } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCategory() {

    
    const [title, setname] = useState('');
    const [category, setcategory] = useState('');
    const [id, setid] = useState('');
    // const [imageurl, setimageurl] = useState('');
    const [file, setfile] = useState('');
    const [price, setprice] = useState('');
    const [offprice, setoffprice] = useState('');
    const [sale, setsale] = useState('')





    
// Function for Adding the Category
    function SubmitData(e) {
        e.preventDefault();
        console.log(file)
        axios.post(`${process.env.REACT_APP_Backend_URL}admin/addCategory`, { title, category, id,  file, price, offprice, sale },
        
        {

        headers:{
            "Content-Type": 'multipart/form-data'
        },

            withCredentials: true
        
        } 
        
        ).then((response) => {

            if (response.data === "Product Successfully added") {

                toast.success(response.data, {
                    autoClose: 2000,
                    pauseOnHover: false,
                    closeOnClick: true,
                })

                window.location.assign('/admin/panel')

            } else {
                toast.error("Failed to upload Product on the Server"+ response.data)
               
            }
        })
            .catch((err) => {

                toast.error("Failed to Upload Data to Server Temporary error 😴")
            })




    }


    // Function for back the window
    function Backwindow(){
        window.location.assign('/admin/panel')
    }






    return (
        <>

            <div className='d-flex justify-center items-center w-[100%] h-[100vh] mb-24' >
        
                <div className='bg-light w-[400px]  overflow-auto shadow-2xl mt-[15px] rounded-md' style={{zIndex: '1000'}} >

                <button  onClick={() => Backwindow()}><i className="bi bi-arrow-left text-[2.5rem] "></i></button>
                    <div className='d-flex justify-center w-full h-[65px] '>
                        <h1 className='font-bold'>BINYOUSUF.PK</h1>
                    </div>

        

                    <form onSubmit={(e) => SubmitData(e)} method='POST' encType="multipart/form-data">
                        <div className='p-2 bg-gray-200 overflow-auto h-[60vh]'>
                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2">PRODUCT NAME:</label>
                                <input type="text" id="first_name" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Product Title" required onChange={(e) => setname(e.target.value)} />
                            </div><br />

                            <div>
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Category: </label>
                                <select id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setcategory(e.target.value)}>
                                    <option value="" selected >Select Category</option>
                                    <option value="Men">Men</option>
                                    <option value="Boski">Boski</option>
                                    <option value="Washwear">Washwear</option>
                                    <option value="Kurta">Kurta</option>
                                    <option value="Washwear">Washwear</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Karandi">Karandi</option>
                                </select>

                            </div><br />

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark ">PRODUCT ID: </label>
                                <input type="text" id="first_name" name='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Must be a Name of Product in small case e.g:(black-boski)" required onChange={(e) => setid(e.target.value)} />
                            </div><br />

                            {/* <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Image Url:</label>
                                <input type="text" id="first_name" name='imageurl' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Image Url (optional)" onChange={(e) => setimageurl(e.target.value)} />
                            </div> */}

                            <div>

                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2" for="file_input">Upload file <span className='text-sm  font-normal font-sans text-red-400'>( File is Required ) </span></label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" id="file" type="file" name='file' required onChange={(e) => setfile(e.target.files[0])} />

                            </div>

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-4 uppercase">Price:</label>
                                <input type="text" id="first_name" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Price" required onChange={(e) => setprice(e.target.value)} />
                            </div>

                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-3 uppercase">OFF Price:</label>
                                <input type="text" id="offprice" name='offprice' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[35px]" placeholder="Off Price (optional)"  onChange={(e) => setoffprice(e.target.value)} />
                            </div>

                            <div>
                        
                                 <label for="sale" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-2 uppercase">Category: </label>
                                <select id="sale" name='sale' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" required   onChange={(e) => setsale(e.target.value)} >
                                    <option value="" selected >Sale (Yes or No)</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                   
                                </select>
                            </div><br /><br />

                            <button className='w-full h-[40px] text-white bg-[black] hover:bg-[#bb7b1c] rounded-md'>SUBMIT</button>

                        </div>

                    </form>

                </div>
            </div>

        </>
    )
}

export default AddCategory;