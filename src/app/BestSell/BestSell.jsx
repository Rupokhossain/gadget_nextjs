import React from "react";
import SellGrid from "./SellGrid";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import SectionHeading from "../components/Shared/SectionHeading";
import Link from "next/link";

const BestSell = () => {
  const sellItems = [
    {
      id: 501,
      badge: "20%",
      badgeColor: "bg-red-500",
      image: "/assets/images/best-sell1.webp",
      price: "29.51",
      title: "SoundBox Pro Portable",
    },
    {
      id: 502,
      badge: "12%",
      badgeColor: "bg-red-500",
      image: "/assets/images/best-sell2.webp",
      price: "18.99",
      oldPrice: "20.99",
      title: "Polk Audio T30 Speaker",
    },
    {
      id: 503,
      badge: "New",
      badgeColor: "bg-yellow-400",
      image: "/assets/images/best-sell3.webp",
      price: "18.99",
      oldPrice: "32.99",
      title: "Taylor Farms Broccoli Florets Vegetables",
    },
    {
      id: 504,
      badge: "30%",
      badgeColor: "bg-red-500",
      image: "/assets/images/best-sell4.webp",
      price: "20.99",
      oldPrice: "30.99",
      title: "Taylor Farms Broccoli Florets Fruits",
    },
  ];
  return (
    <div className="px-4 py-10">
      <div className="container mx-auto">
        <div>
          <SectionHeading heading="Todays Best Sales."></SectionHeading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section: Small Product Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {sellItems.map((item, index) => (
              <SellGrid key={index} {...item} />
            ))}
          </div>

          {/* Right Section: Featured Gamepad Card */}
          <div className="lg:col-span-3 border border-gray-200 rounded-xl p-8 bg-white flex flex-col items-center justify-center text-center">
            <Image
              src="/assets/images/special-snacks-img.webp"
              alt="Gamepad"
              className="w-full h-50 object-contain"
              width={350}
              height={350}
            />
            <h2 className="text-4xl Merienda my-5 text-center">
              Numkuda USB 2.0 Gamepad
            </h2>
            <Link href="/shops">
              <button className="px-6 py-3 my-2 text-lg font-semibold hover:text-[#4B70F5] hover:bg-white border border-gray-300 rounded-md text-md bg-black text-white cursor-pointer transition duration-300 flex items-center gap-2">
                Shop Now <FaShoppingCart size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
