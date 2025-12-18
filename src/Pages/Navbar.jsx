import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    const navLinkstyle = ({ isActive }) => ({
        color: isActive ? 'orange' : 'white',
        
    })
  return (
      <>
        <nav>
            <NavLink to='/' style={navLinkstyle}>Home</NavLink>|
            <NavLink to='/about' style={navLinkstyle}>About</NavLink>|
            <NavLink to="/dashboard" style={navLinkstyle}>Dashboard</NavLink>|
            <NavLink to="/settings" style={navLinkstyle}>Settings</NavLink>|
            <NavLink to="/product" style={navLinkstyle}>Product</NavLink>
          </nav>
          <main>
              <Outlet/>
          </main>
      </>
  )
}

export default Navbar