import React from 'react'
import useWindowResize from '../custom hooks/WindowResize'
import { GiShoppingCart } from "react-icons/gi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { PiBellRingingThin } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa";



const Footer = () => {

    const { width, height } = useWindowResize()
    return (
        <>
            <div className={`bg-[#7F57F1] w-[${width}px] relative flex-col px-3 pt-16`}>
                <div className='sm:flex justify-center gap-20 text-center mr-1'>
                    <h1 className='text-white font-bold text-2xl sm:mt-4 font-Roboto tracking-wider'>Subscribe To Get <br />Special Discounts</h1>
                    <div className='bg-white flex justify-center p-2 py-2.5 mt-8 md:mt-6 w-60
                     ml-8 rounded-xl md:w-80'>
                        <input type="text" name="" id="" placeholder='Email Address' className='font-aleg' />
                        <div className='flex text-center justify-center text-[#7F57F1] text-2xl sm:mt-1 md:text-3xl'><PiBellRingingThin /></div>
                    </div>
                </div>

                <div className='mt-8 flex flex-col md:flex-row md:justify-between md:mt-14'>
                    <div className=''>
                        <div className='flex gap-2 mt-5  text-center text-3xl text-white md:text-5xl md:gap-3 md:ml-12'>
                            <div className='text-4xl md:text-5xl md:mt-1.5'><FaOpencart /></div>
                            <h1 className='tracking-wider font-dance text-4xl '> Necessities </h1>
                        </div>
                        <div className='text-md text-white flex flex-col gap-4 text-left mt-10 '>
                            <p className='text-2xl font-semibold tracking-wide font-aleg'>Address : 
                                <span className='text-lg font-extralight font-roboto'> Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. <br />Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</span>
                            </p>
                            <p className='tracking-wider font-roboto'>+62 812 234 6789 <br />buangin@services.id</p>
                        </div>
                    </div>


                    <div className='flex gap-3 text-white ml-3 sm:ml-0 font-semibold flex-wrap mt-24 text-center'>
                        <div className='flex- flex-col'>
                            <h1 className='font-bold text-lg font-roboto'>Company</h1>
                            <h4 className='mt-10 font-normal  font-aleg'>About</h4>
                            <h4 className='mt-4 font-normal'>Careers</h4>
                            <h4 className='mt-4 font-normal'>Mobile</h4>
                        </div>
                        <div className='flex- flex-col'>
                            <h1 className='font-bold text-xl font-roboto'>Contact</h1>
                            <h4 className='mt-10 font-normal font-aleg'>Help/FAQs</h4>
                            <h4 className='mt-4 font-normal'>Press</h4>
                            <h4 className='mt-4 font-normal'>Affiliates</h4>
                        </div>
                        <div className='flex- flex-col gap-4 font-roboto '>
                            <h1 className='font-bold text-xl font-aleg'>More</h1>
                            <h4 className='mt-10 font-normal'>Dilivery</h4>
                            <h4 className='mt-4 font-normal'>Warranty</h4>
                            <h4 className='mt-4 font-normal'>Replacement</h4>
                        </div>
                        <div className='flex- flex-col gap-4 text-center mt-6 md:mt-0'>
                            <h1 className='font-bold text-xl'>Discover our app</h1>
                            <div>
                                <div className='flex gap-3'>
                                    <div className='flex gap-1 mt-8 border border-white p-1.5 rounded-xl'>
                                        <div className='mt-1 text-xl'>
                                            <FaGooglePlay />
                                        </div>
                                        <div>
                                            <h5 className='font-light tracking-wider'>Get it on</h5>
                                            <p>GOOGLE PLAY</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-1 mt-8 p-1 border border-white sm:p-1.5 rounded-xl'>
                                        <div className='mt-1 text-xl'>
                                            <FaApple />
                                        </div>
                                        <div>
                                            <h5 className='font-light tracking-wider'>Available on</h5>
                                            <p>APPLE STORE</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-6 mt-6 m-14 md:ml-20'>
                                    <div className='p-2 bg-white text-[#7F57F1] rounded-full text-xl'>
                                        <FaFacebookSquare />
                                    </div>
                                    <div className='p-2 bg-white text-[#7F57F1] rounded-full text-xl'>
                                        <FaInstagram />
                                    </div>
                                    <div className='p-2 bg-white text-[#7F57F1] rounded-full text-xl'>
                                        <FaTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer