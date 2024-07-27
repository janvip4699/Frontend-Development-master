import React, {useState, useRef} from "react";
import FlashMessage from "react-flash-message";
import axios from "axios";

const DataStore=()=>{
    
    const[data, setData] = useState(false);
    const[errors, setErrors] = useState({});

    const uname = useRef("");
    const pass = useRef("");

    const submitData=(e)=>{
        
        e.preventDefault();
        var ins = {
            uname : uname.current.value,
            pass : pass.current.value
        }

        const errors = {};
        if(!uname.current.value)
        {
            errors.uname = "Please Enter your Username";
        }
        if(!pass.current.value)
        {
            errors.pass = "Please Enter your Password";
        }

        axios.post('http://localhost:4000/data-store', ins).then(()=>{
            if(Object.keys(errors).length == 0)
            {
                setErrors("");
                setData(true);
                
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
            <div className="p-5 shadow border-1 w-25 mx-auto mt-5">
                <h1 className="text-center">Login Here</h1>
                {
                    data && (
                        <FlashMessage duration={4000} persistOnHover={true}>
                            <div className="alert alert-success">Logged In successfully !!</div>
                        </FlashMessage>
                    )
                }
                <form onSubmit={submitData}>
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Enter Username *" className="form-control" ref={uname}></input>
                        {errors.uname && <p style={{color:"red"}}>{errors.uname}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <input type="password" placeholder="Enter Password *" className="form-control" ref={pass}></input>
                        {errors.pass && <p style={{color:"red"}}>{errors.pass}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <input type="submit" name="submit" value="Login" className="btn btn-md btn-primary form-control"></input>
                    </div>
                </form>
            </div>  
        </>
    )
}
export default DataStore
