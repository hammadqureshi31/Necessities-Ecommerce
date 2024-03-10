import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Testimonials = () => {
    const containerRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start('visible');
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3
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

    return (
        <>
            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial='hidden'
                animate={controls}
                className='mb-16 flex flex-wrap gap-4'
            >
                <motion.div
                    variants={itemVariants}
                    className='w-72 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg shadow-md overflow-hidden relative'
                >
                    <div className='absolute inset-0 bg-white opacity-25'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-white w-64 h-40 rounded-lg p-4'>
                            <h1 className='text-2xl font-bold text-purple-800 mb-2'>Quality Assurance</h1>
                            <p className='text-sm text-gray-700'>We prioritize quality in everything we offer, ensuring that our products meet the highest standards of excellence.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className='w-72 h-48 bg-gradient-to-br from-pink-400 to-red-600 rounded-lg shadow-lg overflow-hidden relative'
                >
                    <div className='absolute inset-0 bg-white opacity-25'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-white w-64 h-40 rounded-lg p-4 shadow-md'>
                            <h1 className='text-2xl font-bold text-red-800 mb-2'>Customer Satisfaction</h1>
                            <p className='text-sm text-gray-700'>We prioritize customer satisfaction by providing exceptional service and support.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className='w-72 h-48 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg shadow-lg overflow-hidden relative'
                >
                    <div className='absolute inset-0 bg-white opacity-25'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-white w-64 h-40 rounded-lg p-4 shadow-md'>
                            <h1 className='text-2xl font-bold text-blue-800 mb-2'>Innovation</h1>
                            <p className='text-sm text-gray-700'>We embrace innovation to continually improve our products and services.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className='w-72 h-48 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg shadow-lg overflow-hidden relative'
                >
                    <div className='absolute inset-0 bg-white opacity-25'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-white w-64 h-40 rounded-lg p-4 shadow-md'>
                            <h1 className='text-2xl font-bold text-yellow-800 mb-2'>Commitment</h1>
                            <p className='text-sm text-gray-700'>We are committed to delivering excellence in every aspect of our business.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Testimonials;
