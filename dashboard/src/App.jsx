import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { ToastContainer } from 'react-toastify';
import Home from './pages/home/home'
import Models from './pages/models/model'
import Playground from './pages/playGround/playGround'
import ApiKeys from './pages/apiKeys/apiKey'
import ActivityPage from './pages/activity/activity'
import Settings from './pages/settings/settings'
import Profile from './pages/settings/profileForm'
import Security from './pages/settings/securitySettings'
import DashboardLayout from "./layouts/DashboardLayout"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

 function App(){
  return (
    <BrowserRouter>
    <ScrollToTop/>
    {/* <ToastContainer/> */}
      
    <Routes>
      <Route  element={<DashboardLayout/>}>
        <Route path="/" element={<Home/>}/> 
        <Route path="/models" element={<Models/>}/> 
        <Route path='/playground' element={<Playground/>}/>
        <Route path='/apikeys' element={<ApiKeys/>}/>
        <Route path='/activity' element={<ActivityPage/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/security' element={<Security/>}/>
        </Route> 

    </Routes>
      <Footer/>
    </BrowserRouter>
  )
};
export default App;
