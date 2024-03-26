import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/addToCartSlice';
import { useFirebase } from '../contextAPI/Firebase';

const Card = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firebase = useFirebase()

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDetail = (id) => {
        navigate(`/product/details/${id}`)
    }

    const handleCart = (event)=>{
        if(firebase.isLogin){
            event.stopPropagation();
            let totalprice = Math.round(data.price*1)
            console.log('clicked')
            dispatch(addItem({
                image: data.image,
                title: data.title,
                description: data.description,
                price: totalprice,
                rating: data.rating.rate,
                id: data.id,
                qty: 1
            }));
        }
        else{
            event.stopPropagation();
            alert("Signup Required !")
        }
    }

    return (
        <div onClick={() => handleDetail(data.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col gap-3 p-3 mb-8 justify-center text-left border w-[300px] rounded-2xl
             ${hovered ? 'ring-[#7F57F1] ring-2 transform hover:scale-105' : ''
                }`}
        >
            <div className='mx-auto'>
                <img src={`${data.image}`} alt='' className='size-40' />
            </div>
            <div>
                <h1 className='font-semibold font-aleg text-xl tracking-wide'>
                    {data.title.slice(0, 25)}
                </h1>
            </div>
            <div>
                <p className='font-roboto font-normal text-sm opacity-45'>
                    {data.description.slice(0, 100)}
                </p>
            </div>
            <div className='flex justify-between gap-3 mx-auto'>
                <p className='font-aleg text-xl tracking-wide'>rating:
                    <span className='text-[#7F57F1] font-roboto text-lg tracking-wide'> ({data.rating.rate})</span></p>
                <h1 className='font-aleg text-xl font-medium'>price:Rs <span 
                className='text-[#7F57F1] font-roboto text-xl font-semibold underline'>{data.price}</span></h1>

            </div>
            <div className=''>
            <button onClick={handleCart}
                className='bg-[#7F57F1] px-3 py-2 font-roboto text-center rounded-lg text-white hover:bg-red-500'>
                    Add To Cart
                </button>
            
            </div>
        </div>
    );
};

export default Card;
