import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function TaskData()
{
    const [data, setData] = useState();
    const Navigate = useNavigate();

    const [len, setLen] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8000/add-task").then((response)=>{
            setData(response.data);
            setLen(response.data.length);
        })
    },[data]);

    return(
        <>

            <div className="mx-auto bg-primary p-2 rounded w-50">
                <h3 className="text-white p-2">Total number of tasks<span class="badge text-bg-secondary mx-2">{len}</span></h3>
            </div>
            <div className="mt-5 mx-auto text-center">
                <h3>Task Scheduler Data</h3>
                <hr></hr>
                <table className="table border-1 mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task Name</th>
                            <th>Task Priority</th>
                            <th>Task Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           data && data.map((item)=>{
                                return(
                                    <>
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.taskName}</td>
                                            <td>{item.priority}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <button type="button" className="btn btn-md bg-danger text-white" onClick={
                                                    ()=>{
                                                       Navigate(`/delete-task/${item.id}`) 
                                                    }}><span className="bi bi-trash text-white"></span>
                                                </button>
                                                <button type="button" className="btn btn-md bg-primary text-white mx-2 " onClick={
                                                    ()=>{
                                                       Navigate(`/edit-task/${item.id}`) 
                                                    }}><span className="bi bi-pencil text-white"></span>
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default TaskData