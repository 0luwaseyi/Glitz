import React, {useEffect} from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

function Newsletter(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div data-aos="zoom-in" data-aos-duration="1500">
            <h1 className='font-bold text-2xl sm:font-bold text-center'>
                Subscribe to our Newsletter to get updates <br/> to our latest collections
            </h1>

        <h6 className='text-center text-gray-600 font-bold mx-3 mb-4'>Get 20% off on your first order just by subscribing to our newsletter</h6>
        <div class="ma-5 sm:flex flex-wrap mb-4 items-center justify-center">
    <div class="flex ml-3 mr-3 border-2 rounded">
        <input type="text" className="px-4 py-2 w-80 bg-gray-200 font-bold" placeholder="Enter your mail"/>
        <button class="flex items-center flex-wrap justify-center bg-black rounded font-bold text-white px-3 border-l">
           Subscribe
        </button>
    </div>
</div>
<p className='text-gray-600 font-bold text-center'>You will be able to unsubscribe anytime <br/>Read our privacy policy <a href=''>here</a></p>
        </div>
    )
}

export default Newsletter;