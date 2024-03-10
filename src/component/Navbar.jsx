import React from 'react'
import { useState } from 'react';
import useWindowResize from '../contextAPI/WindowResize'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { motion } from 'framer-motion'


const Navbar = () => {
    const { width, height } = useWindowResize()
    const [navToggal, setNavToggal] = useState(false)

    const fadeInUpAnimation = {
        hidden: {
            opacity: 0,
            y: -200,
            x:-200,
            scale: 0
        },
        show: {
            opacity: 1,
            y: 0,
            x:0,
            scale: 1,
            transition: {
                duration: 1.3,
            },
            
        },
    };

    return (
        <>
            <div className={`w-[${width}px] p-3 shadow-md
             md:flex md:justify-between md:text-center`}>
                <div className='flex justify-between text-center sm:px-6 '>
                    <div onClick={() => {setNavToggal((prev) => !prev)
                    }}
                        className=' mt-1.5 text-2xl md:hidden'>
                        <RiMenuUnfoldLine />
                    </div>
                    <div className='flex gap-2 text-center text-2xl text-[#7F57F1] md:text-4xl md:gap-3 '>
                        <div className='text-3xl md:text-4xl md:mt-1.5'><GiShoppingCart /></div>
                        <h1 className='tracking-wide font-serif italic'> necessities </h1>
                    </div>
                    <div className=' bg-[#7F57F1] text-white text-sm p-2 rounded-lg
                    md:hidden'>
                        <button>Sign up</button>
                    </div>
                </div>
                <motion.div initial="hidden"
                    animate="show"
                    variants={fadeInUpAnimation}
                    className={`${navToggal ? 'flex justify-between text-center mt-6 font-semibold' : 'hidden'} 
                    md:mt-3 md:flex md:gap-10 md:text-center md:text-lg md:mr-20 font-semibold`}>
                    <h1>Home</h1>
                    <h1>All products</h1>
                    <h1>FAQs</h1>
                    <h1>Contact</h1>
                </motion.div>
                <div className='hidden md:flex md:gap-5 md:text-center md:font-semibold mt-1'>
                    <button className='bg-[#7F57F1] text-white text-md p-2 rounded-lg'>Sign up</button>
                    <button className='bg-[#7F57F1] text-white text-md p-2 rounded-lg'>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Navbar