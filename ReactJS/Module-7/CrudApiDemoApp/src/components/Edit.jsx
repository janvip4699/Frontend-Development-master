import React, {useState} from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

function Edit()
{
    //destructuring of data

    const[data, setData] = useState([]);
    const{id} = useParams();
    const Navigate = useNavigate();

    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const address = useRef();
    const pincode = useRef();

    useEffect(()=>{
        axios.get(`http://localhost:4000/add-data/${id}`).then((response)=>{
            setData(response.data);
            name.current.value = response.data.name;
            email.current.value = response.data.email;
            phone.current.value = response.data.phone;
            address.current.value = response.data.address;
            pincode.current.value = response.data.pincode;
        })
    },[]);

    const editData=(e)=>{
        e.preventDefault();

        var edit = {
            name : name.current.value,
            email : email.current.value,
            phone : phone.current.value,
            address : address.current.value,
            pincode : pincode.current.value,
        }

        axios.put(`http://localhost:4000/add-data/${id}`,edit).then(()=>{
            Swal.fire({
                title: "Success",
                text: "Data updated Successfully !!",
                icon: "success"
            });
            Navigate("/");
        })
    }
    
    // const handleSubmitData=(e)=>{
    //     e.preventDefault();
    //     const errors={};
    //     if(!data.name)
    //     {
    //         errors.name = "Please Enter Your Name";
    //     }
    //     if(!data.email)
    //     {
    //         errors.email = "Please Enter Your Email";
    //     }
    //     if(!data.phone)
    //     {
    //         errors.phone = "Please Enter Your Phone";
    //     }
    //     if(!data.address)
    //     {
    //         errors.address = "Please Enter Your Address";
    //     }
    //     if(!data.pincode)
    //     {
    //         errors.pincode = "Please Enter Your Pincode";
    //     }
        
    //     if(Object.keys(errors).length == 0)
    //     {
    //         setErrors("");
    //         console.log("Data submitted successfully", data);
    //         Swal.fire({
    //             title: "success",
    //             text: "Data submitted successfully",
    //             icon: "success"
    //         })
    //     }
    //     else
    //     {
    //         setErrors(errors);
    //     }
    // }

    return(
        <>
            <Container className="p-5 shadow mt-5">
                <Row>
                    <div className="col-md-4">
                        <img src="https://cdn.dribbble.com/users/8619169/screenshots/16116886/data_inform_illustration_animation.gif" className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <h1 style={{textAlign:"left"}}>Edit Data here</h1>
                        <hr></hr>
                        <form>
                            <div className="form-group mt-2">
                                <input type="text" ref={name} placeholder="Name *" className="form-control"></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={email} placeholder="Email *" className="form-control" ></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={phone} placeholder="Phone *" className="form-control" ></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={address} placeholder="Address *" className="form-control"></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={pincode} placeholder="Pincode *" className="form-control"></input>
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" name="add" value="Update Data" className="btn btn-md btn-dark text-white d-flex justify-content-start" onClick={editData}></input>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container> 
        </>
    )
}
export default Edit