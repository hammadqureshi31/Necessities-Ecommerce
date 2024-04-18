import React, { Suspense, lazy, useEffect, useState } from 'react'
import useWindowResize from '../custom hooks/WindowResize'
import { PiTShirt } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { GiLargeDress } from "react-icons/gi";
import { TbSettingsBolt } from "react-icons/tb";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { easeInOut, motion } from 'framer-motion'
import Testinomials from './Testinomials';
import Feedbacks from './Feedbacks';
import CategoryCard from './CategoryCard'
import { useNavigate } from 'react-router-dom';
import Visitors from './Visitors';
import MissionAndGoals from './MissionAndGoals';
import Branding from './Branding';
import PopularProducts from './PopularProducts';
import Recommendation from './Recommendation';
// const Image1 = React.lazy(()=> import("public/images/Image1.svg"))


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
        ease: "easeIn",
      },
    },
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: -200,
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeIn",
      },
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
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

  const [showLeftImage, setShowLeftImage] = useState(true);
  const [showRightImage, setShowRightImage] = useState(true);


  return (
    <>
      <div className={`flex flex-col text-center w-[${width}px] sm:w-[${width}px] md:w-[${width}px]`}>
        <div className='relative flex flex-col gap-5 md:mt-10 overflow-hidden'>

          <div className='flex justify-evenly' >
            <div className='hidden md:flex flex-col md:px-5'>
              <motion.div initial='hidden' animate="show" variants={imageAnimation}>
                <img src="./images/Image.svg" alt="" className={`hidden md:inline-block`} />
              </motion.div>

              <motion.div initial='hidden' variants={container} animate='visible'
                className='flex justify-center gap-3 text-center mt-2.5'>
                <motion.div variants={item} className='bg-[#84019F] text-[#84019F] ring-4 ring-[#E3E059] h-2.5 w-2.5 rounded-full flex justify-center text-center'></motion.div>
                <motion.div variants={item} className='bg-[#84019F] text-[#84019F] ring-4 ring-[#E3E059] h-2.5 w-2.5 rounded-full'></motion.div>
                <motion.div variants={item} className='bg-[#84019F] text-[#84019F] ring-4 ring-[#E3E059] h-2.5 w-2.5 rounded-full'></motion.div>
                <motion.div variants={item} className='bg-[#84019F] text-[#84019F] ring-4 ring-[#E3E059] h-2.5 w-2.5 rounded-full'></motion.div>
                <motion.div variants={item} className='bg-[#84019F] text-[#84019F] ring-4 ring-[#E3E059] h-2.5 w-2.5 rounded-full'></motion.div>
              </motion.div>
            </div>
            <Suspense fallback={<div>loading...</div>}>
              <motion.div initial='hidden' animate="show" variants={imageAnimation}>
                <img src={'./images/Image1.svg'} alt="" className={`w-[${width}px] sm:w-[${width}px] md:pr-10`} />
                {/* <Image1 className={`w-[${width}px] sm:w-[${width}px] md:pr-10`} /> */}
              </motion.div>
            </Suspense>
          </div>

          {/* Main Content */}
          <div className='flex justify-between'>
            <motion.div initial='hidden' animate="show" variants={imageAnimation}>
              <img src="./images/Image2.svg" alt="" className='hidden md:inline-block ml-14' />
            </motion.div>

            <div className='flex flex-col gap-10 object-cover mx-auto max-w-4xl md:m-0'>

              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className='font-medium font-marg tracking-wider text-xl sm:w-[840px] sm:mx-auto md:text-3xl 
                md:text-left'
              >
                Discover the latest trends in
                <span className='text-[#84019F] text-3xl font-right  '> Clothing</span>,
                <span className='text-[#84019F] text-3xl font-right '> Electronics</span>,
                <span className='text-[#84019F] text-3xl font-right  '> Jewellery </span>
                and everyday essentials.
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className='font-normal opacity-50 sm:text-lg sm:text-center md:text-left'
              >
                Explore our diverse range of categories
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className='mx-auto flex gap-2 md:hidden'
              >
                <input type="text" placeholder='Search' className='px-6 py-2 border rounded-2xl shadow-sm md:w-72 md:ml-1' />
                <div className='bg-[#84019F] p-2 text-white text-2xl rounded-full font-bold'><CiSearch /></div>
              </motion.div>

              <motion.div variants={container} initial="hidden" animate="visible" className='hidden md:flex md:flex-wrap  md:gap-12' onClick={() => navigate('/allproducts')}>
                <motion.div variants={item} className='py-3 text-center text-[#7F57F1] flex flex-col gap-2'>
                  <div className='text-3xl ml-3'><PiTShirt /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-1 text-[#84019F]'>Men's</h1>
                </motion.div>

                <motion.div variants={item} className='py-3 text-center text-[#7F57F1] flex flex-col gap-2'>
                  <div className='text-3xl ml-8 text-[#FFC216]'><GiLargeDress /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2 text-[#84019F]'>Women's</h1>
                </motion.div>

                <motion.div variants={item} className='py-3 text-center text-[#7F57F1] flex flex-col gap-2'>
                  <div className='text-3xl ml-10 text-black'><TbSettingsBolt /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2 text-[#84019F]'>Electronics</h1>
                </motion.div>

                <motion.div variants={item} className='py-3 text-center text-[#7F57F1] flex flex-col gap-2'>
                  <div className='text-3xl ml-8'><GiBigDiamondRing /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-2 text-[#84019F]'>Jewellery</h1>
                </motion.div>

                <motion.div variants={item} className='py-3 text-center text-[#7F57F1] flex flex-col gap-2'>
                  <div className='text-3xl ml-3 text-[#F14343]'><GiConverseShoe /></div>
                  <h1 className='text-2xl font-aleg font-semibold pl-1 text-[#84019F]'>Shoes</h1>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>

        <div className='mt-10 mb-16 px-2 text-left font-bold font-marg text-2xl md:ml-14 md:mt-20'>
          Our Latest Collections
        </div>

        <div className='mx-auto md:pl-8 md:pr-8'>
          <PopularProducts />
        </div>

        <div className={`w-[${width}px] sm:w-[${width}px] md:w[${width}px] mx-auto md:mt-10`}>
          <img src="./images/Banner.svg" alt="" className={`w-[${width}px] sm:w-[${width}px] md:w[${width}px]`} />
        </div>

        <div className='mt-10 mb-16 px-2 text-left font-bold font-marg text-2xl md:ml-14 md:mt-20'>
          Our Recommendation For You
        </div>

        <div className='mx-auto md:pl-8 md:pr-8'>
          <Recommendation />
        </div>

        <div className='mt-16 text-left px-2 font-bold font-marg text-2xl md:ml-14'>
          Gallery
        </div>

        <div className='mx-auto mt-16'>
          <CategoryCard />
        </div>

        <div className='text-center mt-6 text-[#84019F] font-roboto '>
          <p className=' px-3 sm:text-lg sm:px-10 md:w-[1100px] md:mx-auto'>
            Explore our captivating gallery filled with stunning images capturing memorable moments and breathtaking scenes. Immerse yourself in a visual journey that will inspire and delight your senses.
          </p>
        </div>

        <div className='mt-16 mb-16 px-2 text-left font-bold font-marg text-2xl md:ml-14'>
          View Statistics
        </div>

        <div>
          <Visitors />
        </div>

      </div >

      <Branding />

    </>
  )
}

export default Landing