import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './component/Nav';
import Login from './component/Login';
import Home from './component/Home';
import Frame from './component/Frame';
import Admin from './component/Admin';
import Footer from './component/Footer';
import About from './component/About';
// import Services from './component/Services';
import Contact from './component/Contact';
import Insurance from './component/Insurance';
import AdminAboutData from './component/AdminAboutData';
import AboutData from './component/AboutData';

function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element:<><Nav></Nav><Home></Home><Frame></Frame><Footer></Footer></>
    },
    {
      path:"/login",
      element:<><Nav></Nav><Login></Login><Footer></Footer></>
    },
    {
      path:"/about",
      element:<><Nav></Nav><About></About><Footer></Footer></>
    },
    {
      path:"/aboutData",
      element:<><Nav></Nav><AboutData></AboutData><Footer></Footer></>
    },
    // {
    //   path:"/services",
    //   element:<><Nav></Nav><Services></Services><Footer></Footer></>
    // },
    // {
    //   path:"/contact",
    //   element:<><Nav></Nav><Contact></Contact><Footer></Footer></>
    // },
    // {
    //   path:"/ensurance",
    //   element:<><Nav></Nav><Insurance></Insurance><Footer></Footer></>
    // },
    {
      path:"/admin",
      element:<><Nav></Nav><Admin></Admin><Footer></Footer></>
    },
    {
      path:"/adminAboutData",
      element:<><Nav></Nav><AdminAboutData></AdminAboutData><Footer></Footer></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App