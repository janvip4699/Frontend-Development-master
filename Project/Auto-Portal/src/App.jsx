import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SellCar from './pages/SellCar'
import BuyCar from './pages/BuyCar'
import CarDetails from './components/BuyCar/CarDetails'
import Login from './components/Login'
import Register from './components/Register'
import UserHomePage from './components/UserHomePage'

import Layout from './components/Admin/Layout'
import Dashboard from './components/Admin/Dashboard'
import UsersList from './components/Admin/Users/UsersList'
import DeleteUsers from './components/Admin/Users/DeleteUsers'
import SellcarsList from './components/Admin/Sellers/SellCarsList'
import DeleteSellCar from './components/Admin/Sellers/DeleteSellCar'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sell-car" element={<SellCar/>}></Route>
        <Route path="/buy-car" element={<BuyCar/>}></Route>
        <Route path="/buy-car/car-details/:id" element={<CarDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/user-home-page" element={<UserHomePage/>}></Route>

        {/* Admin Routing */}
        <Route path="/admin" element={<Layout/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin/users" element={<UsersList/>}></Route>
        <Route path="/admin/users/:id" element={<DeleteUsers/>}></Route>
        <Route path="/admin/sellers/sell-cars-list" element={<SellcarsList/>}></Route>
        <Route path="/admin/sellers/:id" element={<DeleteSellCar/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

