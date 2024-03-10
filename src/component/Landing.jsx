import React from 'react'
import useWindowResize from '../contextAPI/WindowResize'
import { PiTShirt } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { GiLargeDress } from "react-icons/gi";
import { TbSettingsBolt } from "react-icons/tb";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { motion } from 'framer-motion'
import PopularProducts from './PopularProducts';
import Testinomials from './Testinomials';
import Feedbacks from './Feedbacks';


const Landing = () => {

  const { width, height } = useWindowResize()

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };


  return (
    <>
      <div className={`w-[${width}px] pt-14 px-4 flex flex-col text-center md:pt-20`}>
        <div className='flex flex-col gap-10'>
          <motion.h1 initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className='font-semibold font-sans tracking-wider text-2xl 
          sm:w-[640px] sm:mx-auto md:text-3xl md:font-bold'>Discover the latest trends in
            <span className='text-[#7F57F1] font-bold'> Clothing</span>,
            <span className='text-[#7F57F1] font-bold'> Electronics</span>,
            <span className='text-[#7F57F1] font-bold'> Jewellery </span>
            and everyday essentials.
          </motion.h1>

          <p className='font-normal opacity-50 text-lg text-left sm:text-center'>
            Explore our diverse range of categories
          </p>

          <div className='flex gap-10 sm:mx-auto'>
            <input type="text" placeholder='Search ' className='px-6 py-2 border rounded-2xl shadow-sm' />
            <div className='bg-[#7F57F1] p-2 text-white text-2xl rounded-full font-bold'><CiSearch /></div>
          </div>


          <div className='flex flex-wrap gap-3 sm:mx-auto md:gap-8'>
            <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3'><PiTShirt /></div>
              <h1 className='text-xl font-serif font-semibold'>Men's</h1>
            </div>

            <div className='bg-[#FAF5FF] p-3 text-center  text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8 text-[#FFC216]'><GiLargeDress /></div>
              <h1 className='text-xl font-serif font-semibold'>Women's</h1>
            </div>

            <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-10  text-black'><TbSettingsBolt /></div>
              <h1 className='text-xl font-serif font-semibold'>Electronics</h1>
            </div>

            <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8'><GiBigDiamondRing /></div>
              <h1 className='text-xl font-serif font-semibold'>Jewellery</h1>
            </div>

            <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3 text-[#F14343]'><GiConverseShoe /></div>
              <h1 className='text-xl font-serif font-semibold'>Shoes</h1>
            </div>
          </div>
        </div>

        <div className='mt-16 mb-16 text-left font-bold font-sans text-2xl text-[#7F57F1]'>
          Our Latest Collections
        </div>

        <PopularProducts />
        
        <div className='mt-16 mb-10 text-left font-bold font-sans text-2xl text-[#7F57F1]'>
          Why to choose us?
        </div>

        <Testinomials />

        <Feedbacks />
      </div>

    </>
  )
}

export default Landing