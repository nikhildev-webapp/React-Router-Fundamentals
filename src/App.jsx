import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Navbar from './Pages/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
       
         {
      path: '/about',
      element: <About />
    },
    {
      path: '/dashboard',
      element:<Dashboard/>
    },
    {
      path: '/settings',
      element:<Settings/>
    }
      ]
    },
   
 ])
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Router Dom Exercises & Mini Project</h1>
     
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
