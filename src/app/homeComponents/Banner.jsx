import Image from "next/image";
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
            className="relative h-70 rounded-lg overflow-hidden w-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-2"></div>
            {/* Content Side */}
            <div className="z-10 absolute bottom-[5%] left-[5%]">
              <h3 className="Merienda font-bold lg:text-3xl text-xl leading-11 whitespace-pre-line bg-(--prim-color) px-2 text-white rounded-lg">
                {item?.title}
              </h3>

              <div>
                <Link href="/shops">
                  {" "}
                  <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-(--prim-color) flex items-center hover:bg-white hover:text-(--prim-color) transition-all duration-300 cursor-pointer">
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
