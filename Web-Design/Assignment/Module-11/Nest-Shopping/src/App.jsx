import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/Header'
import Header2 from './components/Header2'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Header2></Header2>
      <Navbar></Navbar>
      <Slider></Slider>
    </>
  )
}

export default App
