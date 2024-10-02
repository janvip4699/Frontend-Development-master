import React from "react";
import {Link} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
const ApplyNow=()=>{
    return(
        <>
        <Header></Header>
            <div className="container w-50 p-2 bg-yellow-400 rounded-xl">
                <h1 className="text-center">READY TO BREW UP</h1>
                <h1 className="text-center">SUCESS WITH TEALOGY?</h1>
                <form>
                    <div className="flex flex-row">
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="text" placeholder="Name*"></input>
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="email" placeholder="Email Address*"></input>
                    </div>
                    <div>
                    <input className="m-2 p-2 rounded-xl" type="text" placeholder="Contact Number*"></input>
                    </div>
                    <div className="flex flex-row">
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="text" placeholder="City*"></input>
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="email" placeholder="Zip/Postal Code*"></input>
                    </div>
                    <div className="flex flex-col">
                        <select className="p-2 m-2 border border-none outline-none">
                            <option>1 Lakh</option>
                            <option>5 Lakh</option>
                            <option>10 Lakh</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                    <input className="m-2 p-2 rounded-xl" type="text" placeholder="Your Message*"></input>
                    </div>
                    <div className="basis-1/6 ms-2 mt-4 mb-4">
                        <Link to="/call-back"><button className="bg-slate-800 text-white p-3 text-sm">REQUEST A CALL BACK!</button></Link>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}
export default ApplyNow