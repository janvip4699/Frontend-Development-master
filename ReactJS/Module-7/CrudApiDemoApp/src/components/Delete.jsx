import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Delete=()=>{

    //destructuring of data
    const[data, setData] = useState([]);
    const{id} = useParams();
    const Navigate = useNavigate();

    //create a delete data via axios.delete()
    useEffect(()=>{
        axios.delete(`http://localhost:4000/add-data/${id}`).then(()=>{
            Swal.fire({
                title: "Oh",
                text: "Yor data is deleted Successfully",
                icon: "error"
              });
        
              Navigate('/');
        })
    },[]);

    return(
        <>
        
        </>
    )
}
export default Delete
