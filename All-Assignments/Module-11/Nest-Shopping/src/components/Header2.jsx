import React from "react";
import logo from "../assets/images/logo.png";
import { GoArrowRight } from "react-icons/go";

function Header2() {
    return (
        <>
            <div className="flex flex-row justify-between py-8 border-b-2" id="header2">
                <div className="basis-1/4 mx-3">
                    <img src={logo} alt="logo" className="w-44"></img>
                </div>
                <div className="basis-1/2">
                    <form className="max-w-md">
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-3 text-lg text-gray-900 border border-color dark:placeholder-gray-400 dark:text-white border-2" placeholder="Search for products..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 back-color font-medium rounded-sm text-lg px-5 py-1">Search</button>
                        </div>
                    </form>
                </div>
                <div className="basis-1/6">
                    <button className="flex flex-row text-color shadow px-4 py-1 border border-gray-300 rounded-sm text-lg border hover:-translate-y-1 duration-200 drop-shadow-[0_10px_6px_rgba(0,0,0,0.05)] rounded flex items-center space-x-10 w-40 ms-10">Become <br></br>Vendor<GoArrowRight className="mt-2" /></button>

                </div>
                <div className="basis-1/4">
                    <ul className="list-none flex flex-row text-gray-600 py-4 ms-5">
                        <li className="mx-2 flex flex-row">
                            <i className="bi bi-arrow-repeat mx-1 text-2xl position-relative"></i>
                            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill back-color text-white p-1"><span className="text-sm">0</span></span> */}
                            <span className="text-lg">Compare</span>
                        </li>
                        <li className="mx-2 flex flex-row">
                                <i className="bi bi-heart mx-1 text-2xl position-relative"></i>
                                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill back-color text-white p-1"><span className="text-sm">0</span></span> */}
                            <span className="text-lg">Wishlist</span>
                        </li>
                        <li className="mx-2 flex flex-row">
                                <i className="bi bi-cart3 mx-1 text-2xl position-relative"></i>
                                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill back-color text-white p-1"><span className="text-sm">3</span></span> */}
                            <span className="text-lg">Cart</span>
                        </li>
                        <li className="mx-2 flex flex-row">
                            <div className="relative">
                                <i className="bi bi-person mx-1 text-2xl"></i>
                            </div>
                            <span className="text-lg">Account</span>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}
export default Header2