import React from 'react'
import useWindowResize from '../contextAPI/WindowResize'
import Feedbacks from './Feedbacks'
import MissionAndGoals from './MissionAndGoals'
import Testimonials from './Testinomials'

const Branding = () => {

    const { width } = useWindowResize()
    return (
        <>
            <div className={`w-[${width}px] pt-14 flex flex-col text-center md:pt-20`}>
                <div className='mt-16 mb-10 text-left px-4 font-bold font-sans text-2xl text-[#7F57F1] md:ml-10'>
                    Why to choose us?
                </div>

                <div className='mx-auto px-4'>
                    <Testimonials />
                </div>

                <div className='mx-auto px-4'>
                    <Feedbacks />
                </div>

                <MissionAndGoals />
            </div>
        </>
    )
}

export default Branding