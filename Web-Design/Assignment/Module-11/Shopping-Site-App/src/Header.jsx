import React from "react";
import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
            <div className="container flex flex-row justify-between py-2 border-b-2" id="header">
                <div className="basis-1/2">
                    <ul className="list-none flex flex-row text-gray-400 text-xs">
                        <li className="mx-2">About us</li> |
                        <li className="mx-2">My Account</li> |
                        <li className="mx-2">Wishlist</li> |
                        <li className="mx-2">Order Tracking</li>
                    </ul>
                    </div>
                    <div className="basis-1/2">
                        <ul>
                            <li>Trendy 25 silver jewellery, save 35% off today</li>
                        </ul>
                    </div>
                
            </div>
        </>
    )
}
export default Header