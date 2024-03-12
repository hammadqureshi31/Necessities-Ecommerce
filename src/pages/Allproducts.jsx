import React, { useEffect, useState } from 'react';
import { PiTShirt } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { TbSettingsBolt } from "react-icons/tb";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { usefetch } from '../contextAPI/Fetching';
import Cards from '../component/Cards';

const Allproducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [hasFilter, setHasFilter] = useState([]);

    useEffect(() => {
        usefetch().then((resp)=>{ setAllProduct(resp) 
            console.log(resp)})
    }, []);

    const handleFilter = (category) => {
        const filtered = allProduct.filter((value) => value.category === category);
        setHasFilter(filtered);
        
    };

    return (
        <>
            <div className='flex justify-center text-center pl-4 md:pl-20 pt-10'>
                <div className='md:flex gap-20'>
                    <div className=' hidden md:flex md:flex-col md:flex-wrap md:gap-8 md:pt-20'>
                        <h1 className='text-[#7F57F1] text-2xl font-mono italic font-bold'>Categories</h1>
                        <div onClick={() => handleFilter("men's clothing")}
                         className='bg-[#FAF5FF] p-3 text-center flex justify-center gap-2'>
                            <div className='text-3xl '><PiTShirt /></div>
                            <h1  className='text-xl font-serif font-semibold'>Men's</h1>
                        </div>
                        <div onClick={() => handleFilter("women's clothing")}
                        className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                            <div className='text-3xl text-[#FFC216]'><GiLargeDress /></div>
                            <h1 className='text-xl font-serif font-semibold'>Women's</h1>
                        </div>
                        <div  onClick={() => handleFilter("electronics")}
                         className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                            <div className='text-3xl  text-black'><TbSettingsBolt /></div>
                            <h1 className='text-xl font-serif font-semibold'>Electronics</h1>
                        </div>
                        <div  onClick={() => handleFilter("jewelery")}
                        className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                            <div className='text-3xl '><GiBigDiamondRing /></div>
                            <h1 className='text-xl font-serif font-semibold'>Jewellery</h1>
                        </div>
                        <div onClick={() => handleFilter("shoes")}
                         className='bg-[#FAF5FF] p-3 text-center text-[#7F57F1] flex justify-center gap-2'>
                            <div className='text-3xl text-[#F14343]'><GiConverseShoe /></div>
                            <h1 className='text-xl font-serif font-semibold'>Shoes</h1>
                        </div>
                    </div>
                    <div>
                        <div className='mt-12 mx-auto mb-4 text-left font-bold font-sans text-2xl text-[#7F57F1] md:ml-10 md:mt-0'>Our Latest Collections</div>
                        <div className='flex flex-wrap gap-4 mx-2 mt-10'>
                            {hasFilter.length > 0 ? hasFilter.map((data, index) => (
                                <Cards data={data} key={data.id} />
                            )) : allProduct.map((data, index) => (
                                <Cards data={data} key={data.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allproducts;
