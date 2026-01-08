"use client";
import Link from "next/link";
import React from "react";
import {
  CiHeart,
  CiLocationOn,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import { useSelector } from "react-redux";


const MidHeader = () => {
    const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  return (
    <div className="w-full border-b border-gray-300 relative">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-5 px-4 lg:px-24 container mx-auto gap-4">
        {/* Logo & Mobile Menu Icons */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold Merienda text-black"
          >
            Elecetra<span className="text-(--prim-color)">Hub</span>
          </Link>

          {/* mobile */}
          <div className="flex lg:hidden items-center space-x-4">
            <Link href="/wishlist" className="relative">
              <CiHeart className="text-gray-600 text-2xl" />
              <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <CiShoppingCart className="text-gray-600 text-2xl" />
              <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full md:ms-6 md:mx-0 lg:mx-6 max-w-xl relative flex">
          <input
            type="text"
            placeholder="Search for a product..."
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none text-sm"
          />
          <button className="bg-(--prim-color) text-white px-4 rounded-r-lg cursor-pointer">
            <CiSearch className="text-xl" />
          </button>

          {/* Location  */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <CiLocationOn className="text-lg text-(--prim-color)" />
            <select className="px-3 rounded-lg text-(--prim-color) font-semibold appearance-none cursor-pointer outline-none">
              <option value="">New York</option>
              <option value="">Chicago</option>
            </select>
          </div>
        </div>

        {/* Wishlist + Cart (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/wishlist" className="relative group">
            <CiHeart className="text-gray-600 text-2xl group-hover:text-(--prim-color) transition-all" />
            <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {wishlistCount}
            </span>
          </Link>
          <Link href="/cart" className="relative group">
            <CiShoppingCart className="text-gray-600 text-2xl group-hover:text-(--prim-color) transition-all" />
            <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
             {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
