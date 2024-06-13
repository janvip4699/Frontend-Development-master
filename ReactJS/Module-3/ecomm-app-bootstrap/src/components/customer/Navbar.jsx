import React from "react";
import {Nav, NavbarBrand} from 'react-bootstrap'
function Navbar()
{
    return(
        <>
            <Nav className="nav navbar navbar-expand-md bg-dark p-3">
            <NavbarBrand className="text-white ms-5">Flipkart App</NavbarBrand>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Shop Now</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </Nav>
        </>
    )
}
export default Navbar