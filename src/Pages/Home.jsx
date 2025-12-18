import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
      <>
          <h1>Home Page</h1>
          <p>This is the home page.</p>
          <Link to='/about'>About us</Link>
      </>
  )
}

export default Home