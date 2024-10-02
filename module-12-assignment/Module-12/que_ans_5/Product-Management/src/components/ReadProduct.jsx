import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ReadProduct() {

    const { id } = useParams();
    const [product, setproduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/add-product/${id}`).then((response) => {
            setproduct(response.data);
        })
    }, []);

    return (
        <div>
            <h3 className='mt-5 text-center'>View Product</h3>
            <div className='container p-5 mx-auto w-25 border mt-2'>
                <div className='d-flex align-items-center'>
                    <label className='fw-bold'>Name :</label>
                    <span className='ms-2'>{product && product.name}</span>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <label className='fw-bold'>Price :</label>
                    <span className='ms-2'>{product && product.price}</span>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <label className='fw-bold'>Category :</label>
                    <span className='ms-2'>{product && product.category}</span>
                </div>
            </div>
        </div>
    )
}
