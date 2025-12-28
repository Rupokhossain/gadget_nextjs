"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const Hero = () => {

  const sliderData = [
    {
      id: 1,
      title: "Xbox One Pro",
      highlight: "Wireless",
      subTitle: "Controller",
      description: "Revolution Pro Controller.",
      bgImage: "/assets/images/hero-bg-01.webp",
      link: "/",
    },
    {
      id: 2,
      title: "Bobovr Z4",
      highlight: "Virtual Reality",
      subTitle: "3D Glasses",
      description: "Virtual through a new lens",
      bgImage: "/assets/images/hero-bg-02.webp",
      link: "/",
    },
    {
      id: 3,
      title: "Xbox One Pro",
      highlight: "Wireless",
      subTitle: "Controller",
      description: "Revolution Pro Controller.",
      bgImage: "/assets/images/hero-bg-03.webp",
      link: "/",
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4 lg:px-0">
        <Swiper
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, 
          }}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          className="h-100 md:h-125 lg:h-137.5 rounded-2xl overflow-hidden shadow-sm hero-slider"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full flex items-center bg-cover bg-center bg-no-repeat transition-transform duration-700"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="px-10 md:px-20 lg:px-24 z-10 w-full lg:w-[60%]">
                  <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold leading-tight">
                    {slide.title} <br />
                    <span className="bg-(--prim-color) px-3 rounded-2xl text-white inline-block mt-1">
                      {slide.highlight}
                    </span>{" "}
                    <br className="hidden md:block" /> {slide.subTitle}
                  </h1>

                  <p className="my-6 text-gray-600 text-lg font-medium">
                    {slide.description}
                  </p>

                  <Link href={slide.link}>
                    <button className="px-6 py-3.5 flex items-center rounded-full text-white font-bold mt-2 bg-(--prim-color) border-2 border-(--prim-color) hover:bg-white hover:text-(--prim-color) transition-all duration-300 cursor-pointer shadow-md">
                      Shop Now
                      <CiShoppingCart className="ms-3 text-2xl font-bold" />
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;