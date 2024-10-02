import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from './Layout'
import Content from './Content'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import OurGallery from './OurGallery'
import Account from './Account'
import PageNotFound from './PageNotFound'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'

//BrowserRouter or Router => Its is a parent of React router dom i.e used to load or navigate page
//Routes =>Routes is a parent of each Route i.e used to load each Route in web broswers
//Route => Route is used to navigate one page to another page its is multiple
//Link => Link is just replacements of <a href=''>Home</a> => <Link to="">Home</Link>
//UseNavigate =>its is used to navigate one page to another page click on button 
//useParams =>useParams is used to access any details using id.
//NavLink => NavLink is just like a <Link to="">Home</Link>
// * =>search all pages if page is not found generate 404 errors
//Outlet => outlet is used to show a current page Route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Content/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/our-services" element={<OurServices/>}></Route>
          <Route path="/our-gallery" element={<OurGallery/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Layout /> */}
  </React.StrictMode>,
)
