import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Layout from './Layout'
import ApplyNow from './components/ApplyNow'
import Menu from './components/Menu'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/apply-now" element={<ApplyNow/>}></Route>
          <Route path="/our-menu" element={<Menu/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
)
