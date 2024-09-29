import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const Sidebar = ({ onFilter }) => {

  const [citiesData, setcitiesData] = useState();
  const [carMakeData, setcarMakeData] = useState();
  const city = useRef();
  const make = useRef();

  const GetCities = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/locations`);
      setcitiesData(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCities();
  }, [citiesData]);

  const GetCarMake = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/car-make`);
      setcarMakeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCarMake();
  }, [carMakeData]);

  const handleChange=(e)=>{
    const value = e.target.value;
    onFilter(value);
  }

  return (
    <div className='h-screen border-2 border-secondary rounded-md p-5 mt-5 w-[300px] mb-5'>
      <h3 className='text-2xl font-bold'>Filters :</h3>
      <div className='flex flex-col items-center mb-4 mt-4'>
        <div className='flex flex-col'>
          <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
            Select City
          </label>
          <div className="mt-2 w-48 gap-4">
            <select ref={city} className='block w-52 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 mt-2' onChange={handleChange}>
              {citiesData && citiesData.map((item) => {
                return (
                  <option className='hover:bg-secondary text-center py-2' value={item.city}>{item.city}</option>
                );

              })}
            </select>
          </div>
        </div>
        <div className='flex flex-col mt-2'>
          <label htmlFor="make" className="block text-md font-medium leading-6 text-gray-900">
            Make
          </label>
          <div className="mt-2 w-48 gap-4">
            <select variant="standard" className='block w-52 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 mt-2' ref={make}>
              {carMakeData && carMakeData.map((item) => {
                return (
                  <option className='hover:bg-secondary text-center py-2' value={item.make}>{item.make}</option>
                );

              })}

            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
