"use client";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const PromoBannerSection = () => {
  const promoData = [
    {
      id: 1,
      badge: "Best Offer",
      title: "up to 30% off on headphone",
      imageUrl: "/assets/images/offer-img1.webp",
      animation: "fade-right"
    },
    {
      id: 2,
      badge: "Game Zone",
      title: "dualsense wireless controller",
      imageUrl: "/assets/images/offer-img2.webp",
      animation: "fade-left"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promoData.map((item, index) => (
          <div
            key={index}
            data-aos={item.animation}
            data-aos-duration="1000"
            data-aos-delay={index * 100}
            className="relative h-75 rounded-lg overflow-hidden w-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
          >
            {/* Text Content Area */}
            <div className="absolute z-10 h-full p-8 right-0 top-0 md:w-100 w-full text-end ">
              <span className="my-2 text-lg text-black font-normal bg-white w-fit px-2 rounded-md">
                {item?.badge}
              </span>

              <h2 className="Merienda font-bold text-black text-4xl leading-11 whitespace-pre-line py-3">
                {item?.title}
              </h2>

              <Link href="/shops">
                <div className="flex items-center justify-end mt-2">
                  <button className="flex items-center px-5 py-3 rounded-full text-white font-bold mt-2 bg-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                    Shop Now
                    <IoMdArrowForward className="text-2xl pl-2" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBannerSection;
