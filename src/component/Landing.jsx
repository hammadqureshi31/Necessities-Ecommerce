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
import CategoryCard from './CategoryCard'
import { useNavigate } from 'react-router-dom';
import Visitors from './Visitors';
import MissionAndGoals from './MissionAndGoals';
import Branding from './Branding';


const Landing = () => {

  const { width, height } = useWindowResize()
  const navigate = useNavigate()

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -100
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }



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

          <motion.p initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className='font-normal opacity-50 text-lg sm:text-center'>
            Explore our diverse range of categories
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className='flex md:gap-10 sm:mx-auto'>
            <input type="text" placeholder='Search ' className='px-6 py-2 border rounded-2xl shadow-sm md:w-96' />
            <div className='bg-[#7F57F1] p-2 text-white text-2xl rounded-full font-bold'><CiSearch /></div>
          </motion.div>


          <motion.div variants={container} initial="hidden" animate="visible" className='flex flex-wrap gap-3 sm:mx-auto md:gap-8' onClick={() => navigate('/allproducts')}>
            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3'><PiTShirt /></div>
              <h1 className='text-xl font-serif font-semibold'>Men's</h1>
            </motion.div>

            <motion.div variants={item} className='p-3 text-center  text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8 text-[#FFC216]'><GiLargeDress /></div>
              <h1 className='text-xl font-serif font-semibold'>Women's</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-10  text-black'><TbSettingsBolt /></div>
              <h1 className='text-xl font-serif font-semibold'>Electronics</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8'><GiBigDiamondRing /></div>
              <h1 className='text-xl font-serif font-semibold'>Jewellery</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3 text-[#F14343]'><GiConverseShoe /></div>
              <h1 className='text-xl font-serif font-semibold'>Shoes</h1>
            </motion.div>
          </motion.div>
        </div>


        <div className='mt-16 mb-16 text-left font-bold font-sans text-2xl text-[#7F57F1] md:ml-10'>
          Our Latest Collections
        </div>

        <div className='mx-auto md:pl-14'>
          <PopularProducts />
        </div>

        <div className='mt-16 text-left font-bold font-sans text-3xl text-[#7F57F1] md:ml-10'>
          Gallery
        </div>

        <div className='mx-auto mt-16'>
          <CategoryCard />
        </div>

        <div className='text-center mt-6 text-gray-700'>
          <p className='text-lg'>
            Explore our captivating gallery filled with stunning images capturing memorable moments and breathtaking scenes. Immerse yourself in a visual journey that will inspire and delight your senses.
          </p>
        </div>

        <div className='mt-16 mb-16 text-left font-bold font-sans text-2xl text-[#7F57F1] md:ml-10'>
          View Statistics
        </div>

        <div>
          <Visitors />
        </div>

      </div>

      <Branding />

    </>
  )
}

export default Landing