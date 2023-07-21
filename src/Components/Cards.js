import 'tachyons'
import AOS from "aos"
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
import { PRODUCTS } from "../Products"
import CardItems from "./CardItems";


function Cards(){
    
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    })



    return(
        <div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-4xl bg-gradient-to-r from-purple-800 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
            <h2 className="text-center ml-3 sm:ml-20">Top Deals</h2>
        </div>
       
        
        <div className="text-center justify-center gap-4 mb-5 sm:flex flex-row justify-content mt-5 space-x-5 xl:flex flex-row justify-center items-center">
           
                
                    {PRODUCTS.map((product)=>(
                 <CardItems data={ product }/>
                    ))}
    
            
           
           </div>
             
           </div> 
            
        
        
      
    )

}

export default Cards;