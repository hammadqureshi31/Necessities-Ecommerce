import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/addToCartSlice';
import { useFirebase } from '../contextAPI/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from "react-icons/fa";


const Card = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const firebase = useFirebase();

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDetail = (id) => {
        navigate(`/product/details/${id}`);
    };

    const handleCart = async (event) => {
        if (firebase.isLogin) {
            event.stopPropagation();
            setIsLoading(true); // Start loading animation
            try {
                let totalprice = Math.round(data.price * 1);
                dispatch(addItem({
                    image: data.image,
                    title: data.title,
                    description: data.description,
                    price: totalprice,
                    rating: data.rating.rate,
                    id: data.id,
                    qty: 1
                }));
                // Wait for a brief moment before showing the checkmark
                setTimeout(() => {
                    setIsLoading(false); // Stop loading animation
                    setShowCheck(true); // Show checkmark
                }, 1000);
            } catch (error) {
                console.error("Error adding item to cart:", error);
                setIsLoading(false); // Stop loading animation
            }
        } else {
            event.stopPropagation();
            toast.error("Signup Required!");
        }
    };

    return (
        <div onClick={() => handleDetail(data.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col gap-3 p-3 mb-8 justify-center text-left border w-[300px] rounded-2xl
             ${hovered ? 'ring-[#7F57F1] ring-1 transform hover:scale-105' : ''}`}
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
                    <span className='text-[#84019F] font-roboto text-lg tracking-wide'> ({data.rating.rate})</span></p>
                <h1 className='font-aleg text-xl font-medium'>price:Rs <span 
                className='text-[#84019F] font-roboto text-xl font-semibold underline'>{data.price}</span></h1>
            </div>
            <div className=''>
                <button onClick={handleCart}
                    className={`bg-[#84019F] px-3 py-2 flex gap-3 font-roboto text-center rounded-lg text-white hover:bg-red-500 relative`}>
                     <h6 className=''>Add to cart</h6>   
                    <div className=''>
                    {isLoading && (
                        <div className="spinner" />
                    )}
                    {showCheck && (
                        <FaCheck className="checkmark" />
                    )}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Card;
