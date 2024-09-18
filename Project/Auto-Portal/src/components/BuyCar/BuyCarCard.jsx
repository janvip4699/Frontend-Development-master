import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BuyCarCard = () => {
  const [data, setData] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/sell-car").then((response) => {
      setData(response.data);
    })
  }, [data]);

  return (
    <div className="text-black rounded-xl mb-2 cursor-pointor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
      {
        data && data.map((item) => {
          return (
            <>
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={item.img} alt="CarImg" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{item.make} <span>{item.model}</span></div>
                  <p className='text-secondary text-sm'>{item.km} Km | {item.fuel} | {item.city} </p>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 flex justify-between">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs. {item.price}</span>
                  <button className='bg-primary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-secondary hover:text-primary transition duration-200 ease-linear' 
                  onClick={() => { Navigate(`/buy-car/car-details/${item.id}`) }}>Book Now</button>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default BuyCarCard
