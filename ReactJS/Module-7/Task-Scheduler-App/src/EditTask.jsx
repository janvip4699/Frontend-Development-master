import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import FlashMessage from "react-flash-message";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function EditTask() {
    const [data, setData] = useState(false);
    const { id } = useParams();
    const Navigate = useNavigate();

    const taskName = useRef();
    const priority = useRef();
    const date = useRef();

    useEffect(() => {
        axios.get(`http://localhost:8000/add-task/${id}`).then((response) => {
            setData(response.data);
            taskName.current.value = response.data.taskName;
            priority.current.value = response.data.priority;
            date.current.value = response.data.date;
        })
    }, []);

    const editData = (e) => {
        e.preventDefault();

        var edit = {
            taskName: taskName.current.value,
            priority: priority.current.value,
            date: date.current.value,
        }

        axios.put(`http://localhost:8000/add-task/${id}`, edit).then(() => {
            Swal.fire({
                title: "Success",
                text: "Task updated Successfully !!",
                icon: "success"
              });
              Navigate("/");
        })
    }


    return (
        <>
            <div>
                <Container fluid className="w-100 bg-primary p-4">
                    <h1 className="text-white text-center">Task Scheduler App</h1>
                </Container>
                <Container fluid className="border shadow w-75 mx-auto mt-5">
                    <Row>
                        <div className='col-md-3 mt-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BtLhkORsgCvCDFhKq9ZQ0ICDjaxJAntxfA&s"></img>
                        </div>
                        <div className="col-md-9 mt-5">
                            <h3 className="text-center">Edit Task</h3>
                            <hr className="mb-5"></hr>
                            <form className="d-flex flex-row justify-content-center">
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
                                <button type="button" className="btn btn-md bg-primary text-white mx-2 " onClick={editData}>
                                Update
                                </button>
                            </form>
                            <br></br>
                            {/* {
                                data && (
                                    <FlashMessage duration={5000} persistOnHover={true}>
                                        <div className="alert alert-success">Task Updated successfully !!</div>
                                    </FlashMessage>
                                )
                            } */}
                        </div>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default EditTask