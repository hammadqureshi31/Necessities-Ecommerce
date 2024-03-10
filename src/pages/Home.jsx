import React from 'react'
import Navbar from '../component/Navbar'
import useWindowResize from '../contextAPI/WindowResize'
import Landing from '../component/Landing'

const Home = () => {
    const { width } = useWindowResize()
  return (
   <>
   <Landing />
   </>
  )
}

export default Home