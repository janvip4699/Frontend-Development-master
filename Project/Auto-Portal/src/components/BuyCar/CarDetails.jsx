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
            <div className='w-full container h-full flex flex-row justify-between'>
                <div className='w-full'>
                    <img src={data.img}></img>
                </div>
                <div className='w-full max-w-sm rounded overflow-hidden shadow-lg'>
                    <div class="px-6 py-4">
                       <p>{data.make}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarDetails
