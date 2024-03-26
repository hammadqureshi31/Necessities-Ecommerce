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
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [name, setName] = useState('')
    const [userImage, setUserImage] = useState('')
    const navigate = useNavigate();
    const firebase = useFirebase(); // Get the firebase object from the context
    const item = useSelector(state => state.cart)
    const [profile, setProfile] = useState(false)

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
        { title: "All-Products", href: "/allproducts" },
        { title: "FAQs", href: "/faqs" },
        { title: "Contact", href: "/contact" },
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
                duration: 0.5,
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
                className="text-xl uppercase font-normal font-aleg  flex text-center"
            >
                <NavLink to={`${href}`} onClick={() => setOpen(false)} className=' navActive flex text-center justify-center pt-3'>{title}</NavLink>
            </motion.div>
        );
    };

    useEffect(() => {
        let username = firebase.userDetails.email?.split('@')[0].match(/[a-zA-Z]+/);
        username = username ? username[0] : "Unknown";
        setName(username)
        const Image = username?.charAt(0)
        setUserImage(Image)
    }, [firebase.isLogin])

    const toggleProfile = () => {
        setProfile(!profile)
    }

    const handleSignOut = () => {
        firebase.logOut(); // Call the signOut function from the firebase object
    }

     const hasLogin = () => {
        return firebase.isLogin ?
            <div className='flex justify-between text-center gap-2 sm:gap-16  md:mr-10'>
                <div className='flex justify-between text-center relative gap-1 cursor-pointer'
                    onClick={() => navigate('/cart')}>
                    <div className='mt-1 text-3xl sm:mt-3 md:pt-1 md:text-3xl'><GiShoppingCart /></div>
                    <NavLink className='hidden md:block mt-2.5 text-2xl font-aleg md:mr-10'>Cart</NavLink>
                    {item.length > 0 ?
                        <div className='absolute top-0 left-3 p-0.5 bg-red-500 rounded-full px-2 text-white'>
                            <h6 className='text-xs'>{item.length}</h6>
                        </div> : null
                    }

                </div>

                <div className='md:pr-3'>
                    <div onClick={toggleProfile}
                        className='flex text-center justify-center mt-1 px-2.5 py-1 md:text-lg uppercase bg-[#7F57F1]
                         text-white rounded-full md:mt-1 md:p-3'>
                        {userImage}
                    </div>
                    {profile && (
                        <div className="absolute z-50 right-2 mt-3 w-64 flex justify-between text-center overflow-hidden cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                                <div className="px-4 py-10 w-full text-sm text-gray-700 bg-sky-200 uppercase">{name}</div>
                                <div className=' mx-auto absolute left-24 top-16'>
                                    <div
                                        className='flex text-center justify-center w-16 h-16 p-3 text-2xl uppercase bg-[#7F57F1] text-white rounded-full ring-2 ring-white'>
                                        {userImage}
                                    </div>
                                </div>

                                <div className="px-4 py-2 text-sm text-gray-500 mt-10">{firebase.userDetails.email}</div>
                                <div className='flex text-center justify-center gap-2 mb-4'>
                                    <div className='bg-sky-200 p-2 rounded-full'><RiKeyLine /></div>
                                    <div className='bg-sky-200 p-2 rounded-full'><MdCreditScore /></div>
                                    <div className='bg-sky-200 p-2 rounded-full'><IoLocationOutline /></div>
                                </div>
                                <hr />
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            :
            <div className="flex justify-between md:gap-5">

                <button
                    className="bg-[#7F57F1] text-white text-sm p-1 px-1.5 rounded-lg md:hidden"
                    onClick={() => navigate('/signup')}
                >
                    Sign up
                </button>

                <button
                    className="hidden bg-[#7F57F1] text-white md:block md:text-md md:p-2 md:px-3 md:rounded-lg"
                    onClick={() => navigate('/signup')}
                >
                    Sign up
                </button>
                <button
                    className="hidden bg-[#7F57F1] text-white text-md p-2 px-3 rounded-lg md:block"
                    onClick={() => navigate('/login')}
                >
                    Log in
                </button>
            </div>
    };


 return (
        <div className="flex justify-between sticky top-0 z-10 bg-white text-center shadow-md p-2 py-3 sm:px-6 md:gap-10 md:py-2 md:px-10">
            <div
                onClick={toggleMenu}
                className="mt-1.5 text-2xl md:hidden"
            >
                <RiMenuUnfoldLine />
            </div>
            <div className="flex gap-2 text-center text-2xl text-[#7F57F1] md:text-xl md:gap-20 md:ml-10">
                <div className="flex items-center text-3xl md:text-4xl md:mt-1.5 justify-between w-full md:w-auto">
                    <div className="flex items-center">
                        <div className='hidden sm:block'><FaOpencart /></div>
                        <h1 className="ml-6 font-dance font-extrabold md:ml-0">Necessities</h1>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                variants={menuVars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="fixed z-10 left-0 top-0 w-full h-screen p-10 origin-top bg-[#7F57F1] text-white  md:hidden"
                            >
                                <div className="flex h-full flex-col">
                                    <div className="flex justify-between">
                                        <h1 className="text-5xl font-extrabold"><FaOpencart /></h1>
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
                                                <div className="overflow-hidden " key={index}>
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
    );

};

export default Navbar;



