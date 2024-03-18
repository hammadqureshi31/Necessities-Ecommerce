import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const ID = Number(id)
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulate fetching product details from an API
        const fetchProductDetails = async () => {
            try {
                // Assuming your API endpoint for fetching product details is `/api/products/${id}`
                const response = await fetch(`/api/products/${ID}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    throw new Error('Failed to fetch product details');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductDetails();
    }, [ID]);

    return (
        <div className="container mx-auto mt-10">
            {product ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-xl text-[#7F57F1]">{product.rating.rate}</span>
                            <span className="text-sm ml-2 text-gray-600">({product.rating.count} ratings)</span>
                        </div>
                        <p className="text-2xl font-semibold text-[#7F57F1] mb-4">Rs {product.price}</p>
                        <button className="bg-[#7F57F1] text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500">
                            Add To Cart
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetails;
