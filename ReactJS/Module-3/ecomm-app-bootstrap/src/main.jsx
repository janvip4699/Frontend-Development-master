import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style.css'
import Account from './components/customer/Account'
import AboutUs from './components/customer/AboutUs'
import ShopNow from './components/customer/ShopNow'
import Pricing from './components/customer/Pricing'
import ContactUs from './components/customer/ContactUs'
import PageNotFound from './components/customer/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/create-account" element={<Account/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/shop-now" element={<ShopNow/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Layout /> */}
  </React.StrictMode>,
)
