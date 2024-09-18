import React, { useState, useRef } from 'react'
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellCarForm = () => {

    const [data, setData] = useState();

    const city = useRef();
    const make = useRef();
    const model = useRef();
    const fuel = useRef();
    const color = useRef();
    const km = useRef();
    const owner = useRef();
    const price = useRef();
    const imgs = useRef();

    const Navigate = useNavigate();

    const submitData=(e)=>{
        e.preventDefault();
        var ins = {
            city : city.current.value,
            make : make.current.value,
            model : model.current.value,
            fuel : fuel.current.value,
            color : color.current.value,
            km : km.current.value,
            owner : owner.current.value,
            price : price.current.value,
            imgs : imgs.current.value
        }

        axios.post("http://localhost:4000/sell-car", ins).then(()=>{
            Navigate("/");
        })
        e.target.reset();
    }

    return (
        <div className='xl:container mx-auto mb-32'>
            <div className='flex justify-center'>
                <h1 className='text-3xl uppercase pt-12 text-black'>Car Details</h1>
            </div>
            <div className='px-4 sm:w-2/3 lg:w-3/4 mx-auto h-screen'>
                <div className='rounded-sm shadow-lg bg-white -mt-14 py-10 md:py-12 px-4 md:px-6 flex flex-col items-center justify-center'>
                    <form className='flex flex-col mt-16 px-20 gap-10' onSubmit={submitData}>
                        <div className='flex space-x-10 mb-4'>
                            <div className="sm:col-span-6">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    Select City
                                </label>
                                <div className="mt-2 flex w-48 gap-6">
                                    <select variant="standard" ref={city} className='px-2 py-2'>
                                        <option className='hover:bg-secondary text-center py-2' value="Rajkot">Rajkot</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Ahemdabad">Ahemdabad</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Baroda">Baroda</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Surat">Surat</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Mumbai">Mumabai</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Pune">Pune</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="make" className="block text-sm font-medium leading-6 text-gray-900">
                                    Make
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="make"
                                        name="make"
                                        type="text"
                                        autoComplete="make"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={make}
                                        placeholder='Make of car'
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                                    Model
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="model"
                                        name="model"
                                        type="text"
                                        autoComplete="model"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={model}
                                        placeholder='Model name'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-10 mb-4'>
                            <div className="sm:col-span-6">
                                <label htmlFor="fuel" className="block text-sm font-medium leading-6 text-gray-900">
                                    Fuel Selection
                                </label>
                                <div className="mt-2 flex w-48 gap-6">
                                    <select variant="standard" ref={fuel} className='px-2 py-2'>
                                        <option className='hover:bg-secondary text-center py-2' value="Petrol">Petrol</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Diesel">Diesel</option>
                                        <option className='hover:bg-secondary text-center py-2' value="CNG">CNG</option>
                                        <option className='hover:bg-secondary text-center py-2' value="LPG">LPG</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                                    Color
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="color"
                                        name="color"
                                        type="text"
                                        autoComplete="color"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={color}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="km" className="block text-sm font-medium leading-6 text-gray-900">
                                    Kilometers Driven
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="km"
                                        name="km"
                                        type="text"
                                        autoComplete="km"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        ref={km}
                                        placeholder='Kilometers driven'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-10 mb-4'>
                            <div className="sm:col-span-6">
                                <label htmlFor="owner" className="block text-sm font-medium leading-6 text-gray-900">
                                    Owner
                                </label>
                                <div className="mt-2 flex w-48 gap-6">
                                    <select variant="standard" ref={owner} className='px-2 py-2'>
                                        <option className='hover:bg-secondary text-center py-2' value="First owner">First owner</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Second owner">Second owner</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Third owner">Third owner</option>
                                        <option className='hover:bg-secondary text-center py-2' value="Four or more owners">Four or more owners</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Expected Selling Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="price"
                                        name="price"
                                        type="text"
                                        autoComplete="price"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        placeholder='Expected selling price'
                                        ref={price}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <>
                                    <label
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                        htmlFor="multiple_files">
                                        Upload Car Images
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            id="multiple_files"
                                            type="file"
                                            multiple=""
                                            ref={imgs}
                                        />
                                    </div>
                                </>

                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-primary px-3 py-2 text-lg font-semibold text-white shadow-sm hover:primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Post Your AD
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SellCarForm
