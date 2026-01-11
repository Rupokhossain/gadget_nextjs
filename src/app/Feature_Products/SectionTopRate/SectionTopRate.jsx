"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TopRate from "./TopRate";
import AOS from "aos";

const SectionTopRate = ({ title, topRated }) => {
  const doubletopRated = [topRated, topRated, topRated];

  for (let i = 0; i < topRated.length; i += 5) {
    doubletopRated.push(topRated.slice(i, i + 5));
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
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
          slidesPerView={1}
          loop={true}
          onSlideChange={() => AOS.refresh()}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="pb-8"
        >
          {doubletopRated.map((selling, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                {selling.map((f, pIndex) => (
                  <TopRate
                    key={pIndex}
                    id={f.id}
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

export default SectionTopRate;
