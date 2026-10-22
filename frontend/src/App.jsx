import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import  Home  from './pages/Home/Home';
import ModelsPage from './pages/Models/ModelsPage';
import Docs from "./pages/Docs/DocsPage"
import PlayGroundPage from './pages/PlayGround.jsx/PlayGroundPage';
import PricingPage from './pages/Pricing/PricingPage';
import DocsPage from './pages/Docs/DocsPage';
import Register from './pages/Register/Register';
import ResetPassword from "./pages/ResetPassword/ResetPassword"


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

 function App(){
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <ToastContainer/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/models" element={<ModelsPage/>}/>
      <Route path="/docs" element={<DocsPage/>}/>
      <Route path="/playground" element={<PlayGroundPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>


    </Routes>
      <Footer/>
    </BrowserRouter>
  )
};
export default App;
