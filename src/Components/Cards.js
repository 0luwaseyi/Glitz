import 'tachyons'
import AOS from "aos"
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
import { PRODUCTS } from "../Products"
import  CardItems  from "./CardItems";


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
        <div className="flex flex-row flex-wrap gap-5 mt-5 justify-center items-center">
            <div data-aos="zoom-in-right" data-aos-duration="1500" className="grow">
                <ul>
                    <li>
                    {PRODUCTS.map((product)=>{
                 <CardItems data={ product }/>
               })}
                    </li>
                </ul>
            
           
           </div>
             
           </div> 
            </div>
        
        
      
    )

}

export default Cards;