import React from "react";
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <>
            <div className="container p-4 bg-gray-700 text-white">
                <div className="flex flex-row">
                <div className="basis-1/6">
                    <img src="https://franchise.tealogy.in/wp-content/uploads/2024/06/tealogy-logo.png" width="70%"></img>
                </div>
                <div className="basis-1/1">
                    <ul className="header-links">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about-us">ABOUT US</Link></li>
                        <li><Link to="/our-presence">OUR PRESENCE</Link></li>
                        <li><Link to="/our-menu">OUR MENU</Link></li>
                        <li><Link to="/benefits">BENEFITS</Link></li>
                        <li><Link to="/outlets">OUTLETS</Link></li>
                        <li><Link to="/apply-now">APPLY NOW</Link></li>
                    </ul>
                </div>
                <div className="basis-1/6 ms-10">
                    <Link to="/apply-now"><button className="bg-yellow-400 text-black rounded-3xl p-3 text-sm">APPLY NOW</button></Link>
                </div>
                </div>
            </div>
        </>
    )
}
export default Header