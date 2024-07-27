import React, {useState, useRef} from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import FlashMessage from 'react-flash-message';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create()
{

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(false);

    //destructuring for flash data message
    const name = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const address = useRef("");
    const pincode = useRef("");
    const Navigate = useNavigate();

    //create formhandler function
    const addFormData=(e)=>{
        e.preventDefault();
        var ins = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
            pincode: pincode.current.value
        }
        
        const errors={};
        if(!name.current.value)
        {
            errors.name = "Please Enter Your Name";
        }
        if(!email.current.value)
        {
            errors.email = "Please Enter Your Email";
        }
        if(!phone.current.value)
        {
            errors.phone = "Please Enter Your Phone";
        }
        if(!address.current.value)
        {
            errors.address = "Please Enter Your Address";
        }
        if(!pincode.current.value)
        {
            errors.pincode = "Please Enter Your Pincode";
        }

    //call your api here 
    axios.post('http://localhost:4000/add-data',ins).then(()=>{

        if(Object.keys(errors).length == 0)
            {
                setErrors("");
                Swal.fire({
                    title: "success",
                    text: "Data submitted successfully",
                    icon: "success"
                })
                // setMessage(true);
                Navigate('/');
            }
            else
            {
                setErrors(errors);
            }
    })
        e.target.reset();
    }

    return(
        <>
            <Container className="p-5 shadow mt-5">
                <Row>
                    <div className="col-md-4">
                        <img src="https://cdn.dribbble.com/users/8619169/screenshots/16116886/data_inform_illustration_animation.gif" className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <h1 style={{textAlign:"left"}}>Add Data here</h1>
                        <hr></hr>
                        {
                            message && (<FlashMessage duration={5000} persistOnHover={true}>
                            <div className="alert alert-success">Data submitted successfully !!</div>
                          </FlashMessage>)
                        }
                        <form onSubmit={addFormData}>
                            <div className="form-group mt-2">
                                <input type="text" ref={name} placeholder="Name *" className="form-control"></input>
                                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={email} placeholder="Email *" className="form-control"></input>
                                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={phone} placeholder="Phone *" className="form-control"></input>
                                {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={address} placeholder="Address *" className="form-control"></input>
                                {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" ref={pincode} placeholder="Pincode *" className="form-control"></input>
                                {errors.pincode && <p style={{color:"red"}}>{errors.pincode}</p>}
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" name="add" value="Add Data" className="btn btn-md btn-dark text-white d-flex justify-content-start"></input>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container> 
        </>
    )
}
export default Create