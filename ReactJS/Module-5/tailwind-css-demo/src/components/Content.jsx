import React from "react";
import Header from "./Header";
function Content()
{
    return(
        <>
            <Header/>
            <div className="container p-10 bg-blue-300 mx-auto mt-48 shadow-3xl">
                <h1 className="text-center text-5xl mt-5 text-red-900 animate-bounce">Hello Tailwind !!</h1>
                <h4 className="text-center text-3xl text-blue-950 animate-pulse">It's Janvi here!</h4>
            </div>
        </>
    )
}
export default Content