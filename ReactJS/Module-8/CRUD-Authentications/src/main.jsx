import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from '../src/App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import 'bootstrap-icons/font/bootstrap-icons.css'

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__())
render
(
   <Provider store = {store}>
      <Router>
         <Routes>
            <Route path="/" element={<Layout/>}></Route>
            {/* <Route path="/" element={<Register/>}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/" element={<AddEmployee/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route> */}
         </Routes>
      </Router>
   </Provider>, document.getElementById('root'))
