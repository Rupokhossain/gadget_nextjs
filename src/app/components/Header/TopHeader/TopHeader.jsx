import React from "react";

const TopHeader = () => {
  return (
    <div className="w-full bg-(--prim-color) text-white text-[10px] sm:text-sm">
      <div className="flex items-center justify-between py-2 sm:py-3 mx-auto container px-4 lg:px-24">
        <div className="flex space-x-2 sm:space-x-4 flex-wrap">
          <a
            href="#"
            className="pr-2 sm:pr-3 border-r-2 border-gray-300 hover:underline transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hidden xs:block pr-2 sm:pr-3 border-r-2 border-gray-300 hover:underline transition-all duration-300"
          >
            Free Delivery
          </a>
          <a
            href="#"
            className="hidden md:block hover:underline transition-all duration-300"
          >
            Returns Policy
          </a>
        </div>

        <div className="flex space-x-2 sm:space-x-4 text-end">
          <a
            href="#"
            className="pr-2 sm:pr-3 border-r-2 border-gray-300 hover:underline transition-all duration-300"
          >
            Help Center
          </a>
          <a href="#" className="hover:underline transition-all duration-300">
            My Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
