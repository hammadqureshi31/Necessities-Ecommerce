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

    const partnerNames = ['Acme', 'Globex', 'Initech', 'Wayne', 'Starks', 'Umbrella','Acme', 'Globex', 'Initech', 'Wayne'];

    return (
        <>
            <div className='flex flex-col gap-8 mt-20 md:flex-row md:justify-evenly mb-10 '>
                <div className='text-[#7F57F1] '>
                    <div className='flex flex-col gap-6 md:mt-4'>
                        <h5 className='text-2xl font-dance font-semibold tracking-wider
                     md:text-left md:text-4xl'>Testimonials</h5>
                        <h1 className='text-3xl font-roboto text-left font-bold w-[300px] md:text-4xl'>What people say about us</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className=" w-64 sm:w-full md:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-8 py-6">
                            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl font-roboto">{testimonials[currentTestimonialIndex].name}</h2>
                            <p className="text-sm text-gray-500 mt-4 md:text-xl font-aleg ">{testimonials[currentTestimonialIndex].feedback}</p>
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
                <div className="px-4">
                    <h2 className=" text-2xl md:text-3xl font-bold text-left text-[#7F57F1] mb-16 font-aleg italic tracking-wider">Special Offers & Promotions</h2>
                    <div className="">
                        {/* Offer Card 1 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-purple-500 transition duration-300 bg-gradient-to-b from-purple-400 to-purple-600">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-roboto italic tracking-wide">50% Off Spring Sale</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Limited time offer! Enjoy 50% off on selected spring collection items. Hurry, shop now!</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-purple-100 text-purple-700 font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                        {/* Offer Card 2 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-blue-500 transition duration-300 bg-gradient-to-b from-blue-400 to-blue-600">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-serif italic tracking-wide">Flash Sale - Today Only!</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Get an extra 20% off on all orders today! Use code FLASH20 at checkout. Don't miss out!</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-blue-100 text-blue-700 font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                        {/* Offer Card 3 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-green-500 transition duration-300 bg-gradient-to-b from-green-400 to-green-600">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-serif italic tracking-wide">Free Shipping This Weekend, Allover The Country</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Enjoy free shipping on all orders this weekend! No minimum purchase required.</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-green-100 text-green-700 font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











            <div className="px-4 mt-14">
                <div className="">
                    <h2 className="text-3xl font-bold text-left mb-6 font-aleg italic tracking-wider text-[#7F57F1]">Our Brand Partners</h2>
                    <div className="overflow-hidden mt-16">
                        <marquee behavior="scroll" direction="left" className="marquee">
                            {partnerNames.map((partner, index) => (
                                <span key={index} className="inline-block mr-8">
                                    <div className="relative overflow-hidden w-36 h-36 border-4 ring-1 ring-sky-300 rounded-full hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                                        <img src={`https://source.unsplash.com/random/400x400?brand/${(index+19)}`} alt={partner} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute inset-x-0 bottom-0 bg-white text-center p-2">
                                            <span className="text-gray-800 text-sm font-roboto font-semibold">{partner}</span>
                                        </div>
                                    </div>
                                </span>
                            ))}
                        </marquee>
                    </div>
                </div>




            </div>
        </>
    );
};

export default Feedbacks;
