import React from "react";
import ReactDOM from "react-dom/client";
import {Nav, NavbarBrand} from "react-bootstrap"
import { Link,Outlet } from "react-router-dom";

function Layout()
{
    return(
        <>
            <Nav className="Navbar Navbar-expand-lg bg-dark p-4">
            <NavbarBrand className="text-white fs-4 ms-5">Flipkart App</NavbarBrand>
            <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/our-services'>Our services</Link></li>
            <li><Link to='/our-gallery'>Gallery</Link></li>
            <li><Link to='/account'>Account</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            </ul>
            </Nav>
            <Outlet/>
        </>
    )
}
export default Layout