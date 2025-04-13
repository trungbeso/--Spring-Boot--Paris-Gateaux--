import React from 'react'
import Menubar from "./components/Menubar.jsx";
import Home from './pages/Home'
import ExploreFood from "./pages/ExploreFood.jsx";
import Contact from './pages/Contact.jsx'
import { Route, Routes} from "react-router-dom";
import FoodDetails from './pages/FoodDetails.jsx'
import Cart from "./pages/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder.jsx";

const App = () => {
  return (
   <>
       <Menubar />
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/explore" element={<ExploreFood />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/food/:id" element={<FoodDetails />}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/order" element={<PlaceOrder />}/>
       </Routes>
   </>


  )
}

export default App
