import React from 'react'
import Nav from './Components/Nav'
import MainRouter from './routes/MainRouter'


const App = () => {
  return (
    <div className='pl-10'>
      <Nav/>
      <MainRouter/>
      
    </div>
  )
}

export default App