"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { CiHeart, CiLogout, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const MidHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const dropdownRef = useRef(null);

  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full border-b border-gray-300 relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-5 px-4 lg:px-24 container mx-auto gap-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-8 w-full md:w-auto justify-between">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold Merienda text-black"
          >
            Elecetra<span className="text-(--prim-color)">Hub</span>
          </Link>

          {/* Mobile Icons */}
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
            {/* User Auth Section */}
            <div className="relative" ref={dropdownRef}>
              {session?.user ? (
                <div className="flex items-center gap-3">
                  <div
                    className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#4B70F5] cursor-pointer active:scale-95 transition-all shadow-sm "
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <Image
                      src={
                        session.user.image || "/assets/images/default-user.png"
                      }
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-12 w-52 bg-white border border-gray-200 rounded-xl shadow-2xl z-9999 py-2 animate-in fade-in zoom-in duration-200">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-bold text-gray-800 truncate">
                          {session.user.name}
                        </p>
                        <p className="text-[10px] text-gray-400 truncate">
                          {session.user.email}
                        </p>
                      </div>

                      <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 font-bold transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <CiLogout className="text-lg" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-[#4B70F5] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-black transition-all"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full md:ms-6 md:mx-0 lg:mx-6 max-w-xl z-0 relative lg:flex md:hidden flex">
          <input
            type="text"
            placeholder="Search for a product..."
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none text-sm"
          />
          <button className="bg-(--prim-color) text-white px-4 rounded-r-lg cursor-pointer">
            <CiSearch className="text-xl" />
          </button>
        </div>

        {/* Desktop Icons + Profile Area */}
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

          {/* User Auth Section */}
          <div className="relative" ref={dropdownRef}>
            {session?.user ? (
              <div className="flex items-center gap-3">
                <div
                  className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#4B70F5] cursor-pointer active:scale-95 transition-all shadow-sm"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Image
                    src={
                      session.user.image || "/assets/images/default-user.png"
                    }
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-12 w-52 bg-white border border-gray-200 rounded-xl shadow-2xl z-[9999] py-2 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-800 truncate">
                        {session.user.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <button
                      onClick={() => signOut({ callbackUrl: "/login" })}
                      className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 font-bold transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <CiLogout className="text-lg" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-[#4B70F5] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-black transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
