import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Svg from '../components/Svg'
import Offcanvas from '../components/Offcanvas'


const Layout = () => {
  return (
   <>
  
  <Svg/>
    <Offcanvas/>
    <Header/>    
     <Outlet/>
    <Footer/>
   
   </>
  )
}

export default Layout