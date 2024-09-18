import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'
import Services from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cars" element={<Cars/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
