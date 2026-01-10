"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();
  
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product?.id);

  return (
    <div className="flex gap-4">
      <button 
        onClick={() => dispatch(addToCart(product))}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all cursor-pointer"
      >
        <FaShoppingCart /> Add To Cart
      </button>
      
      <button 
        onClick={() => dispatch(toggleWishlist(product))}
         className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        Wishlist
      </button>
    </div>
  );
};

export default ProductActions;