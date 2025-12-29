"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Category = ({ category }) => {
  if (!category) return null;

  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {slidesPerView: 1},
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {category.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full">
                
                <div className="w-full h-32 flex items-center justify-center mb-6 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120} 
                    height={120}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {item.productCount} 
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default Category;