import React, {useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function Discount(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="justify-center  sm:flex flex-row flex-wrap gap-x-5 mx-auto justify-center">
            <div className="ml-5 mr-5">
            <img className="w-full shrink-0
             object-contain" src={'./Discount.jpg'} alt='background'/>
            </div>
            <div className="bg-gradient-to-r from-purple-800 to-pink-400 mx-4 px-4 py-4">
                <h6 className="font-bold text-white pt-5">Limited offer!</h6>
                <h1 className="font-bold text-white">
                    35% off only this friday<br/> and get special gift
                </h1>
                <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 my-auto px-4 border border-blue-700 rounded">
  Grab it now!
</button>
            </div>
        </div>
    )
}


export default Discount;