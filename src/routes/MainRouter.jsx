import React from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import Users from '../Components/Users'
import NotFound from '../Components/NotFound'
import Details from '../Components/Details'
import { Route, Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}> 
              <Route path='/users/:id' element={<Details/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
    </div>
  )
}

export default MainRouter