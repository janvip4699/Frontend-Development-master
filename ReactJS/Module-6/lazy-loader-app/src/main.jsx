import React from 'react'
import ReactDOM from 'react-dom/client'
import LazyLoaderApp from './LazyLoaderApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import LazyLoaderImg from './LazyLoaderImg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LazyLoaderApp /> */}
    <LazyLoaderImg />
  </React.StrictMode>,
)
