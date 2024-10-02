import React from 'react'
import ReactDOM from 'react-dom/client'
// import BootstrapApp from './BootsrapApp'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/CSS/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BootstrapApp /> */}
    <Header/>
  </React.StrictMode>,
)
