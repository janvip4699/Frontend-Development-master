import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function AdminHeader()
{
    return(
        <>
            <Navbar expand="lg" className="bg-dark w-100 fixed-top z-1" data-bs-theme="dark">
                <Container>
                    <NavbarBrand href="#" className="fs-2"><span className="text-light">Admin Dashboard</span></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100 d-flex justify-content-end">
                            <Nav.Link href="#header">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default AdminHeader