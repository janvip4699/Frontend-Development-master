import React, {useState} from "react";

function MyForm()
{
    const [name, setName] = useState("");

    return(
        <>
            <form>
                <label>Enter your name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </form>
            <label>Your name is : {name}</label>
        </>
    )
}
export default MyForm