import React from 'react'
import { useNavigate,Link, Outlet, useLocation } from 'react-router-dom'

const Users = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/');
  }

  return (
    <div>
      Users

      <hr className='mt-10' />

      <form onSubmit={submitHandler} className='mt-5 ml-10'>
        <h1>Enter Your Name Here:</h1>
        <input className='bg-zinc-100 px-2 h-8 w-18 rounded-full' type="text"/>
        <br />
        <br />
        <input className='bg-red-500 text-zinc-100 rounded-full px-3 py-1' type="submit" value="Submit" />
      </form>

      <hr className='mt-10' />

      
      <ul className='list-item mt-10 ml-16'>
        <li className='list-disc'>
          <Link to={`${pathname}/1`}>Item 1</Link>
        </li>
        <li className='list-disc'>
          <Link to={`${pathname}/2`}>Item 2</Link>
        </li>
        <li className='list-disc'>
          <Link to={`${pathname}/3`}>Item 3</Link>
        </li>
      </ul>

    <hr className='mt-10 mb-10' />

    <Outlet/>

    </div>
    
  )
}

export default Users