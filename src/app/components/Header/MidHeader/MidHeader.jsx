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
  
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideDesktop =
        desktopRef.current && !desktopRef.current.contains(event.target);
      const clickedOutsideMobile =
        mobileRef.current && !mobileRef.current.contains(event.target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full border-b border-gray-300 relative bg-white">
      <div className="lg:flex hidden flex-col md:flex-row items-center justify-between py-4 md:py-5 px-4 lg:px-24 container mx-auto gap-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-8 w-full md:w-auto justify-between z-100">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold Merienda text-black hidden lg:flex"
          >
            Elecetra<span className="text-(--prim-color)">Hub</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full md:ms-6 md:mx-0 lg:mx-6 max-w-xl z-10 relative lg:flex md:hidden flex">
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
          <div className="relative" ref={desktopRef}>
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
                      onClick={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        await signOut({ callbackUrl: "/login" });
                      }}
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

      {/* --- Mobile Header Section (Visible only on lg:hidden) --- */}
      <div className="flex lg:hidden w-full items-center justify-between py-4 px-4 relative z-[100]">
        {/* logo */}
        <Link
          href="/"
          className="text-xl md:text-3xl font-bold Merienda text-black shrink-0 active:scale-95 transition-transform text-left"
        >
          Elecetra<span className="text-[#4B70F5]">Hub</span>
        </Link>

        {/* icon */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            <CiHeart className="text-gray-700 text-2xl md:text-3xl" />
            <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {wishlistCount}
            </span>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <CiShoppingCart className="text-gray-700 text-2xl md:text-3xl" />
            <span className="absolute -top-2 -right-2 bg-(--prim-color) text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          </Link>

          {/* User Profile / Logout Dropdown */}
          <div className="relative" ref={mobileRef}>
            {session?.user ? (
              <div className="flex items-center">
                {/* Profile Image */}
                <div
                  className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#4B70F5] cursor-pointer shadow-md active:scale-90 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
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

                {/* Dropdown menu*/}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl z-[9999] py-2 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                      <p className="text-xs font-bold text-gray-800 truncate leading-tight">
                        {session.user.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate mt-0.5">
                        {session.user.email}
                      </p>
                    </div>

                    {/* Logout button - logic fixed */}
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 font-bold transition-colors flex items-center gap-2 cursor-pointer pointer-events-auto"
                      onClick={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        await signOut({ callbackUrl: "/login" });
                      }}
                    >
                      <CiLogout className="text-lg" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-[#4B70F5] text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-black transition-all shadow-md active:scale-95"
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
