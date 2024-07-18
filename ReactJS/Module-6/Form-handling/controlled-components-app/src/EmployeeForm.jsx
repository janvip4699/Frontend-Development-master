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
    });

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
        console.log('Form data successfully submitted', data);
        //swal messages pass here
        Swal.fire({
            title: "Submitted",
            text: "Form data successfully submitted",
            icon: "success"
        });
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
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="email" value={data.email} placeholder="Email" className="form-control" onChange={formHandler}></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" name="mobile" value={data.mobile} placeholder="Mobile" className="form-control" onChange={formHandler}></input>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" name="addemployee" value="Add Employee" className="btn btn-md btn-dark text-white"></input>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default EmployeeForm