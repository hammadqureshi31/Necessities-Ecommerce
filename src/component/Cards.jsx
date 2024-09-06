import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/addToCartSlice';
import { useFirebase } from '../contextAPI/Firebase';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

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
                    image: data.images[0],
                    title: data.title,
                    description: data.description,
                    price: totalprice,
                    rating: data.id,
                    id: data.id,
                    qty: 1
                }));
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
            className={` mx-auto flex flex-col gap-3 p-3 mb-8 justify-center text-left border w-[300px] rounded-2xl
             ${hovered ? 'ring-[#7F57F1] ring-1 transform hover:scale-105' : ''}`}
        >
            {/* Display product image */}
            <div className='mx-auto'>
                <img src={data.images[0]} alt={data.category.name} className='size-40' />
            </div>

            {/* Product Title */}
            <div>
                <h1 className=' font-medium font-marg text-lg tracking-wide'>
                    {data.title.slice(0, 20)}
                </h1>
            </div>

            {/* Product Description */}
            <div>
                <p className='font-roboto font-normal text-md opacity-45'>
                    {data.description.slice(0, 100)}
                </p>
            </div>

            {/* Display Price and Rating (using id for rating) */}
            <div className='flex justify-between gap-24 mx-auto'>
                <h1 className='text-2xl font-medium'>$ <span
                    className='text-[#84019F] text-2xl font-semibold font-roboto'>{data.price}</span></h1>
                <p className='flex text-2xl tracking-wide'><FcRating className='mt-1' />
                    <span className='text-[#84019F] text-2xl tracking-wide'>&nbsp;{data.id}</span></p>
            </div>

            {/* Add to Cart Button */}
            <div className='flex justify-between items-center'>
                <button onClick={handleCart}
                    className={`bg-[#84019F] px-3 py-2 flex gap-3 font-roboto text-center rounded-lg text-white hover:bg-red-500 relative`}
                >
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
                <div>
                    <h1 className=' font-semibold text-xl opacity-45 mr-2'>{data.id} Sold</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;
