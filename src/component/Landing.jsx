import React, { useEffect } from 'react'
import useWindowResize from '../custom hooks/WindowResize'
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            className='font-medium font-roboto tracking-wider text-2xl 
          sm:w-[640px] sm:mx-auto md:text-3xl'>Discover the latest trends in
            <span className='text-[#7F57F1] text-4xl font-extrabold font-aleg italic tracking-widest'> Clothing</span>,
            <span className='text-[#7F57F1] text-4xl font-extrabold font-aleg italic tracking-widest'> Electronics</span>,
            <span className='text-[#7F57F1] text-4xl font-extrabold font-aleg italic tracking-widest'> Jewellery </span>
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
            className=' mx-auto flex gap-2 '>
            <input type="text" placeholder='Search ' className='px-6 py-2 border rounded-2xl shadow-sm md:w-72 md:ml-1' />
            <div className='bg-[#7F57F1] p-2 text-white text-2xl rounded-full font-bold'><CiSearch /></div>
          </motion.div>

          <div className=''>
            <marquee className="md:hidden overflow-auto" behavior="scroll" direction="left">
              <div className='inline-flex gap-8 pt-2'>
                <div className='bg-[#FAF5FF] p-3 text-center flex justify-center gap-2'>
                  <div className='text-3xl '><PiTShirt /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-1'>Men's</h1>
                </div>
                <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                  <div className='text-3xl text-[#FFC216]'><GiLargeDress /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2'>Women's</h1>
                </div>
                <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                  <div className='text-3xl  text-black'><TbSettingsBolt /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2'>Electronics</h1>
                </div>
                <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                  <div className='text-3xl '><GiBigDiamondRing /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2'>Jewellery</h1>
                </div>
                <div className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                  <div className='text-3xl text-[#F14343]'><GiConverseShoe /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-1'>Shoes</h1>
                </div>
              </div>
            </marquee>
          </div>

          <motion.div variants={container} initial="hidden" animate="visible" className=' hidden md:flex md:flex-wrap md:mx-auto md:gap-8' onClick={() => navigate('/allproducts')}>
            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3'><PiTShirt /></div>
              <h1 className='text-2xl font-aleg font-semibold pl-1'>Men's</h1>
            </motion.div>

            <motion.div variants={item} className='p-3 text-center  text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8 text-[#FFC216]'><GiLargeDress /></div>
              <h1 className='text-2xl font-aleg font-semibold pl-2'>Women's</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-10  text-black'><TbSettingsBolt /></div>
              <h1 className='text-2xl font-aleg font-semibold pl-2'>Electronics</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-8'><GiBigDiamondRing /></div>
              <h1 className='text-2xl font-aleg font-semibold pl-2'>Jewellery</h1>
            </motion.div>

            <motion.div variants={item} className=' p-3 text-center text-[#7F57F1] flex flex-col gap-2'>
              <div className='text-3xl ml-3 text-[#F14343]'><GiConverseShoe /></div>
              <h1 className='text-2xl font-aleg font-semibold pl-1'>Shoes</h1>
            </motion.div>
          </motion.div>
        </div>


        <div className='mt-16 mb-16 text-left font-bold font-aleg italic text-3xl text-[#7F57F1] md:ml-10'>
          Our Latest Collections
        </div>

        <div className='mx-auto md:pl-8'>
          <PopularProducts />
        </div>

        <div className='mt-16 text-left font-bold font-aleg italic tracking-wider text-3xl text-[#7F57F1] md:ml-10'>
          Gallery
        </div>

        <div className='mx-auto mt-16'>
          <CategoryCard />
        </div>

        <div className='text-center mt-6 text-gray-700 font-roboto'>
          <p className='text-lg px-10 md:w-[1100px] md:mx-auto'>
            Explore our captivating gallery filled with stunning images capturing memorable moments and breathtaking scenes. Immerse yourself in a visual journey that will inspire and delight your senses.
          </p>
        </div>

        <div className='mt-16 mb-16 text-left font-bold font-aleg italic text-3xl tracking-wider text-[#7F57F1] md:ml-10'>
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