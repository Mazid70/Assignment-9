import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
// import SignUp from './Components/SignUp.jsx'
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
      element:<Home></Home>
    },
    {
      path:"/about",
      element:<Home></Home>
    },
    {
      path:"/signin",
      element:<SignIn></SignIn> ,
    },
    {
      path:"/signup",
      // element:<SignUp></SignUp> ,
    }
  ]

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
   <RouterProvider router={router}> <App /></RouterProvider>
  </React.StrictMode>,
)