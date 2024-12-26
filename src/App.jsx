import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

//import component 
import Home from './views/Home'
import Signin from './views/Signin'
import SelectRoom from './views/SelectRoom'
import NotFound from './views/NotFound'


function App() {
  const [data, setData] = useState('');

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Link to="/">Signin</Link> | <Link to="/SelectRoom">SelectRoom</Link>
          <Routes>
            <Route path='/' element={<Signin/>}></Route>
            <Route path='/Home' element={<Home id={data}/>}></Route>
            <Route path='/SelectRoom' element={<SelectRoom setData={setData}/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
