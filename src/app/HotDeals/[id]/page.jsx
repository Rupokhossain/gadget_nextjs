import Image from "next/image";
import React from "react";
import {
  FaRegHeart,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaUndoAlt,
  FaShoppingBag,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlinePayment, MdVerifiedUser } from "react-icons/md";

const page = async ({ params }) => {
  const { id } = await params;


  const res = await fetch("http://localhost:3000/phones.json", {
    cache: "no-store",
  });
  const data = await res.json();
  const phone = data.phones.find(
    (p) => p?.id?.toString() === id?.toString()
  );

  if (!phone)
    return (
      <div className="text-center py-20 text-2xl font-bold">
        phone Not Found
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-10 space-y-12 max-w-7xl">
      {/* TOP SECTION: IMAGE + INFO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 1. Image Section */}
        <div className="lg:col-span-4 border border-gray-200 rounded-3xl p-8 flex items-center justify-center bg-white h-[450px] shadow-sm">
          <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
            <Image
              src={phone?.image}
              alt={phone?.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 2. phone Summary Section */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {phone?.title}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-500 font-medium">
              4.5 star Rating ({phone?.rating})
            </span>
          </div>

          <p className="text-gray-500 font-medium">
            Store:{" "}
            <span className="text-blue-600 font-bold">{phone?.shopName}</span>
          </p>
          <hr className="border-gray-100" />

          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-extrabold text-gray-900">
              ${phone?.newPrice}
            </span>
            {phone.oldPrice && (
              <span className="text-2xl text-gray-400 line-through">
                ${phone?.oldPrice}
              </span>
            )}
          </div>

          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-100 w-fit text-sm font-bold">
            Status: Sold {phone?.soldCount}
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all cursor-pointer">
              <FaShoppingCart /> Add To Cart
            </button>
            <button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              <FaRegHeart /> Wishlist
            </button>
          </div>
        </div>

        {/* 3. Right Sidebar Service Info */}
        <div className="lg:col-span-3 border border-gray-200 rounded-3xl overflow-hidden shadow-sm h-fit">
          <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
            <div className="flex items-center gap-2 font-bold text-sm">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <FaShoppingBag size={14} />
              </div>
              By {phone?.shopName}
            </div>
            <button className="text-xs font-bold border border-gray-300 px-3 py-1 rounded-full">
              View More
            </button>
          </div>

          {/* Blue Sidebar Content */}
          <div className="bg-[#5271FF] text-white p-5 space-y-6">
            {[
              {
                icon: <FaTruck />,
                title: "Fast Delivery",
                desc: "Lightning-fast shipping, guaranteed.",
              },
              {
                icon: <FaUndoAlt />,
                title: "Free 30-day returns",
                desc: "Shop risk-free with easy returns.",
              },
              {
                icon: <FaShoppingBag />,
                title: "Pickup available",
                desc: "Usually ready in 24 hours.",
              },
              {
                icon: <MdOutlinePayment />,
                title: "Payment",
                desc: "Google Pay, Card, Online Payment.",
              },
            ].map((item, indx) => (
              <div key={indx} className="flex gap-4">
                <div className="bg-white/20 p-3 rounded-full h-fit text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: DYNAMIC CONTENT --- */}
      <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-6 p-5 border-b border-gray-100 bg-gray-50/50">
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-bold">
            Description
          </button>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100">
            <MdVerifiedUser className="text-green-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              100% Satisfaction Guaranteed
            </span>
          </div>
        </div>

        <div className="p-10 space-y-12">
          {/* phone Description */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              phone Description
            </h2>
            <div className="text-gray-600 leading-loose max-w-5xl">
              <p className="mb-4">{phone?.description?.text}</p>
              <ul className="space-y-2">
                {phone?.description?.points?.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>{" "}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Specifications */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              phone Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10">
              {phone?.specifications &&
                Object.entries(phone.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-3">
                    <FaCheckCircle
                      className="text-blue-500 shrink-0"
                      size={16}
                    />
                    <p className="text-gray-700 text-sm">
                      <span className="font-bold">{key}:</span> {value}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* More Details */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">More Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {phone?.moreDetails?.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <FaCheckCircle className="text-blue-500 shrink-0" size={14} />
                  <span className="text-gray-700 text-xs font-semibold">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
