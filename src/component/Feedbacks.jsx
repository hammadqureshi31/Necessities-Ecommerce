import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowResize from '../custom hooks/WindowResize';


const Feedbacks = () => {
    const naviagte = useNavigate()
    const { width } = useWindowResize()
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

    const partnerNames = ['Acme', 'Globex', 'Initech', 'Wayne', 'Starks', 'Umbrella', 'Acme', 'Globex', 'Initech', 'Wayne'];

    return (
        <>
            <div className="py-10 px-4">

                <div className="">
                     
                    <div className="">
                        {/* Offer Card 1 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-purple-500 transition duration-300 bg-gradient-to-b from-sky-300 to-sky-500 2xl:mr-12">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-marg tracking-wide">50% Off Spring Sale</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Limited time offer! Enjoy 50% off on selected spring collection items. Hurry, shop now!</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-purple-100 text-[#2DB2EE] font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                        {/* Offer Card 2 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-blue-500 transition duration-300 bg-gradient-to-b from-purple-300 to-purple-600 2xl:mr-12">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-marg tracking-wide">Flash Sale - Today Only!</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Get an extra 20% off on all orders today! Use code FLASH20 at checkout. Don't miss out!</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-blue-100 text-[#9F49ED] font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                        {/* Offer Card 3 */}
                        <div className="offer-card inline-block flex-1 max-w-sm rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-green-500 transition duration-300 bg-gradient-to-b from-pink-300 to-[#6E427A]">
                            <div className="p-6 text-white">
                                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 font-marg tracking-wide">Free Shipping This Weekend, Allover The Country</h3>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">Enjoy free shipping on all orders this weekend! No minimum purchase required.</p>
                                <button onClick={() => naviagte('/allproducts')}
                                    className="bg-white hover:bg-green-100 text-[#89568C] font-bold py-2 px-4 rounded-full text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-auto font-dance">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='flex flex-col gap-8 mt-32 md:flex-row md:justify-evenly mb-10 '>
                <div className=''>
                    <div className='flex flex-col gap-6 md:mt-4'>
                        <h5 className='text-4xl font-dance font-extrabold tracking-widest
                     md:text-left md:text-4xl text-[#84019f]'>Testimonials</h5>
                        <h1 className='text-3xl font-marg sm:text-left font-bold w-[300px] md:text-4xl'>What people say about us</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className=" w-64 h-80 sm:w-full md:w-96 bg-white rounded-lg shadow-lg shadow-[#84019F] overflow-hidden 2xl:h-96 2xl:w-96">
                        <div className="px-8 py-6">
                            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl font-roboto">{testimonials[currentTestimonialIndex].name}</h2>
                            <p className="text-gray-500 mt-4 md:text-xl font-aleg ">{testimonials[currentTestimonialIndex].feedback}</p>
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




          
        </>
    );
};

export default Feedbacks;
