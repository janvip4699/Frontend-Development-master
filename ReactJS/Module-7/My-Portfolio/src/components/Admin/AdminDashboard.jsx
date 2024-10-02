import React from "react";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import Content from "./Content";
import { Container, Row } from "react-bootstrap";

function AdminDashboard()
{
    return(
        <>
        <div>
            <AdminHeader/>
            <Container fluid className="m-0 p-0">
                <Row>
                    <div className="col-md-3 mt-5 bg-dark"> 
                        <SideBar/>
                    </div>
                    <div className="col-md-9 mt-5 p-5">
                        <Content/>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default AdminDashboard