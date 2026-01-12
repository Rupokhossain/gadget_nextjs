"use client";

import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

import { useProductActions } from "@/hooks/useProductActions";

const SellGrid = ({ id, badge, badgeColor, image, price, oldPrice, title, index }) => {
 const { handleAddToCart} = useProductActions();

  const productData = {
    id,
    title,
    newPrice: price,
    image,
    badge,
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
      className="relative flex flex-wrap items-center border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-(--prim-color) cursor-pointer duration-300"
    >
      {/* Badge */}
      <div
        className={`absolute off-product ${badgeColor} top-2 left-2 px-4 py-2 Merienda text-xs font-bold text-white rounded bg-red-500`}
      >
        {badge}
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/3 relative flex justify-center items-center h-50">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-contain mt-10"
        />
      </div>

      {/* Details */}
      <div className="w-full lg:w-[60%] space-y-1 mt-5 ">
        <div className="flex items-center gap-2">
          {oldPrice && (
            <span className="text-gray-500 text-sm line-through">
              ${oldPrice}
            </span>
          )}
          <span className="text-xl font-semibold">${price}</span>
          <span className="text-gray-500 text-sm">/Qty</span>
        </div>
        <h3 className="text-lg mb-4 font-normal Unbounded hover:text-(--prim-color) transition-all duration-300">
          {title}
        </h3>

        <button
          onClick={() => handleAddToCart(productData)}
          className="w-full px-4 py-2 my-2 text-lg font-semibold text-(--prim-color) bg-(--prim-light) rounded-md hover:bg-(--prim-color) hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 justify-center"
        >
          Add To Cart <CiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default SellGrid;
