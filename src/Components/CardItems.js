import React from "react";
import "./CardItems.css"
import "tachyons"


function CardItems(props){

    const { id, productName, price, productImage, description } = props.data



    return(
        <div className="grow mx-auto">
            <img className="mb-3 mt-5 justify-center items-center inline-flex" src={ productImage }/>
            <h4><b>{productName}</b></h4>
                <p>{description}</p>
                
            
               <div><b>Price: N{price}</b></div>
               <button className="button-color border-gradient">
                Add To Cart
               </button>
            




        </div>
    )
} 

export default CardItems;