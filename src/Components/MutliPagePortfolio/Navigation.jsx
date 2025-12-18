import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navigation = () => {
    const navStyle = ({ isActive }) => ({
        color: isActive ? 'orange' : 'white'
        
    })
  return (
    <div>
          <div>
              <span>Portfolio</span>
              <nav>
                  <NavLink style={navStyle} to="/">Home</NavLink>|
                  <NavLink style={navStyle} to="/AboutPage">About</NavLink>|
                  <NavLink style={navStyle} to="/ContactPage">Contact</NavLink>
              </nav>
          </div>     
          <main>
              <Outlet/>
        </main>
    </div>
  )
}

export default Navigation