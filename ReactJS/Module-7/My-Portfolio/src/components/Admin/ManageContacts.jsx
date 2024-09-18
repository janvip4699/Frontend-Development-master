import React, {useState, useRef, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FlashMessage from "react-flash-message";
import { ExportToExcel } from "./ExportToExcel";

function ManageContacts()
{
    const[data, setData] = useState();
    const Navigate = useNavigate();

    const fileName = "managecontactdata"; 

    useEffect(()=>{
        axios.get("http://localhost:4000/manage-contacts").then((response)=>{
            setData(response.data);
        })
    },[data]);

    return(
        <>
            <div>
                <AdminHeader/>
                <Container fluid className="m-0 p-0">
                    <Row>
                    <div className="col-md-3 bg-dark">
                        <SideBar/>
                    </div>
                    <div className="col-md-8 mt-5 p-5">
                        <div className="d-flex justify-content-between">
                            <h3>Contact Data</h3>
                            <ExportToExcel apiData={data} fileName={fileName} />
                        </div>
                       <hr></hr>
                       {/* {
                            data && (
                                <FlashMessage duration={5000} persistOnHover={true}>
                                    <div className="alert alert-danger">Abstract deleted successfully !!</div>
                                </FlashMessage>
                            )
                       } */}
                    <table className="table border-1 p-5">
                        <thead>
                            <tr className="text-center">
                                <th>#id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item)=>{
                                    return(
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.message}</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm bg-danger m-1" onClick={()=>{Navigate(`/admin-dashboard/delete-contact/${item.id}`)}}><span className="bi bi-trash text-white"></span></button>
                                                    <button type="button" className="btn btn-sm bg-primary m-1" onClick={()=>{Navigate(`/edit-data/${item.id}`)}}><span className="bi bi-pencil text-white"></span></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default ManageContacts