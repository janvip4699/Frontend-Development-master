import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";

function Navbar()
{
    return(
        <>
            {/* Navbar starts here */}
            <Nav className="nav navbar navbar-expand-md bg-dark">
                <NavbarBrand className="navbar-brand text-white ms-5">
                    My App
                </NavbarBrand>
                <ul>
                    <li><a href="" className="ms-5">Home</a></li>
                    <li><a href="" className="ms-5">About Us</a></li>
                    <li><a href="" className="ms-5">Gallery</a></li>
                    <li><a href="" className="ms-5">Services</a></li>
                    <li><a href="" className="ms-5">Portfolio</a></li>
                    <li><a href="" className="ms-5">Account</a></li>
                </ul>
            </Nav>
        </>
    )
}
export default Navbar