import React from "react";
import { US } from 'country-flag-icons/react/3x2'
import { IN } from 'country-flag-icons/react/3x2'
import { BD } from 'country-flag-icons/react/3x2'

function Header()
{
    return(
        <>
            <div className="flex flex-row justify-between py-2 border-b-2" id="header">
                <div className="basis-1/2 mx-3">
                    <ul className="list-none flex flex-row text-gray-400 text-xs">
                        <li className="mx-2">About us</li> |
                        <li className="mx-2">My Account</li> |
                        <li className="mx-2">Wishlist</li> |
                        <li className="mx-2">Order Tracking</li>
                    </ul>
                    </div>
                    <div className="basis-1/2 h-6 overflow-hidden">
                        <ul className="block animate-text-slide">
                            <li className="fs-1 font-bold text-color">100% secure delivery without contacting the cuorier</li>
                            <li className="fs-1 font-bold text-color">Supper Value Deals - Save more with coupons</li>
                            <li className="fs-1 font-bold text-color">Trendy 25 silver jewelry, save 35% off tody</li>
                            <li className="fs-1 font-bold text-color">100% secure delivery without contacting the cuorier</li>
                        </ul>
                    </div>
                    <div className="basis-1/3 flex flex-row text-gray-400 text-xs">
                        <ul className="list-none flex flex-row text-gray-400 text-xs">
                            <li className="mx-2">Need help? Call Us:+88017XXXXX</li>|
                            <li className="mx-3 group relative">
                            English
                            <ul  className="group-hover:flex flex-col animation-menu-transition duration-300 border-2 bg-white hidden absolute w-25 -translate-x-20 translate-y-1">
                                <li className="mx-auto hover:bg-slate-200 py-2 px-7 flex flex-row"><US title="United States" className="w-5 mx-2"/><label>English</label></li>
                                <li className="mx-auto hover:bg-slate-200 py-2 px-7 flex flex-row"><BD title="Bangali" className="w-5 mx-2"/>Bangali</li>
                                <li className=" hover:bg-slate-200 py-2 px-7 flex flex-row"><IN title="India" className="w-5 mx-2"/>Hindi</li>
                            </ul>
                            </li>
                            |<li className="mx-3  group relative">USD
                            <ul  className="group-hover:flex flex-col animation-menu-transition duration-300 border-2 bg-white hidden absolute w-24 -translate-x-20 translate-y-1">
                                <li className="mx-auto hover:bg-slate-200 p-2 px-7"><label>USD</label></li>
                                <li className="mx-auto hover:bg-slate-200 p-2 px-7">BDT</li>
                                <li className="mx-auto hover:bg-slate-200 p-2 px-8">INR</li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                
            </div>
        </>
    )
}
export default Header