import React from 'react'
import useWindowResize from '../custom hooks/WindowResize'
import Feedbacks from './Feedbacks'
import MissionAndGoals from './MissionAndGoals'
import Testimonials from './Testinomials'

const Branding = () => {

    const { width } = useWindowResize()
    const partnerNames = ['Acme', 'Globex', 'Initech', 'Wayne', 'Starks', 'Umbrella', 'Acme', 'Globex', 'Initech', 'Wayne'];

    return (
        <>
            <div className={`w-[${width}px] pt-14 flex flex-col text-center sm:w-[${width}px] md:w-[${width}px] md:pt-20`}>
                <div className='mt-16 mb-10 text-left px-2 font-bold font-marg text-2xl md:ml-10'>
                    Why to choose us?
                </div>

                <div className='mx-auto pl-4'>
                    <Testimonials />
                </div>

                <img src="./images/salesvg.jpg" alt="" className={`block md:h-[500px] w-[800px] mx-auto`} />
                <h2 className=" text-2xl md:text-3xl px-2 font-bold text-left font-marg md:ml-14 mt-14"
                >Special Offers & Promotions</h2>

                <div className='mx-auto'>
                    <Feedbacks />
                </div>


                <div className="mt-14">
                    <div className="">
                        <h2 className="font-bold text-left px-2 mb-6 font-marg text-2xl md:ml-14"> Our Brand Partners</h2>
                        <div className="overflow-hidden mt-16">
                            <marquee behavior="scroll" direction="left" className="marquee">
                                {partnerNames.map((partner, index) => (
                                    <span key={index} className="inline-block mr-8">
                                        <div className="relative overflow-hidden w-36 h-36 border-4 ring-1 ring-sky-300 rounded-full hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                                            <img src={`https://source.unsplash.com/random/400x400?brand/${(index + 19)}`} alt={partner} className="w-full h-full object-cover" />
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

                <MissionAndGoals />
            </div>
        </>
    )
}

export default Branding