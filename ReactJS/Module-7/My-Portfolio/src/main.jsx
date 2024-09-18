import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/custom.scss';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

// Admin Panel Modules
import AdminHeader from './components/Admin/AdminHeader';
import AdminDashboard from './components/Admin/AdminDashboard';
import SideBar from './components/Admin/SideBar';
import AddAbstract from './components/Admin/AddAbstract';
import AbstractData from './components/Admin/AbstractData';
import DeleteData from './components/Admin/DeleteData';
import EditAbstract from './components/Admin/EditAbstract';
import ManageContacts from './components/Admin/ManageContacts';
import DeleteContact from './components/Admin/DeleteContact';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin-header" element={<AdminHeader/>}></Route>
        <Route path="/sidebar" element={<SideBar/>}></Route>
        <Route path="/admin-dashboard/add-abstract" element={<AddAbstract/>}></Route>
        <Route path="/admin-dashboard/abstract-data" element={<AbstractData/>}></Route>
        <Route path="/admin-dashboard/delete-data/:id" element={<DeleteData/>}></Route>
        <Route path="/edit-data/:id" element={<EditAbstract/>}></Route>
        <Route path="/admin-dashboard/manage-contacts" element={<ManageContacts/>}></Route>
        <Route path="/admin-dashboard/delete-contact/:id" element={<DeleteContact/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
