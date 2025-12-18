import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { index: 'true', element: <Home /> },
        { path: '/Dashboard', element: <Dashboard /> },
        {path:'/settings',element:<Settings/>},
        {path:'/about',element:<About/>},
        
      ]
    },
    { path: '/about', element: <About /> },
    
 ])
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Router Dom Exercises & Mini Project</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
