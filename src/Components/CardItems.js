import React from "react";

function CardItems(props){

    const { id, productName, price, productImage, description } = props.data

    return(
        <div key={id} className="flex flex-row flex-wrap gap-5 mt-5 justify-center items-center">
            <img src={ productImage }/>
            <h3><b>{productName}</b></h3>
            <div>
                <p>{description}</p>
                </div>
            <div>
               N{price}
            </div>




        </div>
    )
}

export default CardItems;