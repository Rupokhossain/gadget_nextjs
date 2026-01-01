import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="relative w-full min-h-[220px] md:h-[300px] bg-[#D6EBE9] rounded-2xl overflow-hidden flex items-center my-8">

        {/* Background Image (md+ only) */}
        <div className="hidden md:block absolute -right-5 -bottom-5 w-1/2 h-[120%] pointer-events-none">
          <Image
            src="/assets/images/phone.webp"
            alt="Apple Products"
            className="w-full h-full object-contain object-bottom-right rotate-[-5deg]"
            width={300}
            height={150}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full px-4 md:px-10">
          <h2 className="text-black text-2xl md:text-4xl Merienda">
            Get $50 off on select apple products
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2 my-3">
            <div className="bg-(--prim-color) text-white px-3 py-1 rounded-sm text-sm">
              Use Code: ElectraHub@10
            </div>
            <p className="text-gray-600 text-xs md:text-sm">
              *Valid once per user on a minimum spend of $200
            </p>
          </div>

          <button className="px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg font-semibold text-(--prim-color) bg-(--prim-light) rounded-md hover:bg-white hover:text-(--prim-color) transition-all duration-300 flex items-center gap-2">
            Shop Now <FaShoppingCart size={18} />
          </button>
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};


export default Offer;
