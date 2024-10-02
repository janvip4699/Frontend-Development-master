import React from "react";
import {Container, Row, Button} from "react-bootstrap"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import product1 from '../../assets/images/product1.webp'
import product2 from '../../assets/images/product2.webp'
import product3 from '../../assets/images/product3.webp'
import product4 from '../../assets/images/product4.webp'
function ShopNow()
{
    return(
        <>
        <Header/>
        <Navbar/>
        <Container className="p-5 mt-5">
        <h1>Shop Now</h1>
        <hr></hr>
                <Row>
                    <div className="col-md-4 shadow">
                        <h4 className="text-center text-white bg-dark mt-2 p-2">Select Category</h4>
                        <ul className="sidebar-links">
                            <li><a href="">Electronics</a></li>
                            <li><a href="">Footwear</a></li>
                            <li><a href="">Furniture Items</a></li>
                            <li><a href="">Books Selling</a></li>
                            <li><a href="">Mobiles</a></li>
                            <li><a href="">Offers Zone</a></li>
                        </ul>
                        <h4 className="text-center text-white bg-dark mt-2 p-2">Offers Zone</h4>
                        <div className="mt-4 p-4">
                                <p className="text-center"><img src={product1} className="img-fluid"></img></p>
                                <p className="text-center">Apple iPhone 14 (Blue, 128 GB)</p>
                                <p className="text-center fs-5"><del>Rs. 69900</del> Rs. 57,999</p>
                                <p className="text-center"><Button className="btn btn-md bg-dark text-white">Buy Now</Button></p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h4 className="text-center text-white bg-dark mt-2 p-2">Hurry Up !! 50% Sell Now !!</h4>
                        <Row>
                            <div className="col-md-5 ms-5 shadow mt-4 p-4">
                                <p className="text-center"><img src={product1} className="img-fluid"></img></p>
                                <p className="text-center">Apple iPhone 14 (Blue, 128 GB)</p>
                                <p className="text-center fs-5"><del>Rs. 69900</del> Rs. 57,999</p>
                                <p className="text-center"><Button className="btn btn-md bg-dark text-white">Buy Now</Button></p>
                            </div>
                            <div className="col-md-5 ms-4 shadow mt-4 p-4">
                            <p className="text-center"><img src={product2} className="img-fluid"></img></p>
                                <p className="text-center">Apple iPhone 15 (Blue, 128 GB)</p>
                                <p className="text-center fs-5"><del>Rs. 79,900 </del> Rs. 70,999</p>
                                <p className="text-center"><Button className="btn btn-md bg-dark text-white">Buy Now</Button></p>
                            </div>
                            <div className="col-md-5 ms-5 shadow mt-4 p-4">
                            <p className="text-center"><img src={product3} className="img-fluid"></img></p>
                                <p className="text-center">Apple iPhone 14 (Purple, 128 GB)</p>
                                <p className="text-center fs-5"><del>Rs. 69,900 </del> Rs. 58,999</p>
                                <p className="text-center"><Button className="btn btn-md bg-dark text-white">Buy Now</Button></p>
                            </div>
                            <div className="col-md-5 ms-4 shadow mt-4 p-4">
                            <p className="text-center"><img src={product4} className="img-fluid"></img></p>
                                <p className="text-center">Apple iPhone 13 (Starlight, 128 GB)</p>
                                <p className="text-center fs-5"><del>Rs. 59,900 </del> Rs. 53,999</p>
                                <p className="text-center"><Button className="btn btn-md bg-dark text-white">Buy Now</Button></p>
                            </div>
                        </Row>
                    </div>
                </Row>
            
        </Container>
        <Footer/>
        </>
    )
}
export default ShopNow