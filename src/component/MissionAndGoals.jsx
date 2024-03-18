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
        <div ref={containerRef} className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-sky-100">
            <motion.div variants={containerVariants} initial="hidden" animate={controls} className="max-w-full md:max-w-2xl md:mr-8">
                <h2 className="text-xl md:text-4xl font-bold mb-12 text-center md:text-left text-[#7F57F1]">Our Mission & Goals</h2>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left font-serif italic">Empower small businesses to thrive in the digital economy.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left font-serif italic">Provide innovative solutions that simplify everyday tasks.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left font-serif italic">Foster a culture of continuous learning and growth.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left font-serif italic">Deliver exceptional customer experiences through creativity and empathy.</motion.h3>
                <motion.h3 variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left font-serif italic">Drive positive change by embracing diversity and sustainability.</motion.h3>
            </motion.div>
            <div className="max-w-full md:max-w-lg">
                <img src='./images/menswear.jpeg' alt="Menswear" className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
}

export default MissionAndGoals;
