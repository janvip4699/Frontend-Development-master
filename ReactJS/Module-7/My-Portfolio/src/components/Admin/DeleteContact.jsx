import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteContact()
{
    const[data, setData] = useState(false);
    const {id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:4000/manage-contacts/${id}`).then(()=>{
            // setData(true);
            Navigate('/admin-dashboard/manage-contacts');
        })
    },[]);

    return(
        <>
        
        </>
    )
}
export default DeleteContact