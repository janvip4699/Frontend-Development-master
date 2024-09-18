import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='h-screen w-full bg-secondary px-8 py-5'>
            <h1 className='text-3xl font-bold mt-3'>Admin Panel</h1>
            <div>
                <ul className='list-none flex-col gap-10 mt-12 text-md'>
                    <Link to="/admin"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Home</li></Link>
                    <Link to="/admin/users"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Users</li></Link>
                    <Link to="/admin/dashboard"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Buyers</li></Link>
                    <Link to="/admin/sellers/sell-cars-list"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Sellers</li></Link>
                    <Link to="/admin/dashboard"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Cars</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
