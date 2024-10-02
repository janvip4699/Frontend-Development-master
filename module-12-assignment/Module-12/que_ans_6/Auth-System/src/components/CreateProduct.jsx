import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CreateProduct() {

    // const [productData, setproductData] = useState();
    // const [message, setMessage] = useState();

    const name = useRef();
    const price = useRef();
    const category = useRef();
    const Navigate = useNavigate();

    const addProductData = (e) => {
        e.preventDefault();

        var ins = {
            name: name.current.value,
            price: price.current.value,
            category: category.current.value,
        };
        axios.post(`http://localhost:5000/add-product`, ins).then(() => {
            Swal.fire({
                title: "success",
                text: "Product created Successfully",
                icon: "success"
              });
            Navigate("/")
        })
        e.target.reset();
    };

    return (
        <>
            <h3 className='mt-5 text-center'>Create Product</h3>
            <div className='container p-5 mx-auto w-25 border mt-2'>
                <form onSubmit={addProductData}>
                    {/* {
                        message && <div className='bg-primary text-white px-2 py-2 mb-2'>
                            Product created successfully!!
                        </div>
                    } */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            ref={name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            ref={price}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Category
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            ref={category}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Add Product
                    </button>
                </form>
            </div>
        </>
    )
}
