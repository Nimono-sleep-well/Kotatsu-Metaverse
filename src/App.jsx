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
  const [user, setUser] = useState('');

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin setUser={setUser}/>}></Route>
            <Route path='/Home' element={<Home user={user} id={data}/>}></Route>
            <Route path='/SelectRoom' element={<SelectRoom user={user} setData={setData}/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
