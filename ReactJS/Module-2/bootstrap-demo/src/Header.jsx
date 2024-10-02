import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Navbar from "./Navbar";
function Header()
{
    return(
        <>
        {/* header starts here */}
            <Container fluid className="shadow p-3">
                <Row>
                    <div className="col-md-3">
                        <span className="bi bi-telephone"></span> Call Us (+91) 9987653210
                    </div>
                    <div className="col-md-5">
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search here..." className="form-control"></input>
                            <button type="button" className="btn btn-sm bg-dark text-white"><span className="bi bi-search"></span></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span className="bi bi-facebook fs-3 ms-5"></span>
                        <span className="bi bi-whatsapp fs-3 ms-2"></span>
                        <span className="bi bi-instagram fs-3 ms-2"></span>
                        <span className="bi bi-twitter fs-3 ms-2"></span>
                    </div>
                </Row>
            </Container>
            <Navbar/>
        </>
    )
}
export default Header