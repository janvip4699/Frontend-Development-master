import React from "react";
function Car(props)
{
    return(
        <>
            <li>Car's brand name is : {props.brand}</li>
        </>
    )
}
function Garage1()
{
    const cars = [
        {id: 1, brand: "Tata"},
        {id: 2, brand: "Ford"},
        {id: 3, brand: "Mercedes"}
    ];

    return(
        <>
            <ul>
                {cars.map((car) => <Car key= {car.id} brand={car.brand} />)}
            </ul>
        </>
    )
}
export default Garage1