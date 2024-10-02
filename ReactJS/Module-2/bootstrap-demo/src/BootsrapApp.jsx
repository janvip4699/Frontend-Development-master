import React from "react";
import { Container, Row, Button } from "react-bootstrap";
function BootstrapApp()
{
    return(
        <>
            <Container className="p-3 bg-dark text-white mt-5">
                <h1>Get in touch with us</h1>
            </Container>
            <Container fluid className="p-3 bg-dark text-white mt-5">
                <Row>
                    <div className="col-md-4 bg-info p-3">
                        <Button className="btn btn-danger p-2">Register <span className="bi bi-person"></span></Button>
                    </div>
                    <div className="col-md-8 bg-white p-3">

                    </div>
                </Row>
            </Container>
        </>
    )
}
export default BootstrapApp