import React, {useRef} from "react";
import { Container } from "react-bootstrap";
function UncontrolledComp()
{
    //store all names in variables
    const name = useRef("");
    const email = useRef("");
    const mobile = useRef("");
    const address = useRef("");

    //create a function for take data of form
    const handleFormData=(e)=>{
        e.preventDefault();
        var ins = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            address: address.current.value
        }
        console.log("Data submitted successfully", ins);
    }

    return(
        <>
            <Container className="mt-5 p-5 shadow w-50 mx-auto">
                <form onSubmit={handleFormData}>
                    <h3>Form Handling through Uncontrolled Components</h3>
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Name*" className="form-control" ref={name}></input>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Email*" className="form-control" ref={email}></input>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Mobile*" className="form-control" ref={mobile}></input>
                    </div>
                    <div className="form-group mt-3">
                        <textarea type="text" placeholder="Address*" className="form-control" ref={address}></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <input type="submit" value="Register" className="btn btn-dark text-white"></input>
                    </div>
                </form>
            </Container>
        </>
    )
}
export default UncontrolledComp