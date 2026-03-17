import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <NavLink to='/' style={({isActive})=>({
            color: isActive?'red':'blue'
        })}>Home</NavLink>
        <NavLink to='/about' style={({isActive})=>({
            color: isActive?'red':'blue'
        })}>About</NavLink>
        <NavLink to='/courses' style={({isActive})=>({
            color: isActive?'red':'blue'
        })}>Courses</NavLink>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/courses'>Courses</Link> */}
    </div>
  )
}

export default Navbar
