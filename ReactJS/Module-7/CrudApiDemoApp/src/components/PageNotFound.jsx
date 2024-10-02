import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function PageNotFound()
{
    return(
        <>
           <Container className="shadow p-5 mt-5">
            <h1>Page Not Found</h1>
            <Link to="/"><button type="submit" className="btn btn-md btn-dark text-white mt-3">Goto Home Page</button></Link>
           </Container>
        </>
    )
}
export default PageNotFound