import React from "react";
import {Container} from "react-bootstrap"
function OurServices()
{
    return(
        <>
            <Container className="p-5 mt-5">
                <h1>This is Our Services Page</h1>
                <hr className="w-50"></hr>
                <h4>Maintenance</h4>
                <h4>Repairing</h4>
                <h4>Customer Support</h4>
                <h4>Return Policies</h4>
            </Container>
        </>
    )
}
export default OurServices