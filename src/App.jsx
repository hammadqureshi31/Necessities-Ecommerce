import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import useWindowResize from './custom hooks/WindowResize'


function App() {
  const { width } = useWindowResize()

  return (
    <>
    <div className={`w-[${width}px] md:w-[(${width}-320)px]`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App
