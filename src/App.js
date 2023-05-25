import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import { Component } from 'react';
import Body from "./Components/Body";
import Background from './Components/Background';
import Cards from './Components/Cards';
import Customer from './Components/Customer'
import Discount from './Components/Discount';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Body/>
    

      <div className='mt-5 ml-5 mb-4'>
      <Background/>
      </div>
<div className='mb-4'>
<Cards/>
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
  );
}

export default App;
