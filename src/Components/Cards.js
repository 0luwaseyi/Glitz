


import 'tachyons'
import AOS from "aos"
import "aos/dist/aos.css"
import React,{useEffect} from 'react'


function Cards(){
    
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    })



    return(
        <div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-4xl bg-gradient-to-r from-purple-800 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
            <h2 className="text-center ml-3 sm:ml-20">Top Deals</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-5 mt-5 justify-center items-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="">
            <img className="w-full rounded-lg mb-3 grow" src={process.env.PUBLIC_URL + '/shoe.jpg'} alt='shoe'/>
            <h4>Nike Sneakers</h4>
            <p>Quality, durable sneakers with <br/> everlasting sole lorem ipsum</p>
            <div className="font-bold flex flex-row gap-x-20"><div><p>Price: N12,000</p>
            </div>
            <div>
                <button className="">
                <svg 
           height='30' 
           width='30'
            xmlns="http://www.w3.org/2000/svg"
             data-name="Layer 1" viewBox="0 0 512 512"
              id="shopping-cart"><path fill='#000000'
               d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z">
                </path>
                </svg>
                </button>
          
            </div>
            </div> 
           
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="">
            <img className="w-full rounded-lg mb-3 grow" src={process.env.PUBLIC_URL + '/shirt.jpg'} alt='shoe'/>
            <h4>Polo shirt</h4>
            <p>Quality, durable sneakers with <br/> everlasting sole lorem ipsum</p>
            <div className="font-bold flex flex-row gap-x-20">
               <div>
               <p>Price: N4,000 </p>
                
               </div>

               <div>
               <button className="">
                <svg 
           height='30' 
           width='30'
            xmlns="http://www.w3.org/2000/svg"
             data-name="Layer 1" viewBox="0 0 512 512"
              id="shopping-cart"><path fill='#000000'
               d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z">
                </path>
                </svg>
                </button>
               </div>
                </div> 
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="">
            <img className="w-full rounded-lg mb-3 grow" src={process.env.PUBLIC_URL + '/trousers.jpg'} alt='shoe'/>
            <h4>Trousers</h4>
            <p>Quality, durable sneakers with <br/> everlasting sole lorem ipsum</p>
            <div className="font-bold flex flex-row gap-x-20">
                <div>
                <p>Price: N5,000 </p>
                </div>

                <div>
                <button className="">
                <svg 
           height='30' 
           width='30'
            xmlns="http://www.w3.org/2000/svg"
             data-name="Layer 1" viewBox="0 0 512 512"
              id="shopping-cart"><path fill='#000000'
               d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z">
                </path>
                </svg>
                </button> 
                </div>
               
                
                </div> 
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="">
            <img className="w-full rounded-lg mb-3 grow" src={process.env.PUBLIC_URL + '/watch.jpg'} alt='shoe'/>
            <h4>Watch</h4>
            <p>Quality, durable sneakers with <br/> everlasting sole lorem ipsum</p>
           <div className="font-bold flex flex-row gap-x-20">
            
           <div>
           <p>Price: N23,500 </p></div>
           <div>
           <button className="">
                <svg 
           height='30' 
           width='30'
            xmlns="http://www.w3.org/2000/svg"
             data-name="Layer 1" viewBox="0 0 512 512"
              id="shopping-cart"><path fill='#000000'
               d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z">
                </path>
                </svg>
                </button> 
           </div>
             
           </div> 
            </div>
        </div>
        </div>
      
    )

}

export default Cards;