import React, {useState, useRef} from "react";
import { Container, Row } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FlashMessage from "react-flash-message";

function AddAbstract()
{
    const[data, setData] = useState(false);

    const name = useRef("");
    const email = useRef("");
    const mobile = useRef("");
    const address = useRef("");
    const message = useRef("");
    const photo = useRef("");
    const Navigate = useNavigate();

    const submitData=(e)=>{
        
        e.preventDefault();
        var ins = {
            name : name.current.value,
            email : email.current.value,
            mobile : mobile.current.value,
            address : address.current.value,
            message : message.current.value,
            photo : photo.current.value
        }

        axios.post("http://localhost:4000/add-abstract",ins).then(()=>{
            setData(true);
            Navigate('/admin-dashboard/abstract-data');
        })
        e.target.reset();
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
                        <h3>Add Abstract</h3>
                        <hr></hr>
                        {
                            data && (<FlashMessage duration={5000} persistOnHover={true}>
                                <div className="alert alert-success">
                                    Data submitted successfully !!
                                </div>
                            </FlashMessage>)
                        }
                        <form onSubmit={submitData}>
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
                                <input type="submit" className="btn btn-lg btn-dark" value="Add Abstract"></input>
                            </div>
                        </form>
                    </div>
                    </Row>
                </Container>
            </div>           
        </>
    )
}
export default AddAbstract