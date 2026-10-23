import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { ToastContainer } from 'react-toastify';
import Home from './pages/home/home'
import Models from './pages/models/model'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

 function App(){
  return (
    <BrowserRouter>
    <ScrollToTop/>
    {/* <ToastContainer/> */}
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/models" element={<Models/>}/> 
      

    </Routes>
      <Footer/>
    </BrowserRouter>
  )
};
export default App;
