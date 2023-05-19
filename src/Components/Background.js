
import AOS from "aos"
import "aos/dist/aos.css"
import React, {useEffect} from 'react'



function Background(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    })


    return(
        <div data-aos="zoom-in" data-aos-duration="1500" className=''>
            <div>
            <h2 className='text-4xl font-bold text-center'><h2 className=" font-bold text-4xl bg-gradient-to-r from-purple-800 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Exclusive</h2> Products</h2>
            </div>

            <div className='text-center mb-4 text-gray-700'>
              Search for the latest fashion articles and find amazing products to buy from our huge collection</div>

              <div class="ma-5 sm:flex flex-wrap mb-4 items-center justify-center">
    <div class="flex border-2 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search..."/>
        <button class="flex items-center flex-wrap justify-center bg-black text-white px-3 border-l">
           Explore
        </button>
    </div>
</div>

 <div className='flex flex-wrap items-center justify-center gap-9'>
  <div>
  <div class="pl-8 pr-8 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">Everything</div>
  </div>
 <div >
 <div class="pl-5 pr-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">Popular</div>
  </div>
  <div>
  <div class="pl-5 pr-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">Hot</div>
  </div>
 
 <div>
 <div class="pl-5 pr-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">Recents</div>
 </div>

 <div>
 <div class="pl-5 pr-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">Products</div>
 </div>
 
 
  </div>

        </div>
    )
}

export default Background;