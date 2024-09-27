import React,{useState} from "react";
function IncDecCounter()
{
    const[count,setCount]= useState(0);
    return(
        <>
            <div className="inc_dec_counter">
                <h1>React Web</h1>
                <h2>{count}</h2>
                <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
                <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
                <br/>
                <button type="button" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </>
    )
}
export default IncDecCounter