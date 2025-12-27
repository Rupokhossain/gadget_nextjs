"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="relative hero">
      <div className="container mx-auto px-24 py-5">
        <div className="flex items-center gap-5 w-full h-75 md:h-112.5 lg:h-125">
          <Swiper
            slidesPerView={1}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[Navigation, EffectFade]}
            className="h-full hero-swiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="hero-wrap relative w-full rounded-2xl overflow-hidden border border-gray-200  h-full flex flex-col lg:flex-row items-center justify-between bg-[url('/assets/images/hero-bg-01.webp')] bg-cover bg-center">
                <div className="w-full p-5 z-3 h-full flex justify-center items-start flex-col">
                  <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                    Xbox One Pro <br></br>
                    <span className="bg-(--prim-color) px-2 rounded-2xl text-white">
                      Wireless
                    </span>{" "}
                    Controller
                  </h1>
                  <p className="w-[80%] my-3">Revolution Pro Controller.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
