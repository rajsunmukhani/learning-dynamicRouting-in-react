import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {


  return (
    <div className='flex justify-center gap-10 mt-10'>
        <NavLink className={(e)=>e.isActive ? 'text-red-800 font-extrabold' : 'hover:text-red-500'} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive ? 'text-red-800 font-extrabold' : 'hover:text-red-500'} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive ? 'text-red-800 font-extrabold' : 'hover:text-red-500'} to="/users">Users</NavLink>
    </div>
  )
}

export default Nav