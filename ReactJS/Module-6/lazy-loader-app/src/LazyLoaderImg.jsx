import React, { useState,useEffect } from "react";
import img from '../src/assets/loader.gif';
function LazyLoaderImg()
{
    const[count,setCount]=useState(0);
    const[loader,setLoader]=useState(true);
    // applied lazy loaders
    useEffect(()=>{

    setTimeout(()=>{

    setLoader(false);

    },3000)


    },[]);


    return(
    loader ? 
    <>
    <div className="loader-style">
    <img src={img} className="img-fluid" />
    </div>
    </>
    :
    <>
    <div className="w-50 mx-auto shadow p-5 mt-5 loader-style text-white">
    <p className="fs-3 text-center">Count initial data is : {count}</p>
    <p className="text-center"><button type="button" className="btn btn-success text-white bg-success btn-md" onClick={()=>{setCount(count+1)}}>Increments</button>

    <button type="button" className="btn btn-danger text-white bg-danger btn-md ms-4" onClick={()=>{setCount(count-1)}}>Decrements</button>
    </p>
    </div>       
    </>
    )

}

export default LazyLoaderImg