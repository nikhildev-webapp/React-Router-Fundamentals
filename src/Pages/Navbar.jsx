import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
        <nav>
            <Link to='/'>Home</Link>|
            <Link to='/about'>About</Link>|
            <Link to="/dashboard">Dashboard</Link>|
            <Link to="/settings">Settings</Link>
          </nav>
          <main>
              <Outlet/>
          </main>
      </>
  )
}

export default Navbar