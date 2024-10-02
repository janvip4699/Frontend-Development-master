import React, {useState, useRef, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FlashMessage from "react-flash-message";

function AbstractData()
{
    const[data, setData] = useState();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4000/add-abstract").then((response)=>{
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
                       <h3>Abstract Data</h3>
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
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
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
                                                <td><img src={item.photo} className="w-100"></img></td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.address}</td>
                                                <td>{item.message}</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm bg-danger m-1" onClick={()=>{Navigate(`/admin-dashboard/delete-data/${item.id}`)}}><span className="bi bi-trash text-white"></span></button>
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
export default AbstractData