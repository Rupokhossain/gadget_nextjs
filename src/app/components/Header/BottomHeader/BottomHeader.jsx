"use client"
import Link from "next/link";
import { useState } from "react";

import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";

const BottomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow relative bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex items-center justify-between h-14">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Desktop Navigation Links */}
          <div className={`
            absolute lg:static top-14 left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50
            flex flex-col lg:flex-row items-center lg:space-x-8 p-5 lg:p-0 
            transition-all duration-300 shadow-md lg:shadow-none
            ${isOpen ? "flex" : "hidden lg:flex"}
          `}>
            {["Home", "Shop", "Blog", "Contact Us"].map((item) => (
              <Link
                key={item}
                href="/"
                className="py-2 lg:py-0 hover:text-[#4B70F5] transition-all duration-300 cursor-pointer font-semibold text-gray-700"
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div>
            <button className="flex items-center cursor-pointer font-bold bg-(--prim-color) text-white px-4 py-2 sm:p-3 text-xs sm:text-base">
              <IoCallOutline className="me-2 text-lg sm:text-xl"/> 
              <span className="inline">01- 234 567 890</span>
   
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;