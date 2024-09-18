import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteData()
{
    const[data, setData] = useState(false);
    const {id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:4000/add-abstract/${id}`).then(()=>{
            // setData(true);
            Navigate('/admin-dashboard/abstract-data');
        })
    },[]);

    return(
        <>
        
        </>
    )
}
export default DeleteData