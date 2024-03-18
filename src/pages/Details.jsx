import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWindowResize from '../contextAPI/WindowResize';
import { usefetch } from '../contextAPI/Fetching';
import { useNavigate } from 'react-router-dom';
import { FaRegHandPointRight } from "react-icons/fa";

const Details = () => {
    const { id } = useParams();
    const ID = Number(id);
    const { width } = useWindowResize();
    const [allProduct, setAllProduct] = useState([]);
    const [hasFilter, setHasFilter] = useState([]);
    const [quantity, setQuantity] = useState(1); // 1 is the default quantity
    const navigate = useNavigate();

    useEffect(() => {
        usefetch().then((resp) => setAllProduct(resp));
        const filtered = allProduct.filter((value) => value.id === ID);
        setHasFilter(filtered);
    }, [allProduct]);

    // Function to handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };

    // Function to add product to cart
    const addToCart = () => {
        // Add logic here to add product to cart using the selected quantity
        console.log(`Added ${quantity} item(s) to cart.`);
    };

    return (
        <div className={`container mx-auto pt-14 max-w-6xl`}>
            {hasFilter.map((data, index) => (
                <div key={data.id} className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                    <div className='pb-28'>
                        <img src={data.image} alt={data.title} className=' w-80 rounded-lg shadow-lg mb-6' />
                        <div className='flex justify-between md:justify-start space-x-12'>
                            <button onClick={() => navigate(-1)} className='bg-red-500 px-6 py-3 text-white font-semibold rounded-lg hover:bg-red-400 ml-4'>Go Back</button>
                            <button onClick={addToCart} className='bg-[#7F57F1] px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#6A48D6]'>Add To Cart</button>
                        </div>
                        <div className="mt-10">
                            <label htmlFor="quantity" className="text-2xl font-semibold text-[#7F57F1] font-serif">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={handleQuantityChange} 
                            className="ml-2 px-3 py-2 border rounded-lg w-16 text-lg focus:outline-none focus:border-[#7F57F1]" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-4 text-[#7F57F1]'>{data.title}</h1>
                        <p className='text-lg text-gray-700 mb-6'>{data.description}</p>
                        <div className='flex flex-col mb-6'>
                            <div className='flex items-center mb-2'>
                                <span className='text-xl text-[#7F57F1] font-semibold'>Rating:</span>
                                <span className='text-lg ml-2 text-gray-700'>{data.rating.rate}</span>
                                <span className='text-sm ml-2 text-gray-600'>({data.rating.count} ratings)</span>
                            </div>
                            <hr className='border-gray-300 w-full' />
                            <div className='flex items-center mt-2'>
                                <p className='text-lg font-semibold text-[#7F57F1]'>Price:</p>
                                <span className='text-2xl font-bold text-black font-sans italic underline ml-2'>Rs {data.price}</span>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h2 className='text-xl font-semibold mb-2 text-[#7F57F1]'>Product Features</h2>
                            <ul className='space-y-2'>
                                <li className='flex space-x-4'>
                                    <div className='text-2xl mt-2'>
                                        <FaRegHandPointRight />
                                    </div>
                                    <span className='text-lg text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                </li>
                                <li className='flex space-x-4'>
                                    <div className='text-2xl mt-2'>
                                        <FaRegHandPointRight />
                                    </div>
                                    <span className='text-lg text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                </li>
                                <li className='flex space-x-4'>
                                    <div className='text-2xl mt-2'>
                                        <FaRegHandPointRight />
                                    </div>
                                    <span className='text-lg text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                </li>
                            </ul>
                        </div>
                        <h2 className='text-xl font-semibold mb-2 text-[#7F57F1]'>Customer Reviews</h2>
                        <div className='bg-gray-100 p-4 rounded-lg mb-6'>
                            <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='text-gray-700 mt-2'>- John Doe</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Details;
