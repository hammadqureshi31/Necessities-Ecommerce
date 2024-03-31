import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import useWindowResize from '../custom hooks/WindowResize';
import { usefetch } from '../custom hooks/Fetching';
import { useNavigate } from 'react-router-dom';
import { FaRegHandPointRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/addToCartSlice';
import { useFirebase } from '../contextAPI/Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { FaCheck } from "react-icons/fa";



const Details = () => {
    const { id } = useParams();
    const ID = Number(id);
    const { width } = useWindowResize();
    const [allProduct, setAllProduct] = useState([]);
    const [hasFilter, setHasFilter] = useState([]);
    const [quantity, setQuantity] = useState(1); // 1 is the default quantity
    const navigate = useNavigate();
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [showCheck, setShowCheck] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const fadeInUpAnimation = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 50,
            x: -20
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const handleCart = (event) => {
        if (firebase.isLogin) {
            setIsLoading(true);
            console.log('clicked')
            let totalprice = Math.round(hasFilter[0].price * quantity);
            dispatch(addItem({
                image: hasFilter[0].image,
                title: hasFilter[0].title,
                description: hasFilter[0].description,
                price: totalprice,
                rating: hasFilter[0].rating.rate,
                id: hasFilter[0].id,
                qty: quantity
            }));
            setTimeout(() => {
                setIsLoading(false);
                setShowCheck(true);
            }, 1000);
        } else {
            event.stopPropagation();
            toast.error('Signup Required', {
                position: "top-rigth",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Suspense fallback={<div className='text-start'>Loading...</div>}>
            <div className={`container mx-auto pt-14 max-w-6xl flex flex-col items-center`}>
                {hasFilter ?
                    hasFilter.map((data, index) => (
                        <div key={data.id} className='flex flex-col md:flex-row gap-6 md:gap-40 items-center w-full'>
                            <div className='pb-28 md:w-96 md:mb-60'>
                                <motion.img
                                    initial="hidden"
                                    animate="show"
                                    variants={fadeInUpAnimation}
                                    src={data.image} alt={data.title} className='w-80 rounded-lg shadow-lg mb-6' />
                                <div className='flex justify-between md:justify-start space-x-12'>
                                    <button onClick={() => navigate(-1)} className='bg-red-500 p-3 text-white font-semibold rounded-lg hover:bg-red-400 ml-4 text-nowrap'>Go Back</button>
                                    <button onClick={handleCart} className={`bg-[#7F57F1] flex text-center px-3 py-2 gap-3 font-roboto font-medium rounded-lg text-white hover:bg-red-500 relative`}>
                                        <h6 className='text-nowrap mt-2.5'>Add to cart</h6>
                                        <div className='mt-2.5'>
                                            {isLoading && (
                                                <div className="spinner"></div> 
                                            )}
                                            {showCheck && (
                                                <FaCheck className="checkmark" />
                                            )}
                                        </div>
                                    </button>
                                </div>
                                <div className="mt-10">
                                    <label htmlFor="quantity" className="text-2xl font-semibold text-[#7F57F1] font-serif">Quantity:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={handleQuantityChange}
                                        className="ml-2 px-3 py-2 border rounded-lg w-16 text-lg focus:outline-none focus:border-[#7F57F1]" />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold font-roboto mb-4 text-[#7F57F1]'>{data.title}</h1>
                                <p className='text-lg text-gray-700 mb-6 font-aleg'>{data.description}</p>
                                <div className='flex items-left flex-col mb-10 gap-3'>
                                    <div className='flex items-center'>
                                        <span className='text-2xl text-[#7F57F1] font-semibold font-dance'>Rating:</span>
                                        <span className='text-lg ml-2 text-gray-700 font-roboto'>{data.rating.rate}</span>
                                        <span className='text-lg ml-2 text-gray-600 font-aleg'>({data.rating.count} ratings)</span>
                                    </div>
                                    <hr className='border-gray-300 w-full' />
                                    <div className='flex items-center mt-2'>
                                        <p className='text-3xl font-semibold text-[#7F57F1] font-aleg'>Price:</p>
                                        <span className='text-2xl font-bold text-black font-roboto underline ml-2'>Rs {data.price}</span>
                                    </div>
                                </div>
                                <div className='mb-6'>
                                    <h2 className='text-3xl font-semibold mb-2 text-[#7F57F1] font-aleg italic'>Product Features</h2>
                                    <ul className='space-y-2'>
                                        <li className='flex space-x-4'>
                                            <div className='text-2xl mt-2'>
                                                <FaRegHandPointRight />
                                            </div>
                                            <span className='text-xl text-gray-700 font-aleg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                        </li>
                                        <li className='flex space-x-4'>
                                            <div className='text-2xl mt-2'>
                                                <FaRegHandPointRight />
                                            </div>
                                            <span className='text-xl text-gray-700 font-aleg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                        </li>
                                        <li className='flex space-x-4'>
                                            <div className='text-2xl mt-2'>
                                                <FaRegHandPointRight />
                                            </div>
                                            <span className='text-xl text-gray-700 font-aleg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo aperiam quod.</span>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className='text-3xl font-semibold mb-2 text-[#7F57F1] font-aleg italic'>Customer Reviews</h2>
                                <div className='bg-gray-100 p-4 rounded-lg mb-6'>
                                    <p className='text-gray-700 font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className='text-gray-700 mt-2 font-dance text-2xl'>- John Doe</p>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-start'>Loading...</div>
                }
            </div>
        </Suspense>
    );

};

export default Details;
