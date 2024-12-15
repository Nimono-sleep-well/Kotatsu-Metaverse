import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

import Home from './views/Home'
import Signin from './views/Signin'
import SelectRoom from './views/SelectRoom'
import NotFound from './views/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Link to="/">Signin</Link> | <Link to="/Home">Home</Link> | <Link to="/SelectRoom">SelectRoom</Link>
          <Routes>
            <Route path='/' element={<Signin name="asssdaf" age="10"/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/SelectRoom' element={<SelectRoom/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
