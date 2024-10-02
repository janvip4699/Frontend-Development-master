import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CiRead } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function ManageProduct() {

  const [productData, setproductData] = useState();
  const [searchProduct, setsearchProduct] = useState();
  const [filterproductData, setfilterproductData] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/add-product').then((response) => {
      setproductData(response.data);
      setfilterproductData(response.data);
    })
  }, []);

  const handleSearch=(event)=>{
    const value = event.target.value;
    setsearchProduct(value);

    const filter = productData.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()) || item.price.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()));

    setfilterproductData(filter);
  }

  return (
    <div className='container p-5 mx-auto'>
      <div className='d-flex justify-content-between'>
        <h2>Search Product :</h2>
        <Link to="/create-product"><button type="submit" className='btn btn-primary btn-sm fs-5 text-center'><FaPlus /> Create Product</button></Link>
      </div>
      <hr></hr>
      <div>
        <input type="text" placeholder='Search here...' className='form-control w-50 p-2 m-4 mx-auto' value={searchProduct} onChange={handleSearch}>
        </input>
      </div>
      <div>
        <table class="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              filterproductData && filterproductData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td><button type="button" className="btn btn-sm btn-primary text-white m-1" onClick={() => { Navigate(`/read-product/${item.id}`) }}><CiRead className='m-1' />Read</button>
                        <button type="button" className="btn btn-sm bg-info text-white m-1" onClick={() => { Navigate(`/edit-product/${item.id}`) }}><FaEdit className='m-1' />Edit</button>
                        <button type="button" className="btn btn-sm btn-danger text-white m-1" onClick={() => { Navigate(`/delete-product/${item.id}`) }}><ImCross className='m-1' />Delete</button>
                      </td>
                    </tr>
                  </>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
