"use client";

import React from "react";
import "swiper/css";
import Featured from "./Featured";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SectionFeatured = ({ title, featured }) => {
  const doubleFeatured = [];

  for (let i = 0; i < featured.length; i += 2) {
    doubleFeatured.push(featured.slice(i, i + 2));
  }

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="bg-[#E7EEFF] px-5 py-4 relative">
        <h3 className="text-lg font-bold text-[#1e1e1e] relative z-10">
          {title}
        </h3>
        <div className="absolute bottom-4 left-5 w-16 h-1 bg-blue-600 rounded-full" />
      </div>

      {/* Swiper */}
      <div className="p-4">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {doubleFeatured.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                {feature.map((f, pIndex) => (
                  <Featured
                    key={pIndex}
                    image={f.image}
                    title={f.title}
                    newPrice={f.newPrice}
                    oldPrice={f.oldPrice}
                    rating={f.rating}
                    soldCount={f.soldCount}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionFeatured;
