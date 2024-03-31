import React, { useEffect, useState, Suspense } from 'react';
import { usefetch } from '../custom hooks/Fetching';

const Cards = React.lazy(() => import('./Cards'));

const Recommendation = () => {
    const [collection, setCollection] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    usefetch().then((resp) => setCollection(resp.reverse()));
  }, []);

  useEffect(() => {
    setElements(collection.reverse().slice(0,8));
  }, [collection]);


  return (
    <div>
        <div className='flex flex-wrap gap-3'>
        {elements.length > 0 && (
          <Suspense fallback={<div>Loading Products...</div>}>
            {elements.map((data, index) => (
              <Cards data={data} key={data.id} />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default Recommendation