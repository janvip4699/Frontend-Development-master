import React,{useState} from "react";
function UpdateData()
{
    //destructuring of state
    const [name,setName]=useState({
        nm : "Janvi",
        age: 25,
        address: "Amin Marg Rajkot 360004"
    });

    //create a function for update data
    const UpData=()=>{
        setName({
            nm: "Raj",
            age: 27,
            address: "Happy Highland Bopal Ahemdabad"
        })
    }
    return(
        <>
            <h2>My name is : {name.nm} <br/> and my age is : {name.age} <br/> and my address is : {name.address}</h2>
            <h3><button type="button" onClick={UpData}>Update Data</button></h3>
        </>
    )
}
export default UpdateData