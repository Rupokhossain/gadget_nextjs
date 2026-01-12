"use client"
import React from 'react'
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product, delay }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {

    const isAlreadyInCart = cartItems.some((item) => item.id === product.id)

    if (isAlreadyInCart) {
      toast.error(`"${product.title}" is already in your cart!`, {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#fff9c4',
          color: '#333',
          fontWeight: 'medium'
        },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart! 🛒`);
    }
  }

  return (
    <div 

      data-aos="fade-up" 
      data-aos-delay={delay} 
      data-aos-duration="800"
      className="bg-white border border-gray-200 rounded-xl p-4 relative cursor-pointer flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      
      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart} 
        className="absolute top-3 right-3 cursor-pointer bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors z-10"
      >
        Add <CiShoppingCart size={14} />
      </button>

      {/* Product Image */}
      <div className="h-40 w-full flex items-center justify-center mb-4 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={200}
          height={200}
          className="max-h-full object-contain hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="grow">
        <h3 className="text-lg text-gray-800 my-2 line-clamp-2 Unbounded">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-xs mb-2">
          <FaStar size={12} fill="currentColor" className='me-1' />
          <span>({product.rating})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-gray-400 text-xs line-through">${product.oldPrice}</span>
          )}
          <span className="text-lg font-bold text-gray-900">${product.newPrice}</span>
          <span className="text-gray-400 text-[10px]">/Qty</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;