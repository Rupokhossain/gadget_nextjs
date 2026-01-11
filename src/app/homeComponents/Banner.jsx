"use client";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Banner = () => {
  const bannerData = [
    {
      id: 1,
      title: "Bluetooth Speaker",
      imageUrl: "/assets/images/promotional-banner-img1.webp",
    },
    {
      id: 2,
      title: "Beat Pro X3",
      imageUrl: "/assets/images/promotional-banner-img2.webp",
    },
    {
      id: 3,
      title: "Season for mobiles",
      imageUrl: "/assets/images/promotional-banner-img3.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bannerData.map((item, index) => (
          <div
            key={index}
            className="relative h-70 rounded-xl overflow-hidden w-full bg-no-repeat bg-cover bg-center group"
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
          >
            <div className="absolute top-0 left-0 h-full w-full bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
            
            {/* Content Side */}
            <div className="z-10 absolute bottom-[10%] left-[5%]">
              <h3 className="Merienda font-bold lg:text-3xl text-xl leading-snug bg-(--prim-color) px-3 py-1 text-white rounded-lg">
                {item?.title}
              </h3>

              <div>
                <Link href="/shops">
                  <button className="px-6 py-3 rounded-full text-white font-bold mt-5 bg-(--prim-color) flex items-center hover:bg-white hover:text-(--prim-color) transition-all duration-300 cursor-pointer shadow-lg">
                    Shop Now
                    <IoArrowForward className="pl-2 w-6 h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;