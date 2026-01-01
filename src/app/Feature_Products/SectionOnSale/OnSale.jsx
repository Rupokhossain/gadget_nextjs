"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const OnSale = ({
  image,
  title,
  newPrice,
  oldPrice,
  rating,
  soldCount,
}) => {
  return (
    <div className="flex items-center gap-4 p-2 hover:bg-gray-50 transition-colors rounded-lg group cursor-pointer">
      <div className="w-20 h-20 shrink-0 border border-gray-100 rounded-xl overflow-hidden p-1 bg-white">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[10px] text-gray-400 font-medium">
              {rating}
            </span>
            <FaStar size={10} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] text-gray-400">({soldCount})</span>
          </div>
          <h4 className="text-sm font-bold text-gray-800 line-clamp-1 mb-1">
            {title}
          </h4>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-gray-900">${newPrice}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${oldPrice}
              </span>
            )}
          </div>
        </div>
    </div>
  );
};

export default OnSale;
