import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import FeaturedCars from '../components/Home/Featured/FeaturedCars'
import About from './About'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <FeaturedCars></FeaturedCars>
      <About></About>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

export default Home
