import React, {useState} from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function Create()
{
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: ""
    });

    const [errors, setErrors] = useState({});

    const formHandler=(e)=>{
        const{name,value}=e.target;
        setData({
            ...data,[name]:value
        })
    }
    
    const handleSubmitData=(e)=>{
        e.preventDefault();
        const errors={};
        if(!data.name)
        {
            errors.name = "Please Enter Your Name";
        }
        if(!data.email)
        {
            errors.email = "Please Enter Your Email";
        }
        if(!data.phone)
        {
            errors.phone = "Please Enter Your Phone";
        }
        if(!data.address)
        {
            errors.address = "Please Enter Your Address";
        }
        if(!data.pincode)
        {
            errors.pincode = "Please Enter Your Pincode";
        }
        
        if(Object.keys(errors).length == 0)
        {
            setErrors("");
            console.log("Data submitted successfully", data);
            Swal.fire({
                title: "success",
                text: "Data submitted successfully",
                icon: "success"
            })
        }
        else
        {
            setErrors(errors);
        }
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
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mt-2">
                                <input type="text" name="name" placeholder="Name *" className="form-control" onChange={formHandler}></input>
                                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="email" placeholder="Email *" className="form-control" onChange={formHandler}></input>
                                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="phone" placeholder="Phone *" className="form-control" onChange={formHandler}></input>
                                {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="address" placeholder="Address *" className="form-control" onChange={formHandler}></input>
                                {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="pincode" placeholder="Pincode *" className="form-control" onChange={formHandler}></input>
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