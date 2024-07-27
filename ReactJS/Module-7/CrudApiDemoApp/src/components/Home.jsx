import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function Home()
{
    //destructuring of data
    const [data, setData] = useState();
    //fetch all dynamic data
    useEffect(()=>{
        //fetch data here
        axios.get('http://localhost:4000/add-data').then((response)=>{
            setData(response.data);
        })
    },[]);


    return(
        <>
            <Container className="p-4 shadow mt-5">
                <h1 style={{textAlign:"left"}}>React JS CRUD (Create | Read | Update | Delete)</h1>
                <hr></hr>
                <Link to="/add-data"><button type="submit" className="btn btn-md btn-dark text-white mb-3">Add Data</button></Link>
                <table className="table">
                <thead>
                    <tr className="text-center">
                    <th scope="col">#id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* applied loop map */}
                    {data && data.map((item)=>{
                        return(
                            <>
                                <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.pincode}</td>
                                <td><i className="bi bi-trash-fill m-2 border border-1 border-black rounded p-1 text-danger"></i>
                                    <Link to="/edit-data"><i className="bi bi-pencil-fill m-2 border border-1 border-black rounded p-1 text-primary"></i></Link>
                                </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
                </table>

            </Container>
        </>
    )
}
export default Home