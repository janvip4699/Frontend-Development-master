import React from 'react'
import ReactDOM from 'react-dom/client'
import NameApp from './NameApp'
import UpdateData from './UpdateData'
import CounterApp from './CounterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NameApp /> */}
    {/* <UpdateData/> */}
    <CounterApp/>
  </React.StrictMode>,
)
