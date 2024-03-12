import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate()

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDetail = (id) => {
        navigate(`/product/details/${id}`)
    }

    return (
        <div onClick={()=>handleDetail(data.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col gap-3 p-4 mb-8 justify-center text-left border w-[280px] rounded-2xl
             ${hovered ? 'ring-[#7F57F1] ring-2 transform hover:scale-105' : ''
                }`}
        >
            <div className='mx-auto'>
                <img src={`${data.image}`} alt='' className='size-40' />
            </div>
            <div>
                <h1 className='font-semibold font-serif text-xl'>
                    {data.title.slice(0, 25)}
                </h1>
            </div>
            <div>
                <p className='font-mono font-normal text-sm opacity-50 italic'>
                    {data.description.slice(0, 100)}
                </p>
            </div>
            <div className='flex gap-3 mx-auto'>
                <h1 className='font-mono text-lg tracking-tighter underline'>price:Rs 
                <span className='text-[#7F57F1] font-sans font-bold'> {data.price}</span></h1>
                <p className='font-mono text-lg tracking-tighter'>rating: 
                <span className='text-[#7F57F1] font-sans italic'> {data.rating.rate}</span></p>
            </div>
            <div className='mx-auto'>
                <button className='bg-[#7F57F1] px-3 py-2 font-sans text-center rounded-lg text-white hover:bg-red-500'>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
