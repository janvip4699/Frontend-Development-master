import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import PageNotFound from './components/PageNotFound'
import Delete from './components/Delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/add-data" element={<Create/>}></Route>
              <Route path="/edit-data/:id" element={<Edit/>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>
              <Route path="/delete-data/:id" element={<Delete/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
