import React from "react";
import {Container} from "react-bootstrap"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Pricing()
{
    return(
        <>
        <Header/>
        <Navbar/>
        <Container className="p-5 mt-5">
        <h1>Pricing</h1>
        <hr></hr>
        
        </Container>
        <Footer/>
        </>
    )
}
export default Pricing