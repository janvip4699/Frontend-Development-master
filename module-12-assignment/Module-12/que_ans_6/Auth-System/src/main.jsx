import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ManageProduct from './components/ManageProduct.jsx'
import CreateProduct from './components/CreateProduct.jsx'
import EditProduct from './components/EditProduct.jsx'
import DeleteProduct from './components/DeleteProduct.jsx'
import ReadProduct from './components/ReadProduct.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/ManageProduct"
            element={
              <ProtectedRoute>
                <ManageProduct />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-product" element={<CreateProduct />}></Route>
          <Route path="/edit-product/:id" element={<EditProduct />}></Route>
          <Route path="/delete-product/:id" element={<DeleteProduct />}></Route>
          <Route path="/read-product/:id" element={<ReadProduct />}></Route>
        </Routes>
      </Router>
    </UserAuthContextProvider>
  </StrictMode>,
)
