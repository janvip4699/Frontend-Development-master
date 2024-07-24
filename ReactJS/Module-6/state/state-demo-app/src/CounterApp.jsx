import React,{useState} from "react";
function CounterApp()
{
    //destructuring of state
    const[count,setCount]=useState(0);
    return(
        <>
            <div className="app-counter">
                <h1>Counter is : {count}</h1>
                <h3>
                    <button type="button" onClick={()=>setCount(count+1)}>+</button>
                    <button type="button" onClick={()=>setCount(count-1)}>-</button>
                </h3>
            </div>
        </>
    )
}
export default CounterApp