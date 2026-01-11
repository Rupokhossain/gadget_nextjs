"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import AOS from "aos"; 

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Category = ({ category }) => {
  if (!category) return null;

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => AOS.refresh()} 
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {category.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div 
                className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg cursor-pointer mx-1"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
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