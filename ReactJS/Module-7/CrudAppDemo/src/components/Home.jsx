import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home()
{
    return(
        <>
            <Container className="p-5 shadow mt-5">
                <h1 style={{textAlign:"left"}}>React JS CRUD (Create | Read | Update | Delete)</h1>
                <hr></hr>
                <Link to="/add-data"><button type="submit" className="btn btn-md btn-dark text-white">Add Data</button></Link>
                <table className="table">
                <thead>
                    <tr>
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Janvi</td>
                    <td>janvip4699@gmail.com</td>
                    <td>9876543210</td>
                    <td>Rajkot</td>
                    <td>360001</td>
                    <td><i className="bi bi-trash-fill m-2 border border-1 border-black rounded p-1 text-danger"></i>
                        <Link to="/edit-data"><i className="bi bi-pencil-fill m-2 border border-1 border-black rounded p-1 text-primary"></i></Link>
                    </td>
                    </tr>
                </tbody>
                </table>

            </Container>
        </>
    )
}
export default Home