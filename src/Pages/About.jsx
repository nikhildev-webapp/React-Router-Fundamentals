import React from 'react'

const About = () => {
    const About = [
        { id: 1, info: "This is a React application demonstrating routing using React Router Dom." },
        { id: 2, info: "It includes multiple pages such as Home, About, Dashboard, and Settings." },
        { id: 3, info: "The Navbar component provides navigation links to these pages." },
        { id: 4, info: "Active links are highlighted in orange for better user experience." }   
    ]
  return (
      <>
          <h1>About Page</h1>
          <p>This is the about page.</p>
          <ul>
            {About.map((item) => (
                <li key={item.id}>{item.info}</li>
            ))}
          </ul> 
      </>
  )
}

export default About