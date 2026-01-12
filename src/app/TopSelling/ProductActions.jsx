"use client";
import React from "react";
import { useSelector } from "react-redux";

import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";
import { useProductActions } from "@/hooks/useProductActions";

const ProductActions = ({ product }) => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product?.id);

  const { handleAddToCart, handleWishlistAction } = useProductActions(product);

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleAddToCart(product)}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all cursor-pointer"
      >
        <FaShoppingCart /> Add To Cart
      </button>

      <button
        onClick={() => handleWishlistAction(product)}
        className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        {isWishlisted ? (
          <FaHeart className="text-indigo-500" />
        ) : (
          <FaRegHeart />
        )}
        Wishlist
      </button>
    </div>
  );
};

export default ProductActions;
