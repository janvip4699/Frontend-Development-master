import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import DeleteSellCar from '../Sellers/DeleteSellCar';

export default function AllCars() {

    const [carsData, setcarsData] = useState();
    const [DeleteMessage, setDeleteMessage] = useState(false);
    const Navigate = useNavigate();

    const coulumns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
            wrap: true
        },
        {
            name: "Make",
            selector: (row) => row.make,
            sortable: true,
            wrap: true
        },
        {
            name: "Model",
            selector: (row) => row.model,
            sortable: true,
            wrap: true
        },
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true,
            wrap: true
        },
        {
            name: "Fuel Selection",
            selector: (row) => row.fuel,
            sortable: true,
            wrap: true
        },
        {
            name: "Color",
            selector: (row) => row.color,
            sortable: true,
            wrap: true
        },
        {
            name: "KMs",
            selector: (row) => row.km,
            sortable: true,
            wrap: true
        },
        {
            name: "Owner",
            selector: (row) => row.owner,
            sortable: true,
            wrap: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true,
            wrap: true
        },
        {
            name: "Image",
            selector: (row) => (<img src={row.imgs} className="w-16 h-16"></img>),
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <span>
                    <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/cars/delete-car/${row.id}`) }}>
                        <span><MdDelete /></span>
                    </button>
                </span>
            ),
        },
    ];

    const GetCars = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/sell-car`);
            setcarsData(response.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetCars();
    }, [carsData]);

    return (
        <div>
            <div className="flex">
                <div className="basis-[18%]">
                    <Sidebar></Sidebar>
                </div>
                <div className="bg-gray-300/40 basis-[82%]">
                    <Header></Header>
                    <h1 className="text-2xl font-bold p-4">Cars Management</h1>
                    <div className=" bg-white p-4 m-2 shadow-lg">
                    <DeleteSellCar isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteSellCar>

                    <DataTable
                        columns={coulumns}
                        data={carsData}
                        pagination
                        fixedHeader
                        highlightOnHover
                        fixedHeaderScrollHeight="290px"

                    />
                </div>
                </div>
            </div>
        </div>
    )
}
