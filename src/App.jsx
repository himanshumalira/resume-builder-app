

import { Outlet } from 'react-router-dom'
import './App.css'
import Resume from './components/CreateResume/Resume'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {


  return (
   <>
   <Header/>
  <Outlet/>
  <Footer/>
   </>
  )
}

export default App
