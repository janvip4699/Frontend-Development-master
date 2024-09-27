import React from "react";
import { PiSquaresFour } from "react-icons/pi";

function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between py-2 border-b-2" id="navbar">
                <div className="mx-3 py-2">
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-white font-medium rounded-sm text-center items-center flex flex-row back-color text-lg px-6 py-2"
                        type="button">
                        <PiSquaresFour className="mt-1 mx-1" />Browse All Categories{" "}
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>

                <div className="mx-3 py-4 me-64">
                    <ul className="list-none flex flex-row text-gray-600 text-md font-semibold">
                        <li className="px-4"><i class="bi bi-fire text-color mx-1"></i>Hot Deals</li>
                        <li className="px-4">Home</li>
                        <li className="px-4">About</li>
                        <li className="px-4">Shop</li>
                        <li className="px-4 flex flex-row group relative">Vendors
                        <svg
                            className="w-2.5 h-2.5 ms-3 mt-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4" />
                        </svg>
                        <ul  className="group-hover:flex flex-col animation-menu-transition duration-300 border-2 bg-white hidden absolute w-[180px] -translate-x-23 translate-y-14 text-left">
                                <li className="hover:bg-slate-200 py-1 px-6">Dashboard</li>
                                <li className="hover:bg-slate-200 py-1 px-6">Store Listing</li>
                                <li className="hover:bg-slate-200 py-1 px-6">Store Details</li>
                                <li className="hover:bg-slate-200 py-1 px-6">My Orders</li>
                            </ul>
                        </li>
                        <li className="px-4 flex flex-row">Mega Menu
                        <svg
                            className="w-2.5 h-2.5 ms-3 mt-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4" />
                        </svg>
                        </li>
                        <li className="px-4">Blogs</li>
                        <li className="px-4">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar