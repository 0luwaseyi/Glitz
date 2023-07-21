import React from "react"
import Navbar from "./Navbar"
import Body from "./Body"
import Shop from "./Shop"
import Customer from "./Customer"
import Discount from "./Discount"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

function Homepage(){
    return(
        <div className="App">
      
        <Navbar/>
        <Body/>
      
  
        <div className='my-5 mx-5'>
        <Shop/>
        </div>
  <div className='mb-4'>
  
  </div>
      <div className='mt-6 mb-7'>
      <Customer/>
      </div>
      <div className='mt-5'>
      <Discount/>
      </div>
    <div className='mt-5'>
      <Newsletter/>
    </div>
  
    <div className='mt-5'>
      <Footer/>
    </div>
       
      </div>

    )
}

export default Homepage;