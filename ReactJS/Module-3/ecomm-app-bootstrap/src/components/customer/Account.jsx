import React from "react";
import ReactDOM from "react-dom/client";
import {Button, Container, Row} from 'react-bootstrap';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import signup from '../../assets/images/signup.png'
function Account()
{
    return(
        <>
        <Header/>
        <Navbar/>
        <Container className="p-5">
                <Row>
                    <div className="col-md-4 shadow">
                        <h4 className="text-center text-white bg-dark mt-2 p-2">Create Account</h4>
                        <ul className="sidebar-links">
                            <li><a href="">Customer Support</a></li>
                            <li><a href="">Register Here</a></li>
                            <img src={signup} style={{width: "100%", height: "250px"}}></img>
                        </ul>
                    
                        
                    </div>
                    <div className="col-md-7 shadow ms-3">
                        <Row>
                        <h4 className="text-center text-white bg-dark mt-2 p-2">Registration Form</h4>
                        <form className="ms-4">
                            <div className="mb-3 mt-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                                </label>
                                <input
                                type="email"
                                className="form-control w-75"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                                </label>
                                <input
                                type="password"
                                className="form-control w-75"
                                id="exampleInputPassword1"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            </form>

                                                    </Row>
                                                </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Account