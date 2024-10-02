import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';
import axios from 'axios';

const Header = () => {

  const { logOut, user } = useUserAuth();
  const [locationData, setLocationData] = useState();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    }
    catch (error) {
      console.log(error.message);
    }
  };

  const GetCities = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/locations`);
      setLocationData(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCities();
  }, [locationData]);

  return (
    <header className='bg-primary text-secondary py-4 w-full'>
      <nav className='container flex gap-20 items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Link to="/home" className='font-semibold text-3xl'>AutoPortal</Link>
          <img src={logo} alt="logoimg" style={{ width: "100%", height: "40px" }}></img>
        </div>
        <div className='hidden md:flex items-center gap-5 font-medium text-lg'>
          <Link to="/home" className="hover:text-black transition duration-200 ease-linear">Home</Link>
          <Link to="/about" className="hover:text-black transition duration-200 ease-linear">About Us</Link>
          <Link to="/buy-car" className="hover:text-black transition duration-200 ease-linear">Buy Car</Link>
          <Link to="/sell-car" className="hover:text-black transition duration-200 ease-linear">Sell Car</Link>
          <Link to="/contact-us" className="hover:text-black transition duration-200 ease-linear">Contact Us</Link>

          {/* <div className="relative inline-block text-center">
            <div className="group">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full px-2 py-2 text-sm font-medium text-white hover:text-black focus:outline-none focus:bg-gray-700"
              >
                <SlLocationPin size={30} className='text-secondary hover:text-black' />
                {/* Dropdown arrow */}
                {/* <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </button> */}
              {/* Dropdown menu */}
              {/* <div className="absolute left-0 w-28 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover: bg-secondary transition duration-500">
                <div className="py-1">
                  {locationData && locationData.map((item) => {
                    return (
                      <Link><a
                        href="#"
                        className="block px-4 py-2 text-sm text-black hover:bg-secondary"
                      >
                        {item.city}
                      </a></Link>
                    );

                  })}

                </div>
              </div>
            </div>
          </div> */} 

          <button
            type="submit"
            className="rounded-md px-3 py-2 text-lg font-semibold text-white shadow-sm border-2 border-secondary hover:bg-secondary hover:text-primary" onClick={handleLogout}

          >
            Log-Out
          </button>


        </div>
      </nav>
    </header>
  )
}

export default Header
