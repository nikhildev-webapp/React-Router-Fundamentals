import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Navigation from './Components/MutliPagePortfolio/Navigation'
import HomePage from './Components/MutliPagePortfolio/HomePage'
import AboutPage from './Components/MutliPagePortfolio/AboutPage'
import ContactPage from './Components/MutliPagePortfolio/ContactPage'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Dashboard from './Pages/Dashboard'
// import Settings from './Pages/Settings'
// import Navbar from './Pages/Navbar'
// import NotFound from './Pages/NotFound'
// import Product from './Pages/Product'
// import ProductDetails from './Pages/ProductDetails'

function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Navbar />,
//       children: [
//         { index: true, element: <Home /> },
       
//          {
//       path: '/about',
//       element: <About />
//     },
//     {
//       path: '/dashboard',
//       element:<Dashboard/>
//     },
//     {
//       path: '/settings',
//       element:<Settings/>
//         },
//         {
//           path:'/product',
//           element:<Product/>
//         },
//         {
//       path:'/product/:id',
//       element:<ProductDetails/>
//     },
//     {
//       path: '*',
//       element:<NotFound/>
//     }
//       ]
//     },
   
  //  ])
  
  // *Create a new router to pratice and do exercises of react router dom
  //*Exercise-1-build a multi page portfolio website with three pages Home, About, Contact using react router dom
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        {index:true,element:<HomePage/>},
        {path:"/AboutPage",element:<AboutPage/>},
        {path:"/ContactPage",element:<ContactPage/>},
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
