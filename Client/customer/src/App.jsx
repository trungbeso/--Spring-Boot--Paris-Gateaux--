import React from 'react'
import Menubar from "./components/Menubar.jsx";
import Home from './pages/Home'
import ExploreFood from "./pages/ExploreFood";
import Contact from './pages/Contact.js'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/explore" element={<ExploreFood />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
