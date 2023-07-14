
import AOS from "aos"
import "aos/dist/aos.css"
import React, {useEffect, useState} from 'react'
import Popular from "./Popular";
import Cards from "./Cards"



function Background(){

    const [page, setPage] = useState(true)

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])


    

    


    return(
        <div data-aos="zoom-in" data-aos-duration="1500" className=''>
            <div>
            <h2 className='text-4xl font-bold text-center'><span className=" font-bold text-4xl bg-gradient-to-r from-purple-800 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Exclusive</span> Products</h2>
            </div>

            <div className='text-center mb-4 text-gray-700'>
              Search for the latest fashion articles and find amazing products to buy from our huge collection</div>

              <div class="mr-5 sm:flex flex-wrap mb-4 items-center justify-center">
    <div class="flex border-2 rounded">
        <input type="text" className="px-4 py-2 w-80 bg-gray-100" placeholder="Search..."/>
        <button class="flex items-center flex-wrap justify-center bg-black text-white px-3 border-l">
           Explore
        </button>
    </div>
</div> 


 <div className='flex flex-wrap items-center justify-center gap-9'>
  <div>
  <div class="px-8 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">
    <button onClick = {()=> setPage(!page)}>Everything</button></div>
  </div>
 <div >
 <div class="px-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer">
    <button>Popular</button></div>
  </div>
  <div>
  <div class="px-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer"><button>Hot</button></div>
  </div>
 
 <div>
 <div class="px-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer"><button>Recents</button></div>
 </div>

 <div>
 <div class="px-5 pt-1 pb-1 rounded-md bg-gray-300 hover:bg-purple-700 hover:text-white border-none cursor-pointer"><button>Products</button></div>
 </div>
 
 
  </div>

  <div className="mt-5">
  {page? <Cards/> : <Popular/>}

  </div>

 

        </div>
    )
}

export default Background;