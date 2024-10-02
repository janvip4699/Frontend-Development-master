import React from "react";
const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="bg-gray-700 p-5 text-white">
                    <img src="https://franchise.tealogy.in/wp-content/uploads/2024/06/tealogy-logo.png"></img>
                    <p className="mt-10 w-50">Contact us today to learn more about franchise opportunities and start your journey towards a rewarding tea business!</p>
                    <div className="contact-details mt-10 w-50">
                        <span className="bi bi-phone"> +915515454415</span>
                        <hr className="w-full "></hr>
                        <span className="bi bi-geo-alt-fill"> Head Office - 503-A/B, 5th Floor Princess Business Sky Park Block no. 23,24 SCH No.54, PU-3 Commercial, Opp C21, AB Rd, Indore, Madhya Pradesh 452001</span>
                        <hr className="w-full"></hr>
                       <span className="bi bi-geo-alt-fill"> Company Outlet - UG - 7, PL-14, Airen Heights PU-3, Sch. No 54, Vijay Nagar, Indore</span>
                    </div>
                </div>
                <div className="copyright bg-black">
                    <p className="text-center text-white font-bold font-2xl p-3">Copyright &#169; 2022 Tealogy</p>
                </div>
            </div>
        </>
    )
}
export default Footer