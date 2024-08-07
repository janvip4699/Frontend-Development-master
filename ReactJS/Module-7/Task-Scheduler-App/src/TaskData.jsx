import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TaskData()
{
    const [data, setData] = useState();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/add-task").then((response)=>{
            setData(response.data)
        })
    },[data]);

    return(
        <>
            <div className="mt-5 mx-auto text-center">
                <h3>Task Scheduler Data</h3>
                <hr></hr>
                <table className="table border-1 mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task Name</th>
                            <th>Task Priority</th>
                            <th>Task Date</th>
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
                                                    }}>Delete
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