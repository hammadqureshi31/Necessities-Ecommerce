import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedbacks = () => {
    const naviagte = useNavigate()
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            feedback: "I've been using this product for a while now, and I must say, it's been a game-changer for me. The quality is outstanding, and it has exceeded all my expectations. Highly recommended",
        },
        {
            id: 2,
            name: 'Jane Smith',
            feedback: "I was a bit skeptical at first, but after trying out this product, I'm blown away by its effectiveness. It's incredibly versatile and has made my life so much easier. Thank you for such an amazing product!",
        },
        {
            id: 3,
            name: 'Alice Johnson',
            feedback: "I can't thank you enough for creating such an incredible product. It's evident that a lot of thought and effort went into designing it. It's user-friendly, durable, and has definitely improved my daily routine. Two thumbs up!",
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className='flex flex-col gap-8 mt-20 md:flex-row md:justify-evenly mb-10 '>
                <div className='text-[#7F57F1] '>
                    <div className='flex flex-col gap-6 md:mt-4'>
                        <h5 className='text-xl font-sans font-semibold tracking-wider italic
                     md:text-left md:text-2xl'>Testimonials</h5>
                        <h1 className='text-3xl font-mono font-bold w-[300px] md:text-4xl'>What people say about us</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className=" w-64 sm:w-full md:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
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

            <div className="py-12 mt-24">
            <div className="max-w-6xl px-4">
                <h2 className="md:text-3xl font-bold text-left text-[#7F57F1] mb-16">Special Offers & Promotions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Offer Card 1 */}
                    <div className="offer-card">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4 font-serif italic underline tracking-wider">50% Off Spring Sale</h3>
                            <p className="text-gray-600 mb-4">Limited time offer! Enjoy 50% off on selected spring collection items. Hurry, shop now!</p>
                            <button onClick={()=>naviagte('/allproducts')}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full md:w-auto">Shop Now</button>
                        </div>
                    </div>
                    {/* Offer Card 2 */}
                    <div className="offer-card">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4 font-serif italic underline tracking-wider">Flash Sale - Today Only!</h3>
                            <p className="text-gray-600 mb-4">Get an extra 20% off on all orders today! Use code FLASH20 at checkout. Don't miss out!</p>
                            <button onClick={()=>naviagte('/allproducts')}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full md:w-auto">Shop Now</button>
                        </div>
                    </div>
                    {/* Offer Card 3 */}
                    <div className="offer-card">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4 font-serif italic underline tracking-wider">Free Shipping Weekend</h3>
                            <p className="text-gray-600 mb-4">Enjoy free shipping on all orders this weekend! No minimum purchase required.</p>
                            <button onClick={()=>naviagte('/allproducts')}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full md:w-auto">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Feedbacks;
