import React from "react";
import { PRODUCTS } from "../Products"
import Purchase from "./Purchase";

function Purchaser(){
    return(

        <div>
               {PRODUCTS.map((product)=>(
                 <Purchase data={ product }/>
                    ))}
    

        </div>

    )
}

export default Purchaser;