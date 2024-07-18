import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EmployeeData from './EmployeeList.jsx'
import EmployeeDetails from './EmployeeListArray.jsx'
import EmployeeListArray from './EmployeeListArray.jsx'
import Garage from './CarProps.jsx'
import Garage1 from './CarsListArray.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App name="Janvi" /> */}
    {/* <EmployeeData address="Narmada park-4, Near amin marg"></EmployeeData> */}
    {/* <EmployeeListArray/> */}
    <Garage1/>
  </React.StrictMode>,
)
