import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SellCar from './pages/SellCar'
import BuyCar from './pages/BuyCar'
import About from './pages/About'
import ProtectedRoute from './components/ProtectedRoute'

import CarDetails from './components/BuyCar/CarDetails'
import Login from './components/Login'
import Register from './components/Register'
import UserHomePage from './components/UserHomePage'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import ContactUs from './components/ContactUs'
import UserCarDetails from './components/UserCarDetails'

import Layout from './components/Admin/Layout'
import Dashboard from './components/Admin/Dashboard'
import UsersList from './components/Admin/Users/UsersList'
import DeleteUsers from './components/Admin/Users/DeleteUsers'
import SellcarsList from './components/Admin/Sellers/SellCarsList'
import DeleteSellCar from './components/Admin/Sellers/DeleteSellCar'
import AddCarMake from './components/Admin/Cars/AddCarMake'
import AddCarModel from './components/Admin/Cars/AddCarModel'
import DeleteCarmake from './components/Admin/Cars/DeleteCarMake'
import CarMakeList from './components/Admin/Cars/CarMakeList'
import SellcarList from './components/Admin/Sellers/SellCarsList'
import DeleteCarModel from './components/Admin/Cars/DeleteCarModel'
import AllCars from './components/Admin/Cars/AllCars'
import Cities from './components/Admin/Locations/Cities'


export default function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/sell-car" element={<SellCar />}></Route>
          <Route path="/buy-car" element={<BuyCar />}></Route>
          <Route path="/buy-car/car-details/:id" element={<CarDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user-home-page" element={<UserHomePage />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user-car-details" element={<UserCarDetails />}></Route>

          {/* Admin Routing */}
          <Route path="/admin" element={<Layout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/users" element={<UsersList />}></Route>
          <Route path="/admin/users/:id" element={<UsersList />}></Route>
          <Route path="/admin/sellers/sell-cars-list" element={<SellcarsList />}></Route>
          <Route path="/admin/sellers/:id" element={<SellcarList />}></Route>
          <Route path="/admin/cars/add-car-make" element={<AddCarMake />}></Route>
          <Route path="/admin/cars/add-car-model" element={<AddCarModel />}></Route>
          <Route path="/admin/cars/delete-car-make/:id" element={<AddCarMake />}></Route>
          <Route path="/admin/cars/delete-car-model/:id" element={<AddCarModel />}></Route>
          <Route path="/admin/cars" element={<AllCars />}></Route>
          <Route path="/admin/locations" element={<Cities />}></Route>
          <Route path="/admin/locations/:id" element={<Cities />}></Route>
          <Route path="/admin/cars/delete-car/:id" element={<AllCars />}></Route>

        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  )
}

