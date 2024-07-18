import React,{useState} from "react";
function NameApp()
{
    //destructuring of state
    const [name,setName]=useState("Janvi");
    return(
        <>
            <h1>My name is : {name}</h1>
            <button type="button" onClick={()=>setName("Raj")} style={{backgroundColor:"black",color:"white"}}>Update Name</button>
        </>
    )
}
export default NameApp