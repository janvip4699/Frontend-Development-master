import React, {useState} from "react";
function MultipleInputs()
{
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //swal messages pass here
        alert("Form successfully submitted");
        
        console.log(inputs);
    }


    return(
        <>
            <div className="p-4 m-5 container-fluid">
            <form className="flex flex-col w-25 mx-auto mt-5" onSubmit={handleSubmit}>
                <label>Enter your name : </label>
                <input type="text" name="username" className="form-control" value={inputs.username || "" }onChange={handleChange}></input>
                <label className="mt-4">Enter your age : </label>
                <input type="text" name="age" className="form-control" value={inputs.age || ""} onChange={handleChange}></input>
                <button type="submit" className="mt-4 btn btn-md bg-black text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
            </form>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {inputs.username} {inputs.age}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default MultipleInputs