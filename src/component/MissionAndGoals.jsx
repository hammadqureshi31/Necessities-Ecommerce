import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MissionAndGoals = () => {
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
            { threshold: 0.5 }
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
                staggerChildren: 0.5
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
        <div ref={containerRef} className="flex flex-col md:flex-row items-center  px-6 py-12 bg-sky-100 mt-24 overflow-hidden">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-full md:max-w-2xl md:mr-8">
                <h2 className="text-2xl md:text-4xl font-bold font-marg mb-12 text-left md:text-center text-[#84019f]">Our Mission & Goals</h2>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Empower small businesses to thrive in the digital economy.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Provide innovative solutions that simplify everyday tasks.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Foster a culture of continuous learning and growth.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Deliver exceptional customer experiences through creativity and empathy.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Drive positive change by embracing diversity and sustainability.</motion.h3>
                <motion.h3 variants={itemVariants} className="hidden md:inline-block text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Empower small businesses to thrive in the digital economy.</motion.h3>
                <motion.h3 variants={itemVariants} className="hidden md:inline-block text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-roboto">Provide innovative solutions that simplify everyday tasks.</motion.h3>
            </motion.div>
            <div className="max-w-full md:max-w-lg relative flex md:ml-40">
                <img src='./images/menswear.jpeg' alt="Menswear" className="hidden  md:w-[400px] md:h-[510px] md:inline-block md:absolute rounded-lg shadow-lg z-10 top-6 left-0 -ml-52" />
                <img src='./images/manshopping.jpg' alt="Menswear" className="w-full z-30 rounded-lg shadow-lg md:w-[350px] md:h-[560px] md:ml-auto relative" />
                <img src='./images/markus.jpg' alt="Menswear" className="hidden md:w-[300px] md:h-[510px] md:inline-block md:absolute rounded-lg shadow-lg  z-10 top-6 right-0 -mr-56" />
            </div>
        </div>
    );
}

export default MissionAndGoals;
