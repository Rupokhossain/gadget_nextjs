"use client";
import React from "react";
import Image from "next/image";

import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { FaStar, FaStore } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="container mx-auto px-4 lg:px-24 py-10 min-h-screen">
      <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#DEE5FF] text-gray-800">
              <th className="p-4 font-bold">Product</th>
              <th className="p-4 font-bold border-l border-gray-300">Price</th>
              <th className="p-4 font-bold border-l border-gray-300">Stock Status</th>
              <th className="p-4 font-bold border-l border-gray-300 text-center">Add To Cart</th>
              <th className="p-4 font-bold border-l border-gray-300">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <td className="p-4 flex items-center gap-6 min-w-[250px]">
                  <div className="w-36 h-36 border border-gray-300 rounded-xl overflow-hidden p-2 bg-white">
                    <Image src={item.image} alt={item.title} width={100} height={100} className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-medium Unbounded text-xl">{item.title}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <FaStore className="text-blue-500" /> By {item.shopName}
                    </p>
                    <div className="text-yellow-500 text-sm flex items-center mt-2">
                       <FaStar /> <span className="text-gray-400 me-1">({item.rating}) Reviews</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-bold text-gray-800 border-l border-gray-100 text-lg">${item.newPrice}</td>
                <td className="p-4 border-l border-gray-100 font-bold text-gray-900">In Stock</td>
                <td className="p-4 border-l border-gray-100">
                  <button 
                    onClick={() => dispatch(addToCart(item))}
                    className="flex items-center justify-center gap-2 bg-[#D9E2FF] hover:bg-[#4B70F5] hover:text-white cursor-pointer text-[#4B70F5] px-6 py-3 rounded-lg font-bold transition-all mx-auto"
                  >
                    Add To Cart <CiShoppingCart size={20} />
                  </button>
                </td>
                <td className="p-4 border-l border-gray-100">
                  <button 
                    onClick={() => dispatch(toggleWishlist(item))}
                    className="text-red-500 font-medium hover:underline duration-300 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span className="text-lg">✕</span> Remove
                  </button>
                </td>
              </tr>
            ))}
            {wishlistItems.length === 0 && (
              <tr><td colSpan="5" className="p-16 text-center text-gray-400 font-bold text-xl italic">No items found in your wishlist!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;