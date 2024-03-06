
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Partner from './pages/partner';
import Fulltrackload from './pages/fulltrackload';
import PartTruckload from './pages/PartTruckload';
import Minitruckload from './pages/MiniTruckLoad';
import Personalcourier from './pages/personalcourier';
import PackersMovers from './pages/PackersMovers';
import IndustrialLogistics from './pages/IndustrialLogistics';
import EcommerceCourier from './pages/EcommerceCourier';
import Quote from './pages/quote';
import NotFound from './pages/NotFound';


// import Header from './components/header'
// import Footer from './components/footer'
// import Heroslider from './components/heroslider'

function App() {
 

 const router = createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<Layout/>}>

              <Route path='/' element={<Home/>}/>
              <Route path='/get-quote' element={<Quote/>}/>
              <Route path='/partner' element={<Partner/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>} />
              <Route path='/services/full-truck-load' element={<Fulltrackload />} />
              <Route path='/services/part-truck-load' element={<PartTruckload />} />
              <Route path='/services/mini-truck-load' element={<Minitruckload />} />
              <Route path='/services/personal-courier' element={<Personalcourier/>} />
              <Route path='/services/packers-and-movers' element={<PackersMovers/>} />
              <Route path='/services/industrial-courier' element={<IndustrialLogistics/>} />
              <Route path='/services/ecommerce-courier' element={<EcommerceCourier/>} />
              
              <Route path='*' element={<NotFound/>} />

            </Route>
          )
 );

  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
