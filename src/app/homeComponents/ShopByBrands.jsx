"use client";
import React from "react";
import Image from "next/image";

const brands = [
  { id: 1, name: "Graphicriver", logo: "/assets/images/brand-img2.webp" },
  { id: 2, name: "Audiojungle", logo: "/assets/images/brand-img3.webp" },
  { id: 3, name: "Activeden", logo: "/assets/images/brand-img5.webp" },
  { id: 4, name: "Canyon", logo: "/assets/images/brand-img2.webp" },
  { id: 5, name: "Graphicriver", logo: "/assets/images/brand-img3.webp" },
  { id: 6, name: "Audiojungle", logo: "/assets/images/brand-img5.webp" },
];

const ShopByBrands = () => {
  const brandList = [...brands, ...brands, ...brands];

  return (
    <div className="container mx-auto px-4 my-10">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-[#CED9FF] rounded-2xl p-10 md:p-16 text-center overflow-hidden"
      >
        {/* Title */}
        <h2
          data-aos="zoom-in"
          className="text-xl md:text-4xl lg:text-5xl Unbounded mb-8"
        >
          Shop by Brands.
        </h2>

        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-8 animate-marquee pause-on-hover whitespace-nowrap group-hover:pause">
            {brandList.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl py-4 px-8 flex items-center justify-center min-w-45 h-16 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={130}
                  height={30}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;
