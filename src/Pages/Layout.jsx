import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <nav>
              <Link to='/'>Home</Link> | <Link to='/dashboard'>Dashboard</Link> | <Link to='/settings'>Settings</Link> | <Link to='/about'>About</Link>
          </nav>
          <main>
          <Outlet/>
          </main>    
      </div>
  )
}

export default Layout