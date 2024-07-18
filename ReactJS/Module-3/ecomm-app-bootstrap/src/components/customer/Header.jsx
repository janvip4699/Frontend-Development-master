import React from "react";
import {Container, Row, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
function Header()
{
    return(
        <>
            <Container className="p-4">
            <Row>
                <div className="col-md-3">
                    <strong><span className="bi bi-telephone"></span> Call us : (+91)-9876543210</strong>
                </div>
                <div className="col-md-5">
                    <div className="input-group">
                        <input type="text" placeholder="Search anything here..." className="form-control"></input>
                        <Button className="btn btn-sm btn-dark bg-dark text-white"><span className="bi bi-search"></span></Button>
                    </div>
                </div>
                <div className="col-md-4 position-relative d-flex">
                    <div className="d-flex">
                        <Link to="/create-account"><Button className="btn btn-md btn-dark bg-dark text-white ms-5">Account <span className="bi bi-person"></span></Button></Link>
                    </div>
                    <div className="d-flex">
                        <span className="bi bi-facebook fs-3 ms-5"></span>
                        <span className="bi bi-instagram fs-3 ms-1"></span>
                        <span className="bi bi-twitter fs-3 ms-1"></span>
                        <span className="bi bi-youtube fs-3 ms-1"></span>
                    </div>
                </div>
            </Row>
            </Container>
        </>
    )
}
export default Header