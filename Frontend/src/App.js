import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Header from './Sub Components/Header and Footer/Header';
import Footer from './Sub Components/Header and Footer/Footer';


// Main Category pages import 
import Home from './Main Component/Home';
import Category from './Sub Components/Categories'
import Products from './Sub Components/Product Component/Product'


// Footer SubComponent
import Contactus from './Sub Components/FooterSubComponent/Contactus';
import Aboutus from './Sub Components/FooterSubComponent/Aboutus';
import Shipping from './Sub Components/FooterSubComponent/Shipping';
import ReturnExchange from './Sub Components/FooterSubComponent/ReturnExchange';






// Importing a Contxt API
import Context from './ContextAPI/Context';
import ScrollTop from './Sub Components/MoreComponent/ScrollTop'
// import DisableRightClick from './Sub Components/MoreComponent/DisableRightClick'


import PageNotFound from './Main Component/Page404/PageNotFound';
import UnAuthorization from './Sub Components/MoreComponent/UnAuthorization';



import Cart from './Main Component/Cartpage/Cart';
import Checkout from './Sub Components/Check out Component/Checkout'




// Import a Admin Component
import ProtecdRoute from './Main Component/Admin/ProtecdRoute';
import LoginPage from './Main Component/Admin/LoginPage';
import AdminPanel from './Main Component/Admin/AdminPanel';
import Dashboard from './Main Component/Admin/Dashboard.js/Orderpanle'

// Admin SubComponent
import AddCategory from './Sub Components/Admin Crud/AddCategory';
import Edit from './Sub Components/Admin Crud/Edit'

function App(props) {
  return (
    <div>

      <Context>
        <Router scrollRestoration="manual">
          {/* <DisableRightClick /> */}
          <ScrollTop />
          <Header />

          <Routes>


            <Route exact path='/' element={<Home />}></Route>
        
            <Route exact path='/Unauthorize' element={<UnAuthorization />}></Route>
            
            <Route exact path='/contact-us' element={<Contactus />}></Route>
            <Route exact path='/about-us' element={<Aboutus />}> </Route>
            <Route exact path='/shipping' element={<Shipping />}></Route>
            <Route exact path='/return-exchange' element={<ReturnExchange />}></Route>

            <Route exact path='/login' element={<LoginPage />}></Route>


            <Route exact path='/admin/panel/' element={<ProtecdRoute Component={AdminPanel} />}>
              <Route exact path='/admin/panel/:ctg' element={<ProtecdRoute Component={AdminPanel} />}> </Route>
            </Route>
            <Route exact path='/admin/panel/addcategory' element={<ProtecdRoute Component={AddCategory} />}> </Route>
            <Route exact path='/admin/panel/edit' element={<ProtecdRoute Component={Edit} />}> </Route>
            <Route exact path='/admin/panel/dashboard' element={<ProtecdRoute Component={Dashboard} />}> </Route>

            <Route exact path='/product-category/:categoryparam' element={<Category />}> </Route>
            <Route exact path='/product-category/:categoryparam/:productid' element={<Products />}> </Route>
            <Route exact path='/product/:productid' element={<Products />}> </Route>

            <Route exact path='/products/cart' element={<Cart />}> </Route>
            <Route exact path='/products/checkout' element={<Checkout />}></Route>



            <Route path='*' element={<PageNotFound />}></Route>



          </Routes>
          <Footer />
        </Router>

      </Context>

    </div>

  );
}

export default App;
