import React from 'react'
import ReactDOM from 'react-dom/client'
import EmployeeForm from './EmployeeForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyForm from './FormHandlingEx'
import MultipleInputs from './MultipleInputFields'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <EmployeeForm /> */}
    {/* <MyForm/> */}
    <MultipleInputs/>
  </React.StrictMode>,
)
