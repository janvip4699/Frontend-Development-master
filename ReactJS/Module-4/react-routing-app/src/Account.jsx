import React from "react";
import {AccordionButton, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
function Account()
{
    return(
        <>
            <Container className="p-5 mt-5">
                <h1>This is Account Page</h1>
                <hr className="w-50"></hr>
                <p>Click here to create your account <Link to="">Register here</Link></p>
            </Container>
        </>
    )
}
export default Account