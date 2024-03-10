import React, { useState } from 'react';

const Feedbacks = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className='flex flex-col gap-8 mt-28 md:flex-row md:justify-evenly mb-28 '>
                <div className='text-[#7F57F1] '>
                    <div className='flex flex-col gap-6 md:mt-12'>
                        <h5 className='text-xl font-sans font-semibold tracking-wider italic
                     md:text-left md:text-2xl'>Testimonials</h5>
                        <h1 className='text-3xl font-mono font-bold w-[300px] md:text-4xl'>What people say about us</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-full md:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-8 py-6">
                            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">{testimonials[currentTestimonialIndex].name}</h2>
                            <p className="text-sm text-gray-500 mt-4 md:text-xl font-sans ">{testimonials[currentTestimonialIndex].feedback}</p>
                        </div>
                        <div className="flex justify-between px-8 pb-6">
                            <button onClick={prevTestimonial} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                &#8592;
                            </button>
                            <button onClick={nextTestimonial} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                &#8594;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-24 mt-8 md:mt-16'>
                <h1 className='text-xl font-mono text-[#7F57F1] font-semibold sm:text-3xl'>
                    Start Shopping Today!
                </h1>
                <p className='text-sm mt-6 tracking-wide font-serif opacity-45 italic sm:text-lg'>
                    Explore our website and start shopping for the latest trends and must-have products. With our commitment to quality, variety, and affordability, we're your one-stop destination for all your shopping needs.
                </p>
            </div>

            <div className='flex flex-col-reverse gap-6 
            sm:gap-8 sm:justify-around sm:text-center md:flex-row md:pl-52'>
                <div>
                    <img src="./images/Rectangle855.svg" alt="" className='sm:mx-auto w-68 h-68 md:w-64 md:h-64'/>
                </div>

                <div className='flex flex-col justify-center gap-3 text-left sm:text-center md:text-left md:ml-32'>
                    <h4 className='font-light font-sans underline md:text-lg'>Maps</h4>
                    <h1 className='font-bold text-lg font-serif italic text-[#7F57F1] md:text-2xl'>Find your nearest branch.</h1>
                    <p className='text-xs font-mono opacity-55 md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veritatis possimus saepe! Eos dolores quisquam.</p>
                </div>
            </div>
        </>
    );
};

export default Feedbacks;
