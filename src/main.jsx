import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Resume from './components/CreateResume/Resume.jsx'
import MyResume from './components/MyResume/MyResume.jsx'
import RateUs from './components/Rateus/RateUs.jsx'
import TemplateOne from './components/Templates/TemplateOne.jsx'



const router = createBrowserRouter([
 { path: '/',
  element: <App />,
  children: [
    { path: '',
   element: <Home />},
    { path: 'about',
   element: <About />},
    { path: 'contact',
   element: <Contact />},
   { path: 'resume',
   element: <Resume />},
   { path: 'myresume',
   element: <MyResume />},
   { path: 'rateus',
   element: <RateUs />},
   {path: 'tempone',
   element: <TemplateOne />},
  
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
