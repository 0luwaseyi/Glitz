import React, {useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function Discount(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div data-aos="zoom-in" data-aos-duration="1500" className="flex flex-row flex-wrap gap-x-5 justify-center">
            <div className="ml-5 mr-5">
            <img className="w-full object-contain" src={process.env.PUBLIC_URL + '/Discount.jpg'} alt='background'/>
            </div>
            <div className="bg-black-600">
                <h6 className="font-bold text-grey-400 pt-5">Limited offer</h6>
                <h1 className="font-bold">
                    35% off only this friday<br/> and get special gift
                </h1>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Grab it now!
</button>
            </div>
        </div>
    )
}

export default Discount;