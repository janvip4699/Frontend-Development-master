import React from "react";
function Header()
{
    return(
        <>
            <div className="w-full p-5 bg-black text-yellow-300 flex flex-row">
                <div className="basis-1/4 ms-5">
                    <h3 className="text-xl ms-7 mt-2">Call Us : (+91) 9876543210</h3>
                </div>
                <div className="basis-1/2 ms-20">
                    <input type="text" placeholder="Search Here..." className="w-128 p-3"></input>
                </div>
                <div className="basis-1/4">
                    <span className="text-3xl ms-6 text-yellow-300">
                        <span className="bi bi-facebook"></span>
                        <span className="bi bi-twitter ms-2"></span>
                        <span className="bi bi-instagram ms-2"></span>
                        <span className="bi bi-whatsapp ms-2"></span>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Header