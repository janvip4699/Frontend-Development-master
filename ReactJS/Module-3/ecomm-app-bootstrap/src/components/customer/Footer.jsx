import React from "react";
import {Container, Row} from "react-bootstrap";
function Footer()
{
    return(
        <>
            <Container fluid className="p-5 mt-4 bg-dark">
                <Row>
                    <div className="col-md-3">
                        <h1 className="ms-5 text-white">Flipkart App</h1>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-links">
                            <li><a href=""><h4>Consumer Policy</h4></a></li>
                            <li><a href="">Electronics</a></li>
                            <li><a href="">Footwear</a></li>
                            <li><a href="">Furniture Items</a></li>
                            <li><a href="">Books Selling</a></li>
                            <li><a href="">Mobiles</a></li>
                            <li><a href="">Offers Zone</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-white">Mail Us</h4>
                        <p className="text-white">Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India
                        CIN : U51109KA2012PTC066107
                        Telephone: 044-45614700 / 044-67415800</p>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Footer