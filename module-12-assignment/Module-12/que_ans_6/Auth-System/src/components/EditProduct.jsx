import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditProduct() {

    const [productData, setproductData] = useState();
    const [message, setMessage] = useState();

    const {id} = useParams();
    const name = useRef();
    const price = useRef();
    const category = useRef();
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/add-product/${id}`).then((response) => {
          name.current.value = response.data.name;
          price.current.value = response.data.price;
          category.current.value = response.data.category;
        })
      }, [productData]);

      const editProduct=(e)=>{
        e.preventDefault();

        var edit = {
            name : name.current.value,
            price : price.current.value,
            category : category.current.value,
        }

        axios.put(`http://localhost:5000/add-product/${id}`,edit).then(()=>{
            Swal.fire({
                title: "success",
                text: "Product updated Successfully",
                icon: "success"
              });
            Navigate("/");
        })
    }


    return (
        <div>
            <h3 className='mt-5 text-center'>Update Product</h3>
            <div className='container p-5 mx-auto w-25 border mt-2'>
                <form>
                    {
                        message && <div className='bg-primary text-white px-2 py-2 mb-2'>
                            Product updated successfully!!
                        </div>
                    }
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
                    <button type="submit" className="btn btn-primary mt-2" onClick={editProduct}>
                        Update Product
                    </button>
                </form>
            </div>

        </div>
    )
}
