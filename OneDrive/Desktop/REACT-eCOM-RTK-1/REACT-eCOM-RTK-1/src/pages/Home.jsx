import React from 'react'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import Fillers from '../components/Fillers'
import Blog from '../components/Blog'
import BottomFillers from '../components/BottomFillers'
import SignIN from '../components/SignIN'
import SignUp from '../components/signUp'

const Home = () => {
  
  // if( Math.random() > 0.5 ){
  //  return new Error("Test Error Boundary")
  // }

  return (
   <>
  <SignIN/>
  <SignUp/>
    <Hero/>
    <ProductList/> 
    {/* <Fillers/>
    <Blog/> */}
    {/* <BottomFillers/> */}
   </>
  )
}

export default Home