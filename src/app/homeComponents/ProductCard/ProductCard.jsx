import React from 'react'


import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 relative cursor-pointer flex flex-col hover:shadow-lg transition-shadow duration-300">
      
      {/* Add to Cart Button */}
      <button className="absolute top-3 right-3 bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
        Add <CiShoppingCart size={14} />
      </button>

      {/* Product Image */}
      <div className="h-40 w-full flex items-center justify-center mb-4">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={200}
          height={200}
          className="max-h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="grow">
        <h3 className="text-xl font-normal Unbounded my-2 hover:text-(--prim-color) transition-all duration-300 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-md">
          <FaStar size={14} fill="currentColor" className='text-yellow-500 me-1' />
          <span>({product.rating})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-gray-500 text-sm line-through">${product.oldPrice}</span>
          )}
          <span className="text-xl font-semibold">${product.newPrice}</span>
          <span className="text-gray-500 text-sm">/Qty</span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard