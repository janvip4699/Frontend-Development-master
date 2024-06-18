import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function PageNotFound()
{
    return (
        <>

         <Container className="p-5 mt-5">
            <h3>Page Not Found 404 error </h3>
            <img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' alt="404" style={{width:"350px", height:"280px"}} />
            <h4>Click to redirect on Home page <Link to="/">Click here</Link></h4>
         </Container>
         

        </>
    )
}
export default PageNotFound