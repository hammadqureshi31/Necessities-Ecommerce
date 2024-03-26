import React from 'react'
import Navbar from '../component/Navbar'
import useWindowResize from '../custom hooks/WindowResize'
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