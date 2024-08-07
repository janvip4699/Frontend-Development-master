import React, {useRef, useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import TaskData from "./TaskData";
import FlashMessage from "react-flash-message";

function AddTask()
{
    const taskName = useRef();
    const priority = useRef();
    const date = useRef();

    const[message, setMessage] = useState(false);

    const submitData=(e)=>{
        e.preventDefault();

        var ins = {
            taskName : taskName.current.value,
            priority : priority.current.value,
            date : date.current.value,
        }

        axios.post("http://localhost:8000/add-task",ins).then(()=>{
            setMessage(true);
        })

    }

    return(
        <>
            <div className="col-md-9 mt-5">
            <form className="d-flex flex-row justify-content-center" onSubmit={submitData}>
                <Form.Group className="mx-2 w-25">
                    <input type="text" placeholder='Task Name' className="form-control" ref={taskName}></input>
                </Form.Group>
                <Form.Select className="mx-2 w-25" ref={priority}>
                    <option value="High Priority">High Priority</option>
                    <option value="Low Priority">Low Priority</option>
                </Form.Select>
                <Form.Group className="mx-2 w-25">
                    <input type="date" className="form-control" ref={date}></input>
                </Form.Group>
                <Button type="submit" className="btn btn-sm bg-primary text-white px-2">Add</Button>
            </form>
            <br></br>
            {
                message && (
                    <FlashMessage duration={5000} persistOnHover={true}>
                        <div className="alert alert-success">Task added successfully !!</div>
                    </FlashMessage>
                )
            }
            <TaskData/>
            </div>
        </>
    )
}
export default AddTask