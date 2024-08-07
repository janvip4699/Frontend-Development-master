import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import DeleteTask from './DeleteTask.jsx'
import AddTask from './AddTask.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App/>}></Route>
        <Route path="/delete-task/:id" element={<DeleteTask/>}></Route>
        <Route path="/add-task" element={<AddTask/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
