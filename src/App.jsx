import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    {path:'/about',element:<About/>}
 ])
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Router Dom Exercises & Mini Project</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
