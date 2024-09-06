import React, { useEffect, useState, Suspense, lazy } from 'react';
import { PiTShirt } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { TbSettingsBolt } from "react-icons/tb";
import { LuArmchair } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { usefetch } from '../custom hooks/Fetching';
// import { useWindowResize } from '../custom hooks/WindowResize'
import FilterDropDown from '../component/FiterDropDown';
import { Bounce, ToastContainer } from 'react-toastify';


const LazyCards = lazy(() => import('../component/Cards'));

const Allproducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [hasFilter, setHasFilter] = useState([]);
    // const { width } = useWindowResize()

    useEffect(() => {
        usefetch().then((resp) => {
            setAllProduct(resp)
            console.log(resp)
        })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFilter = (category) => {
        const filtered = allProduct.filter((value) => value.category == category);
        setHasFilter(filtered);
    };

    return (
        <>
            <div className=' justify-center text-center pl-4 md:pl-20 pt-10'>
                <div className='md:flex gap-20'>
                    <div className='hidden md:flex md:flex-col md:flex-wrap md:gap-8 md:pt-20 cursor-pointer'>
                        <h1 className='text-[#84019F] text-4xl font-roboto font-normal'>Categories</h1>
                        <div onClick={() => handleFilter("fragrances")} className='bg-[#FAF5FF] p-3 text-center flex justify-center gap-2'>
                            <div className='text-3xl text-sky-500'><PiTShirt /></div>
                            <h1 className='text-2xl font-aleg font-semibold text-sky-500'>Men's</h1>
                        </div>
                        <div onClick={() => handleFilter("beauty")} className='bg-[#FAF5FF] p-3 text-center text-[#84019F] flex justify-center gap-2'>
                            <div className='text-3xl text-[#FFC216]'><GiLargeDress /></div>
                            <h1 className='text-2xl font-aleg font-semibold text-[#FFC216]'>Women's</h1>
                        </div>
                        <div onClick={() => handleFilter("Electronics")} className='bg-[#FAF5FF] p-3 text-center text-[#84019F] flex justify-center gap-2'>
                            <div className='text-3xl  text-black'><TbSettingsBolt /></div>
                            <h1 className='text-2xl font-aleg font-semibold text-black'>Electronics</h1>
                        </div>
                        <div onClick={() => handleFilter("furniture")} className='bg-[#FAF5FF] p-3 text-center text-[#84019F] flex justify-center gap-2'>
                            <div className='text-3xl '><LuArmchair /></div>
                            <h1 className='text-2xl font-aleg font-semibold'>Furniture</h1>
                        </div>
                        <div onClick={() => handleFilter("groceries")} className='bg-[#FAF5FF] p-3 text-center text-[#84019F] flex justify-center gap-2'>
                            <div className='text-3xl text-[#F14343]'><TiShoppingCart /></div>
                            <h1 className='text-2xl font-aleg font-semibold text-[#F14343]'>Groceries</h1>
                        </div>
                    </div>
                    <LatestCollections hasFilter={hasFilter} allProduct={allProduct} handleFilter={handleFilter} />
                </div>
            </div>
        </>
    )
}

export default Allproducts;

const LatestCollections = ({ hasFilter, allProduct, handleFilter }) => {
    return (
        <div>
            {/* <button className='flex gap-2 p-2 ring-1 ring-black'>
            <h1 className=' font-marg'>Filter</h1>
            <div className=' text-xl'><CiFilter /></div>
           </button> */}

            <button className='flex justify-start text-center '>
                <FilterDropDown handleFilter={handleFilter} />

            </button>

            <div className='mt-12 mx-auto mb-4 text-left font-bold font-marg text-2xl md:pl-12 md:mt-0'>Our Latest Collections</div>
            <div className='flex flex-wrap gap-4 mr-3 mt-10'>
                <Suspense fallback={<div className=' text-start'>Loading...</div>}>
                    {hasFilter.length > 0 ? (
                        hasFilter.map((data, index) => (
                            <LazyCards data={data} key={data.id} />
                        ))
                    ) : (
                        allProduct.map((data, index) => (
                            <LazyCards data={data} key={data.id} />
                        ))
                    )}
                </Suspense>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};
