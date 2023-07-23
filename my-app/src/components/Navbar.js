import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='nav nav-dark bg-warning'>
                    <div className='nav-item'>
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/students" className='nav-link'>Student Lists</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/entry" className='nav-link'>Student Entry</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/mentry" className='nav-link'>Marks Entry</NavLink>
                    </div>
                    <br /><br />
    </div>
  )
}

export default Navbar
