import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
function PageNotFound()
{
    return (
        <>
        <Header/>
        <Navbar/>
         <Container className="p-5 mt-5">
            <h3>Page Not Found 404 error </h3>
            <img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' alt="404" style={{width:"250px", height:"200px"}} />
            <h4>Click to redirect on Home page <Link to="/">Click here</Link></h4>
         </Container>
         <Footer/>
        </>
    )
}
export default PageNotFound