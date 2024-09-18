import React from 'react'
import Sidebar from './Sidebar'
import BuyCarCard from './BuyCarCard'

const BuyingCars = () => {
  return (
    <div className='w-full container h-screen mt-5'>
        <div className='border-2 border-secondary p-5 rounded-md'>
            <div className='flex flex-row'>
                <div className=''>
                    <h3>Budget :</h3>
                </div>
                <div>
                    <h3>Sort By :</h3>
                </div>
            </div>
        </div>
        <div className='flex flex-row'>
            <div>
                <Sidebar/>
            </div>
            <div className='w-full h-full px-5 py-5'>
                <h1 className='font-bold text-3xl border-b-4'>Best Used Cars</h1>
                <div className='px-4 py-4'>
                    <BuyCarCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyingCars
