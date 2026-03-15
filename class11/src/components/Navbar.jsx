import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' text-white flex justify-between bg-pink-700 px-6 py-3 mb-5'>
        <h2>Navbar</h2>
        <input className='border-2' type="text" />
        <div className='flex gap-10'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/courses'>Courses</Link>
        </div>
      </div>
  )
}

export default Navbar
