import React, { useState, useEffect, useRef } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const CarDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const img = useRef();
    const make = useRef();
    const model = useRef();
    const km = useRef();
    const price = useRef();
    const city = useRef();
    const fuel = useRef();

    useEffect(() => {
        axios.get(`http://localhost:4000/sell-car/${id}`).then((response) => {
            setData(response.data);

            img = response.data.img;
            make = response.data.make;
            model = response.data.model;
            km = response.data.km;
            price = response.data.price;
            city = response.data.city;
            fuel = response.data.fuel;

        })
    }, []);


    return (
        <div>
            <Header></Header>
            <div className='w-full container h-full flex flex-row justify-between mt-10'>
                <div className='w-full'>
                    <img src={data.imgs}></img>
                </div>
                <div className='w-full max-w-sm rounded overflow-hidden shadow-lg mt-10 mr-10'>
                    <div className="px-6 py-4">
                        <p className='font-bold text-3xl'>{data.make} {data.model}</p>
                    </div>
                    <div className="px-6 py-2">
                        <p className='font-semibold text-xl'>Rs. {data.price}</p>
                        <p className='text-sm'>On-Road Price, {data.city}</p>
                    </div>
                    <div className="px-6 py-2">
                        <p className='font-semibold text-xl'>Variant</p>
                        <p className='text-sm'>Available in {data.fuel}</p>
                        <p className='text-sm'>KMs driven : {data.km}</p>
                    </div>
                    <div className="px-6 py-2">
                        <button className='border-2 border-primary font-semibold w-[150px] text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-primary hover:text-secondary transition duration-200 ease-linear'
                        >Get Offers</button>
                    </div>
                    <div className="px-6 py-2">
                        <button className='bg-primary text-white font-bold w-[250px] text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-secondary hover:text-primary transition duration-200 ease-linear'
                        >Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarDetails
