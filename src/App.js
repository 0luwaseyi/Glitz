import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Homepage from "./Components/Homepage"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Purchase from './Components/Purchase';


function App() {
  return (
    <Router basename={process.env.BASE_URL}>
                <div className="App">
     

                    
                    
                
                    <Routes>
                      
                        <Route path="/purchase" element={<Purchase/>} />
                        <Route path ="/" element = {<Homepage />}/>


                    </Routes>
                    

                </div>
                


            </Router>

  );
}

export default App;
