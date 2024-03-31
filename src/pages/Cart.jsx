import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteItem } from '../redux/slices/addToCartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [loadingItemId, setLoadingItemId] = useState(null);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const shippingPrice = 100;
  const totalPriceWithShipping = totalPrice + shippingPrice;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items]);

  const handleDeleteItem = async (itemId) => {
    setLoadingItemId(itemId); // Set loading state for this item
    setTimeout(() => {
      dispatch(deleteItem({ id: itemId }));
      setLoadingItemId(null); // Reset loading state after action is completed
    }, 1000); // Simulate some delay before dispatching delete action
  };

  return (
    <div className="px-10 mx-auto mt-8 flex flex-col md:flex-row">
      {/* Left Section - Item Cards */}
      <div className="w-full md:w-3/4 pr-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {items.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {items.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center border-b border-gray-300 py-4 mb-8">
                <img src={item.image} alt={item.title} className="w-40 h-40 mb-4 md:w-56 md:h-56 mr-4 md:mr-8 rounded-md" />
                <div className="flex flex-col md:flex-row md:justify-between w-full">
                  <div>
                    <h2 className="text-lg font-semibold">{item.title.slice(0, 50)}</h2>
                    <p className="hidden sm:block hitext-sm text-gray-600">{item.description.slice(0, 500)}</p>
                    <div className="flex sm:flex-col md:flex-row items-center gap-4 mt-5 md:mt-0">
                      <div className="flex items-center">
                        <p className="text-lg font-semibold mr-2">Rate:</p>
                        <p className="text-lg font-semibold text-blue-600">({item.rating})</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold mr-2">Price:</p>
                        <p className="text-lg font-semibold text-green-600">Rs {item.price}</p>
                      </div>
                      <div className="hidden sm:flex items-center">
                        <p className="text-lg font-semibold mr-2">Quantity:</p>
                        <p className="text-lg font-semibold text-green-600">{item.qty}</p>
                      </div>
                    </div>
                  </div>
                  <div className='cursor-pointer' onClick={() => handleDeleteItem(item.id)}>
                    {/* Show loading spinner when loadingItemId matches the current item id */}
                    {loadingItemId === item.id ? (
                      <div className="spinner"></div>
                    ) : (

                      <div>
                        <RiDeleteBin6Line className=' hidden sm:block text-2xl right-0' />
                        <div className='flex mt-4 gap-20 sm:hidden'>
                          <div className="flex items-center">
                            <p className="text-lg font-semibold mr-2">Quantity:</p>
                            <p className="text-lg font-semibold text-green-600">{item.qty}</p>
                          </div>
                          <RiDeleteBin6Line className='text-2xl right-0' />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section - Total Price with Shipping */}
      <div className="w-full md:w-1/4 bg-gray-100 p-6 mt-6 md:mt-0 md:ml-4">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <p className="text-lg">Subtotal:</p>
          <p className="text-lg">Rs {totalPrice}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-lg">Shipping:</p>
          <p className="text-lg">Rs {shippingPrice}</p>
        </div>
        <hr className="border-gray-300 my-4" />
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Total:</h2>
          <h2 className="text-xl font-semibold">Rs {totalPriceWithShipping}</h2>
        </div>
        <div className='w-full mt-6'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
