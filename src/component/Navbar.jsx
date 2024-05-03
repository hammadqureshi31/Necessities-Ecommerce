import React, { useState, useEffect } from 'react';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFirebase } from '../contextAPI/Firebase'; // Import useFirebase hook
import { useSelector } from 'react-redux';
import { RiKeyLine } from "react-icons/ri";
import { MdCreditScore } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import useWindowResize from '../custom hooks/WindowResize';
import { PiTShirt } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { GiLargeDress } from "react-icons/gi";
import { TbSettingsBolt } from "react-icons/tb";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { RiAncientPavilionLine } from "react-icons/ri";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [name, setName] = useState('')
    const [userImage, setUserImage] = useState('')
    const navigate = useNavigate();
    const firebase = useFirebase(); // Get the firebase object from the context
    const item = useSelector(state => state.cart)
    const [profile, setProfile] = useState(false)
    const myUser = useSelector(state => state.profile)
    const { width } = useWindowResize()

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const handleHoverExit = () => {
        setHoveredIndex(null);
    };

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Products", href: "/allproducts" },
        { title: "Faqs", href: "/faqs" },
        { title: "Contact", href: "/contact" },
        { title: "About", href: "/faqs" },
    ];

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 1,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 1,
            },
        },
    };

    const MobileNavLink = ({ title, href }) => {
        return (
            <motion.div
                variants={mobileLinkVars}
                className="text-lg font-normal font-marg  flex text-center"
            >
                <NavLink to={`${href}`} onClick={() => setOpen(false)} className=' navActive flex text-center justify-center pt-2.5'>{title}</NavLink>
            </motion.div>
        );
    };


    const fadeInUpAnimation = {
        hidden: {
            opacity: 0,
            scale: 0,
            x:-500,
            transition: {
                duration: 1,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        show: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 4.5,
                ease: [0, 0.55, 0.45, 1]
            },
        },
    };


    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 2,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    useEffect(() => {
        if (myUser.loginuser && firebase.userDetails) {
            let username = firebase.userDetails.email?.split('@')[0].match(/[a-zA-Z]+/);
            console.log(firebase.userDetails)
            username = username ? username[0] : "Unknown";
            setName(username);
            const Image = username?.charAt(0);
            setUserImage(Image);
        }
    }, [myUser.loginuser, firebase.userDetails]);

    const toggleProfile = () => {
        setProfile(!profile)
    }

    const handleSignOut = () => {
        firebase.logOut(); // Call the signOut function from the firebase object
        toggleProfile()
    }

    const hasLogin = () => {
        const isLoggedIn = myUser.loginuser;

        return isLoggedIn ? (
            <div className='flex justify-between text-center gap-2 sm:gap-16  md:mr-10'>
                <div className='flex justify-between text-center relative gap-1 cursor-pointer' onClick={() => navigate('/cart')}>
                    <div className='mt-1 text-3xl sm:mt-3 md:pt-1 md:text-3xl'><GiShoppingCart /></div>
                    <NavLink className='hidden md:block mt-2.5 text-2xl font-aleg md:mr-10'>Cart</NavLink>
                    {
                        <div className='absolute top-0 left-3 p-0.5 bg-red-500 rounded-full px-2 text-white'>
                            <h6 className='text-xs'>{item.length}</h6>
                        </div>
                    }
                </div>
                <div className='md:pr-3'>
                    <div onClick={() => setProfile(!profile)} className='flex text-center justify-center mt-1 px-2.5 py-1 md:text-lg uppercase bg-[#84019F] text-white rounded-full md:mt-1 md:p-3'>
                        {userImage}
                    </div>
                    {profile && (
                        <div className="absolute z-50 right-2 mt-3 w-64 flex justify-between text-center overflow-hidden cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="px-4 py-10 w-full text-sm text-gray-700 bg-sky-300 uppercase">{name}</div>
                                <div className=' mx-auto absolute left-24 top-16'>
                                    <div className='flex text-center justify-center w-16 h-16 p-3 text-2xl uppercase bg-[#84019F] text-white rounded-full ring-2 ring-white'>{userImage}</div>
                                </div>
                                <div className='mx-auto pt-10 mb-3 text-sm'>{firebase.userDetails.email}</div>
                                <div className='flex text-center justify-center gap-2 mb-4'>
                                    <div className='bg-sky-200 p-2 rounded-full'><RiKeyLine /></div>
                                    <div className='bg-sky-200 p-2 rounded-full'><MdCreditScore /></div>
                                    <div className='bg-sky-200 p-2 rounded-full'><IoLocationOutline /></div>
                                </div>
                                <hr />
                                <button type="button" className="block w-full px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handleSignOut}>
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <div className="flex justify-between md:gap-5 md:pr-8">
                <button className=" bg-[#84019F] text-white font-semibold hover:bg-sky-500 p-1 px-1.5 rounded-lg md:hidden" onClick={() => navigate('/signup')}>
                    Sign up
                </button>
                <button className="hidden bg-[#84019F] text-white font-semibold md:block md:text-lg  md:px-3 md:rounded-lg hover:bg-sky-500"
                 onClick={() => navigate('/signup')}>
                    Sign up
                </button>
                <button className="hidden bg-[#84019F] text-white font-semibold text-lg px-3 rounded-lg md:block hover:bg-sky-500"
                 onClick={() => navigate('/login')}>
                    Log in
                </button>
            </div>
        );
    };


    return (
        <>
            <div className={`sticky top-0 z-40 flex justify-between text-center w-[${width}px]
             shadow-sm bg-white p-2 py-3 sm:px-6 sm:w-[${width}px] md:gap-10 md:py-2 md:px-10 md:w-[${width}px]`}>
                {/* First child div */}
                <div
                    onClick={toggleMenu}
                    className="text-2xl flex gap-2  md:hidden"
                >
                    <RiMenuUnfoldLine className='mt-1.5'/>
                    <h1 className="font-right text-[#84019F] text-3xl md:ml-0">Necessities</h1>
                </div>
                <div className="flex gap-2 text-center bg-white text-2xl md:text-xl md:gap-20 md:ml-10">
                    <div className="flex items-center text-[#84019F] text-3xl md:mt-1.5 justify-between w-full md:w-auto">
                        <div className="hidden sm:flex items-center">
                           <div><RiAncientPavilionLine /></div>
                            <h1 className="font-right md:ml-0">Necessities</h1>
                        </div>
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    variants={menuVars}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="fixed z-10 left-0 top-0 w-full h-screen p-10 origin-top bg-[#84019F] text-white  md:hidden"
                                >
                                    <div className="flex h-full flex-col">
                                        <div className="flex justify-between">
                                        <div><RiAncientPavilionLine  className='mt-3'/></div>
                                            <p
                                                className="cursor-pointer text-sm pt-4 font-roboto "
                                                onClick={toggleMenu}
                                            >
                                                Close
                                            </p>
                                        </div>
                                        <motion.div
                                            variants={containerVars}
                                            initial="initial"
                                            animate="open"
                                            exit="initial"
                                            className="flex flex-col h-full justify-center font-aleg items-center gap-4 "
                                        >
                                            {navLinks.map((link, index) => {
                                                return (
                                                    <div className="overflow-hidden" key={index}>
                                                        <MobileNavLink
                                                            title={link.title}
                                                            href={link.href}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </div>
                </div>

                <AnimatePresence>
                    <motion.div
                        initial="initial"
                        animate="open"
                        variants={mobileLinkVars}
                        className="hidden md:flex md:gap-5 md:text-center md:font-semibold overflow-hidden"
                    >
                        {navLinks.map((link, index) => (
                            <MobileNavLink key={index} title={link.title} href={link.href} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {hasLogin()}
            </div>



            {/* Second child div */}
            <div className={`hidden md:flex justify-between overflow-hidden gap-72 py-2 shadow-md md:w-[${width}px]`}>
                <AnimatePresence>
                    <motion.div initial='hidden' variants={containerVariants} animate="visible"
                        className='flex gap-4 text-lg font-normal pt-2  pl-12'
                        onClick={() => navigate('/allproducts')}>
                        <motion.h4 variants={itemVariants}
                        className='text-sm'>Popular Search : </motion.h4>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Men </motion.h3>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Women</motion.h3>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Shoes</motion.h3>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Jewelery</motion.h3>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Electronics</motion.h3>
                        <motion.h3 className=' cursor-pointer text-sm hover:underline'
                            variants={itemVariants}>Accessories</motion.h3>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeInUpAnimation}
                    className='mx-auto flex gap-2 px-3'
                >
                    <input type="text" placeholder='Search' className='px-4 ring-1 rounded-full  md:w-60 md:ml-20 text-sm  max-h-10' />
                    <div className='text-[#84019F] text-3xl font-extrabold'><CiSearch /></div>
                </motion.div>
            </div>


            <div className='bg-pink-50'>
                <marquee className="md:hidden overflow-auto" behavior="scroll" direction="left">
                    <div className='inline-flex gap-3 pt-0.5'>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl mt-1 text-blue-600'><PiTShirt /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Men's</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl text-[#FFC216] mt-1'><GiLargeDress /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Women's</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl text-black mt-1'><TbSettingsBolt /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Electronics</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl mt-1'><GiBigDiamondRing /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Jewellery</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl text-[#F14343] mt-1'><GiConverseShoe /></div>
                            <h1 className='text-lg font-aleg font-semibold '>Shoes</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl mt-1 text-blue-600'><PiTShirt /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Men's</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-lg text-[#FFC216] mt-1'><GiLargeDress /></div>
                            <h1 className='text-xl font-aleg font-semibold'>Women's</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl text-black mt-1'><TbSettingsBolt /></div>
                            <h1 className='text-lg font-aleg font-semibold '>Electronics</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl mt-1'><GiBigDiamondRing /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Jewellery</h1>
                        </div>
                        <div className='p-2 text-center flex justify-center gap-2'>
                            <div className='text-xl text-[#F14343] mt-1'><GiConverseShoe /></div>
                            <h1 className='text-lg font-aleg font-semibold'>Shoes</h1>
                        </div>
                    </div>
                </marquee>
            </div>

        </>
    );

};

export default Navbar;



