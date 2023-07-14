import React, {useEffect} from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

function Footer(){
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div className='bg-gradient-to-r from-purple-900 to-pink-700 text-white text-center mx-auto'>

        
        <div className=' sm:flex flex-row flex-wrap py-10 ml-10 md:flex flex-row xl:flex flex-row space-x-5'>
            <div className='mb-4'>
            <h4>
            Glitz$Glamz
           </h4>
           <h6>Specializes in providing high quality, stylish<br/> products for your wardrobe</h6>
            </div>

            <div className='text-left pl-5 sm:flex flex-row mx-auto md:flex flex-row mx-auto xl:flex flex-row space-x-10'>
              <div>
                <h6>SHOP</h6>
                <p>All collections</p>
                <p>Winter Edition</p>
                <p>Discount</p>
              </div>
              <div>
                <h6>COMPANY</h6>
                <p>About us</p>
                <p>Contacts</p>
                <p>Affiliates</p>
              </div>

              <div>
                <h6>SUPPORT</h6>
                <p>FAQs</p>
                <p>cookie policy</p>
                <p>Terms of use</p>
              </div>

              <div>
                <h6>PAYMENT METHODS</h6>
                <div className='flex flex-row'>
                    <div>
                        
                    </div>
                </div>
              </div>
              
            </div>
          
        </div>
        <hr/>
        <h6>Copyright 2023. Glitz$Glamz. All rights reserved.</h6>
        </div>
    )
}

export default Footer;