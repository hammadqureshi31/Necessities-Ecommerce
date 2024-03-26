import React, { useEffect, useState } from 'react'
import { usefetch } from '../custom hooks/Fetching'
import Cards from './Cards'

const PopularProducts = () => {

  const [collection, setCollection] = useState([])
  const [elements, setElements] = useState([])


  useEffect(() => {
    usefetch().then((resp) => setCollection(resp.reverse()))
  }, [])

  useEffect(() => {
    setElements(collection.slice(0, 8).reverse())
  }, [collection])



  return (
    <>
      <div className='flex flex-wrap gap-12'>
        {elements.length > 0 && elements.map((data, index) => (
          <Cards data={data} key={data.id} />
        ))}
      </div>
    </>
  )
}

export default PopularProducts