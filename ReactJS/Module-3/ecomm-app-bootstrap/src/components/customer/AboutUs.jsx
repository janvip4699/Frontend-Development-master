import React from "react";
import {Container} from "react-bootstrap"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AboutUs()
{
    return(
        <>
        <Header/>
        <Navbar/>
        <Container className="p-5 mt-5">
        <h1>About Us</h1>
        <hr></hr>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ea est quas sed et quaerat? Deserunt, fugit et natus pariatur maiores, facere tempore veritatis possimus amet autem veniam dicta libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ea est quas sed et quaerat? Deserunt, fugit et natus pariatur maiores, facere tempore veritatis possimus amet autem veniam dicta libero!</p>
        </Container>
        <Footer/>
        </>
    )
}
export default AboutUs