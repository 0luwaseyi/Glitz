import React from "react";
import { PRODUCTS } from "../Products";

function Purchase(){

    for (let i = 0; i <= PRODUCTS.length; i++){
        return(
            <div>
                <img src= {PRODUCTS[i].productImage}/>
                <h3>{PRODUCTS[i].productName}</h3>
            
            </div>
        )
        
    }

  
}

export default Purchase;