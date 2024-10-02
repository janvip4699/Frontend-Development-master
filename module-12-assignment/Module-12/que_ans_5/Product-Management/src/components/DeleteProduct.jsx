import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DeleteProduct() {

    const[productdata, setproductData] = useState([]);
    const{id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:5000/add-product/${id}`).then(()=>{
            Swal.fire({
                text: "Product deleted Successfully",
                icon: "error"
              });
        
              Navigate('/');
        })
    },[]);

  return (
    <div>
      
    </div>
  )
}
