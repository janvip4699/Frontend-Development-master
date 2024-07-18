import React from "react";
function Car(props)
{
    return(
        <>
            <h1>car's brand is : {props.brand}</h1>
        </>
    )
}
function Garage()
{
    const brand ="Tata";
    return(
        <>
            <Car brand={brand}></Car>
        </>
    )
}
export default Garage