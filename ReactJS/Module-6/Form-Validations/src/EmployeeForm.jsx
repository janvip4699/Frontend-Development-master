import React,{useState} from "react";
import Swal from "sweetalert2";
import {Container, Row} from 'react-bootstrap'

function EmployeeForm()
{
    //usestate using to destructuring of data
    const[data,setData]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    });

    //destructuring of data for form validations
    const[errors, setErrrors]=useState({});

    //create a function for validations
    const validate=()=>{
        const errors={};
        //pass message for name
        if(!data.name)
        {
            errors.name = "Please Enter your Name";
        }
        if(!data.email)
        {
            errors.email = "Please Enter your Email";
        }
        if(!data.mobile)
        {
            errors.mobile = "Please Enter your Mobile";
        }
        if(!data.address)
        {
            errors.address = "Please Enter your Address";
        }
        return errors;
    }
    

    //form handler function
    const formHandler=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        setData({
            ...data,[name]:value
        })
        //e.target.reset();
    }

    //create a function for submit data
    const handleSubmitData=(e)=>{
        e.preventDefault();
        //when form submitted blank data pass validations
        const errors=validate();
        if(Object.keys(errors).length==0)
        {
            console.log('Form data successfully submitted', data);
            //swal messages pass here
            Swal.fire({
                title: "Submitted",
                text: "Form data successfully submitted",
                icon: "success"
            });
        }
        else
        {
            setErrrors(errors);
        }
        // window.location.reload();
    }
    return(
        <>
            <Container className="p-5 w-75 mx-auto mt-5">
                <Row>
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK3hf9kn0o4wSBzq7j2FvUpPgzZOjL58O7A&s" className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <h2>Form Handling</h2>
                        <form onSubmit={handleSubmitData}>
                            <div className="form-group mt-2">
                                <input type="text" name="name" value={data.name} placeholder="Name" className="form-control" onChange={formHandler}></input>
                                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="email" value={data.email} placeholder="Email" className="form-control" onChange={formHandler}></input>
                                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="mobile" value={data.mobile} placeholder="Mobile" className="form-control" onChange={formHandler}></input>
                                {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <textarea name="address" value={data.mobiaddressle} placeholder="Address" className="form-control" onChange={formHandler}></textarea>
                                {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" name="addemployee" value="Add Employee" className="btn btn-md btn-dark text-white"></input>
                                <input type='reset' name="reset" value="Reset" className="btn btn-md btn-dark ms-3 text-white" />
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default EmployeeForm