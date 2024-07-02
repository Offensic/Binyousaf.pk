import { NavLink, useNavigate, Link, useParams } from 'react-router-dom'

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AdminPanel(props) {


  const { ctg } = useParams();
  const [Category, setcategory] = useState([]);
  const [needCategory, setneedCategory] = useState([]);
  const [register, setresgister] = useState(false)


  //-------------------------------------------------------------- Requesting to the API for getting all Categroy data 
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_Backend_URL}admin/product/Category`, {
      withCredentials: true
    }).then(response => {

      console.log(response)
      if (response.data == "Token Not Found") {
        
        navigate('/login')

      }


      else if (response.data == "Invalid Signature") {
        navigate('/Unauthorize')

      }

      else {
        setcategory(response.data)
      }
    })

      .catch(err => {
        console.log("Failed to get ALl product" + err)
        console.log(err)
      })


  }, [])


  //-------------------------------------------------------------- UseEffect For Filetering a single Producy  in all category In the base of Select Category
  useEffect(() => {

    const Productbaseonurl = Category.filter(products => products.category === ctg)
    setneedCategory(Productbaseonurl)


  }, [ctg])





  //-------------------------------------------------------------- Funtion it can take a id and move in edit COmponent with an id.
  const navigate = useNavigate()
  function UpdateCategory(id, e) {
    navigate('/admin/panel/edit', { state: { ProductID: id } })

  }

  //------------------------------------------------------------- API Fot Deleting a Category 
  function DeleteProduct(id) {

    axios.delete(`${process.env.REACT_APP_Backend_URL}admin/deleteCategory/` + id, {

      withCredentials: true

    }).then((response) => {

      if (response.data === "Successfully Category Deleted") {

        toast.success(response.data, {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: true,
        })

        
        window.location.assign('/admin/panel')
      }

      else {
        toast.error("Failed to Delete Product" + response.data)
      }

    })
      .catch(err => { toast.error("Failed to Delete product temporaray error") })

  }

  //------------------------------------------------------------ Function for Singout
  function Singout() {


    localStorage.removeItem('token')

    toast.success("Successfully Logout 👋", {

      closeOnClick: true,
      pauseOnHover: false,
      autoClose: 2000,

    })
    navigate('/login')


  }

  // ---------------------------------------------------------- Function for Opening a Register Buttong ot Closing.
  const ChangeButton = useRef()
  function RegisterButtonDescision() {

    if (register === true) {
      setresgister(false)
    }

    else if (register === false) {
      setresgister(true)
    }

    else {
      console.log("Not Found")
    }


    axios.post(`${process.env.REACT_APP_Backend_URL}admin/setregisterbutton`, { register }, {

      withCredentials: true

    }).then(response => {


    

      if (response.data === "Successfully Updated true") {

        toast.info('Register is Open for user', { theme: 'dark', autoClose: 2000, })
      }

      else if (response.data === "Successfully Update false") {
        toast.info('Register is Closed for user', { theme: 'dark', autoClose: 2000, })

      }

      else {
        toast.error('Value is not Execptable !', { theme: 'dark', autoClose: 2000, })
      }
    })
      .catch(error => { toast.info("Failed to Updated") })

  }

  return (
    <>

      <div className='w-full h-[100vh] mt-0'  >




        <div className='mt-5 mr-2 pt-10  pb-10  d-flex justify-evenly' >

          <div className='h-[70vh] w-[190px] d-flex justify-between flex-col shadow-2xl bg-[#081c15] text-white p-3 rounded-lg'>
            <h3 className='font-bold '>PRODUCTS</h3>
            <NavLink className='bg-[#1b4332]  w-[100%] rounded-md hover:bg-[#b7e4c7] font-medium text-[white] hover:text-[white] transition delay-150 ease-out' to='Men'>Men</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7]  font-medium text-[white]  hover:text-[white] transition delay-150 ease-out' to='Boski'>BOSKI</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7]  font-medium text-[white]  hover:text-[white] transition delay-150 ease-out' to='Washwear'>WASH & WEAR</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7]  font-medium text-[white]  hover:text-[white] transition delay-150 ease-out' to='Kurta'> KURTA</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7]  font-medium text-[white]  hover:text-[white] transition delay-150 ease-out' to='Menshawal'>MEN SHAWL</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7] font-medium text-[white]  hover:text-[white] transition delay-150 ease-out' to='Cotton'>COTTON</NavLink>
            <NavLink className='bg-[#1b4332] w-[100%] rounded-md hover:bg-[#b7e4c7] font-medium text-[white]    hover:text-[white] transition delay-150 ease-out' to='Karandi'>KARANDI</NavLink>


            <a href="/admin/panel/addcategory"><button className='bg-[white] text-[black] h-[35px] w-[100%]   hover:bg-[#b7e4c7] hover:text-[white] transition delay-75 ease-out shadow-md mb-2 font-bold rounded-md'><span>ADD PRODUCT</span></button></a>

            <Link to='/admin/panel/dashboard'><button className='w-[100%] bg-[white] text-center font-bold sm:text-2xl text-base text-[black] hover:bg-[#b7e4c7] hover:text-[white] transition delay-150 ease-out rounded-md' to='#'>Dashboard</button></Link>
            <button onClick={() => RegisterButtonDescision()} className='w-[100%] bg-[white] text-center font-bold sm:text-xl p-1 text-base text-[black] hover:bg-[#b7e4c7] hover:text-[white] transition delay-150 ease-out rounded-md' to='#' ref={ChangeButton}>Close Register</button>

            <button className='text-light bg-[red] rounded-md mt-1 font-bold' onClick={() => Singout()}>LOG-OUT</button>
          </div>

          <div className='bg-[#081c15]  w-[82%] h-[70vh] rounded-lg overflow-auto shadow-lg'>
            <table className='table'>
              <thead>
                <tr className='text-light bg-[#b7e4c7] '>
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>OFFPRICE</th>
                  <th>FILE</th>
                  <th>SALE</th>
                  <th>CATEGORY</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              
              <tbody>

                {needCategory.map(products => (


                  <tr key={products._id} className='text-black'>
                    <td className='w-16 h-14'><img src={products.path} alt="" /></td>
                    <td className='text-sm  font-medium '>{products.title}</td>
                    <td className='text-base  font-medium'>{products.price}</td>
                    <td className='text-base   font-medium'>{products.offprice}</td>
                    <td className='text-base  font-normal'>{products.name}</td>
                    <td className='text-base  font-medium'>{products.sale}</td>
                    <td className='text-base  font-medium'>{products.category}</td>
                    <td><button className='w-[50px] h-[35px] bg-[white] shadow-lg rounded-md m-1  hover:bg-[#b7e4c7]  text-center hover:text-[white] transition delay-75 ease-out' onClick={() => UpdateCategory(products._id)}>EDIT</button></td>
                    <td><button className='w-[50px] h-[35px] bg-[white] shadow-lg rounded-md m-1 hover:bg-[red]  hover:text-[white] ' onClick={(e) => DeleteProduct(products._id)}><i className="bi bi-trash3"></i></button></td>
                  </tr>

                ))}



              </tbody>

              {/* <div div className='h-[100%] w-[100%] d-flex justify-center items-center bg-dark rounded-md '>
              <h2 className='font-mukta font-medium text-light font-3xl'>🙄 No product found</h2>
              </div> */}

            </table>




          </div>

        </div>


      </div>
    </>
  )
}

export default AdminPanel