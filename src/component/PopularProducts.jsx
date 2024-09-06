// PopularProducts.js
import React, { useEffect, useState, Suspense } from 'react';
import { usefetch } from '../custom hooks/Fetching';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Cards';

const PopularProducts = () => {
  const [collection, setCollection] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    usefetch().then((resp) => setCollection(resp.reverse()));
  }, []);

  useEffect(() => {
    setElements(collection.slice(0, 8).reverse());
  }, [collection]);

  return (
    <>
      <div className='flex flex-wrap gap-3'>
        {elements.length > 0 && (
          <Suspense fallback={<div>Loading Products...</div>}>
            {elements?.map((data, index) => (
              <Cards data={data} key={data.id} />
            ))}
          </Suspense>
        )}
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
    </>
  );
};

export default PopularProducts;
