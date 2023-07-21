import React from "react";
import "./CardItems.css"
import "tachyons"
import {Link} from 'react-router-dom'
import stars from "../assets/stars.png"



function CardItems(props){

    const { id, productName, price, productImage, description } = props.data



    return(
        <div key={id} className="grow mx-auto">
            <Link to ="/purchase"> <img className="rounded-tl-2xl rounded-br-2xl mb-3 mt-5 justify-center items-center inline-flex" src={ productImage }/></Link>
            <h5><b>{productName}</b></h5>
                <p className="text-gray-700"><em>{description}</em></p>
                
            
               <div className="bg-gray-100 mx-10 py-2 rounded-tl-2xl rounded-br-2xl text-gray-700 sm:mx-20">NGN{price}</div>
               <img className="pl-20 sm:pl-30" src = {stars}/>
               <button className="button-color border-gradient">
                Add To Cart
               </button>
            




        </div>
    )
} 

export default CardItems;