import React from "react";
import Header from "./components/customer/Header";
import Navbar from "./components/customer/Navbar";
import Content from "./components/customer/Content";
import Footer from "./components/customer/Footer";
function Layout()
{
    return(
        <>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </>
    )
}
export default Layout