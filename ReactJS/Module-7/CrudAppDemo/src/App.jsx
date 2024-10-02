import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import PageNotFound from './components/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/add-data" element={<Create/>}></Route>
              <Route path="/edit-data" element={<Edit/>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
