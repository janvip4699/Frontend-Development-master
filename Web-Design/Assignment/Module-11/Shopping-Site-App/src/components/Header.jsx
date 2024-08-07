import React from "react";
import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
            <div className="container flex flex-row justify-between py-2 border-b-2" id="header">
                <div className="basis-1/2">
                    <ul className="list-none flex flex-row text-gray-400 text-xs">
                        <li className="mx-2"><Link to="/">About us</Link></li> |
                        <li className="mx-2"><Link to="/about-us">My Account</Link></li> |
                        <li className="mx-2"><Link to="/our-presence">Wishlist</Link></li> |
                        <li className="mx-2"><Link to="/our-menu">Order Tracking</Link></li>
                    </ul>
                    </div>
                    <div className="basis-1/2">
                        <a className="font-bold">Trendy 25 silver jewellery, save 35% off today</a>
                    </div>
                
            </div>
        </>
    )
}
export default Header