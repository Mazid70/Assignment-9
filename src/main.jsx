import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Details from './Components/Details.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Blogs from './Components/Blogs.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/blogs",
      element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
    },
    {
      path:"/about",
      element:<AboutUs></AboutUs>
    },
    {
      path:"/signin",
      element:<SignIn></SignIn> ,
    },
    {
      path:"/signup",
      element:<SignUp></SignUp> ,
    },
    {
      loader: () => fetch("../hospitality.json"),
      path: "/estate/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute> 
    },
  ]

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <AuthProvider>
    <RouterProvider router={router}> <App /></RouterProvider>
    </AuthProvider>
 
  </React.StrictMode>,
)