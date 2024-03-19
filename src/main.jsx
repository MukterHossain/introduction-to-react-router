import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
