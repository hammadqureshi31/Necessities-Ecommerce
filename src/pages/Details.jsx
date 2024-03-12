import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useWindowResize from '../contextAPI/WindowResize'
import { usefetch } from '../contextAPI/Fetching'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const ID = Number(id)
    const { width } = useWindowResize()
    const [allProduct, setAllProduct] = useState([]);
    const [hasFilter, setHasFilter] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        usefetch().then((resp) => setAllProduct(resp))
        const filtered = allProduct.filter((value) => value.id === ID);
        setHasFilter(filtered);
    }, [allProduct]);


    return (
        <>
            <div className={`w-[${width}px mx-auto] pt-14`}>
                <div>
                    {hasFilter.map((data, index) => (
                        <div key={data.id}
                            className='flex flex-col gap-8 justify-center text-center md:flex-row md:text-left md:gap-14'>
                            <div>
                                <div
                                    className='rounded-full p-4 ring-2 w-40 mx-auto md:w-80'>
                                    <img src={`${data.image}`} alt="" className='w-40 md:w-44 mx-auto' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-8 justify-center text-center md:text-left md:justify-start md:w-1/2'>

                                <h1 className='md:text-left font-semibold font-mono italic text-xl'>Category: 
                                <span className='font-normal text-md font-serif not-italic opacity-45 md:ml-8'>  {data.category}</span></h1>

                                <h1 className='md:text-left font-semibold font-mono italic text-xl'>Title: 
                                <span className='font-normal text-lg md:ml-8 font-serif not-italic text-[#7F57F1]'>${data.title}</span></h1>

                                <p className='md:text-left font-semibold font-mono italic text-xl'>Description:   
                                <span className='font-normal text-sm font-serif not-italic opacity-45 md:ml-8'>${data.description} </span></p>

                                <div className=' text-center md:flex mx-auto '>
                                    <div className='flex gap-4 text-center mx-auto md:text-left'>
                                        <h3 className='md:text-left font-mono  text-xl'>Sold 
                                        <span className='font-bold  font-sans italic text-xl text-[#7F57F1] md:ml-4'>({data.rating.count})</span></h3>
                                        <h3 className='md:text-left font-mono  text-xl'>Rating
                                        <span className='font-bold font-sans italic text-xl text-[#7F57F1] md:ml-4'>({data.rating.rate})</span></h3>
                                    </div>

                                    <h1 className='text-left font-mono  text-xl mt-8 ml-6 md:mt-0 underline'>Price: Rs 
                                    <span className='font-bold font-sans italic text-xl text-[#7F57F1]'>${data.price}</span></h1>
                                </div>

                                <div className='mx-auto flex gap-8 '>
                                    <button onClick={()=>navigate(-1)}
                                    className='bg-red-500 px-3 py-2 font-sans text-center rounded-lg text-white hover:bg-red-300'>
                                        Go To Back
                                    </button>
                                    <button className='bg-[#7F57F1] px-3 py-2 font-sans text-center rounded-lg text-white hover:bg-sky-500'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Details