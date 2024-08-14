import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { useRef } from "react";
import Swal from "sweetalert2";

function EditAbstract()
{
    const[data, setData] = useState([]);
    const{id} = useParams();
    const Navigate = useNavigate();

    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const address = useRef();
    const message = useRef();
    const photo = useRef();

    useEffect(()=>{
        axios.get(`http://localhost:4000/add-abstract/${id}`).then((response)=>{
            setData(response.data);
            name.current.value = response.data.name;
            email.current.value = response.data.email;
            mobile.current.value = response.data.mobile;
            address.current.value = response.data.address;
            message.current.value = response.data.message;
            photo.current.value = response.data.photo;
        })
    },[]);

    const editData=(e)=> {
        e.preventDefault();

        var edit = {
            name : name.current.value,
            email : email.current.value,
            mobile : mobile.current.value,
            address : address.current.value,
            message : message.current.value,
            photo : photo.current.value,
        }

        axios.put(`http://localhost:4000/add-abstract/${id}`,edit).then(()=>{
            Swal.fire({
                title: "Success",
                text: "Abstract updated Successfully !!",
                icon: "success"
              });
              Navigate('/admin-dashboard/abstract-data');
        })
    }

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
                        <h3>Edit Abstract</h3>
                        <hr></hr>
                        {/* {
                            data && (<FlashMessage duration={5000} persistOnHover={true}>
                                <div className="alert alert-success">
                                    Data submitted successfully !!
                                </div>
                            </FlashMessage>)
                        } */}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" ref={name} className="form-control" placeholder="Name"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" ref={email} className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="text" ref={mobile} className="form-control" placeholder="Mobile"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" ref={address} className="form-control" placeholder="Address"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" ref={message} rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Photo</label>
                                <input type="text" ref={photo} className="form-control" placeholder="Photo"></input>
                            </div>
                            <div className="mb-3">
                                <input type="button" className="btn btn-lg btn-dark" value="Edit Abstract" onClick={editData}></input>
                            </div>
                        </form>
                    </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default EditAbstract