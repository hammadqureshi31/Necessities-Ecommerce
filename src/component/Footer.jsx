import React from 'react'
import useWindowResize from '../contextAPI/WindowResize'
import { GiShoppingCart } from "react-icons/gi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {

    const { width, height } = useWindowResize()
    return (
        <>
            <div className={`bg-[#7F57F1] w-[${width}px] relative flex-col p-6 pt-12 mt-12`}>
                <div className='sm:flex justify-center gap-28 text-center mr-2'>
                    <h1 className='text-white font-bold text-2xl sm:mt-4 font-serif tracking-wider'>Subscribe To Get <br />Special Discounts</h1>
                    <div className='bg-white flex justify-center p-2 py-2.5 mt-8 md:mt-6 w-72 rounded-tl-3xl rounded-br-2xl'>
                        <input type="text" name="" id="" placeholder='Email Address' className='' />
                        <button className='text-white bg-sky-500 text-sm  font-semibold p-2 rounded-lg'>Subscribe</button>
                    </div>
                </div>

                <div className='mt-8 flex flex-col md:flex-row md:justify-between md:mt-14'>
                    <div className=''>
                        <div className='flex gap-2 text-center text-3xl text-white md:text-5xl md:gap-3 md:ml-12'>
                            <div className='mt-1.5 text-3xl md:text-5xl md:mt-1.5'><GiShoppingCart /></div>
                            <h1 className='tracking-wide font-serif italic'> necessities </h1>
                        </div>
                        <div className='text-md text-white flex flex-col gap-4 text-left mt-10 '>
                            <p className='text-xl font-semibold tracking-wide font-serif'>Address : 
                                <span className='text-sm font-normal font-sans'> Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. <br />Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</span>
                            </p>
                            <p className='tracking-wider'>+62 812 234 6789 <br />buangin@services.id</p>
                        </div>
                    </div>


                    <div className='flex gap-8 text-white font-semibold flex-wrap mt-24 text-center'>
                        <div className='flex- flex-col'>
                            <h1 className='font-bold text-xl'>Company</h1>
                            <h4 className='mt-10 font-normal'>About</h4>
                            <h4 className='mt-4 font-normal'>Careers</h4>
                            <h4 className='mt-4 font-normal'>Mobile</h4>
                        </div>
                        <div className='flex- flex-col'>
                            <h1 className='font-bold text-xl'>Contact</h1>
                            <h4 className='mt-10 font-normal'>Help/FAQs</h4>
                            <h4 className='mt-4 font-normal'>Press</h4>
                            <h4 className='mt-4 font-normal'>Affiliates</h4>
                        </div>
                        <div className='flex- flex-col gap-4'>
                            <h1 className='font-bold text-xl'>More</h1>
                            <h4 className='mt-10 font-normal'>Dilivery-Details</h4>
                            <h4 className='mt-4 font-normal'>Warranty</h4>
                            <h4 className='mt-4 font-normal'>Replacement-Policy</h4>
                        </div>
                        <div className='flex- flex-col gap-4 text-center'>
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