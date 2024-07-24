import React from "react";

//store inline styles in multiple objects
const style1 = {
    backgroundColor: "black",
    color: "white",
    width: "50%",
    height: "auto",
    margin: "auto",
    marginTop: "10%",
    padding: "25px"
}
const style2 = {
    color: "white",
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "Arial"
}
const style3 = {
    color: "white",
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "sans-serif"
}

function Inline()
{
    //call each style on jsx elements create function
    const inline1 = {
        ...style1
    }
    const inline2 = {
        ...style2
    }
    const inline3 = {
        ...style3
    }
    return(
        <>
            <div style={inline1}>
                <h1 style={inline2}>Get in touch with Google map</h1>
                <p style={inline3}>Using Inline stylesheet using multiple objects stored reusables</p>
            </div>
        </>
    )
}
export default Inline