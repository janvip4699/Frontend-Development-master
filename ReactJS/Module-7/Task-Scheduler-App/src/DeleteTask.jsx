import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FlashMessage from "react-flash-message";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function DeleteTask()
{
    const[data, setData] = useState(false);
    const{id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/add-task/${id}`).then(()=>{
            Swal.fire({
                title: "Oh",
                text: "Task deleted Successfully !!",
                icon: "error"
              });
            Navigate("/");
        })
    },[]);

    return(
        <>

        </>
    )
}
export default DeleteTask