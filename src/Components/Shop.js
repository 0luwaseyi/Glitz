import React, {useState} from 'react';
import Background from './Background';
import Cards from './Cards';
import Popular from "./Popular"


function Shop(){

    const [page, setPage] = useState(true)

    

    return(
        <div>

            <Background onClick={()=>setPage(!page)}/>
            {page? <Cards/> : <Popular/>}
        </div>
    )
}

export default Shop;