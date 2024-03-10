import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App
