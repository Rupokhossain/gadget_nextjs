import React from "react";
import { LuRotateCcw } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaStar, FaStore } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
  const res1 = await fetch("http://localhost:3000/shops.json", {
    cache: "no-store",
  });
  const shops = await res1.json();

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-72 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-800">
                Product Category
              </h2>
              <button className="text-xs font-bold text-gray-400 hover:text-blue-600 flex items-center gap-1 border border-gray-200 px-3 py-1 rounded-lg">
                <LuRotateCcw size={12} /> Reset
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-700 text-sm mb-4">
                Price Range
              </h3>
              <div className="relative h-1.5 bg-blue-100 rounded-full">
                <div className="absolute h-full w-4/5 bg-blue-600 rounded-full"></div>
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full cursor-pointer"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-2">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Checkbox Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-700 text-sm mb-3">
                  Discount
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />{" "}
                    50% off
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />{" "}
                    30% off
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 text-sm mb-3">Other</h3>
                <label className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600"
                  />{" "}
                  New Products
                </label>
              </div>
            </div>
          </div>

          {/* Sidebar Featured Card */}
          <div className="hidden lg:block">
            
          </div>
        </aside>

        {/* Product Grid */}
{/* Product Grid */}
<main className="flex-1">
  {/* এখানে সরাসরি ম্যাপ (map) করবেন, কোনো মাঝখানের ডিভ ছাড়াই */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
    {shops?.shops?.map((p) => (
      <div
        key={p?.id}
        className="bg-white border border-gray-200 hover:shadow-lg cursor-pointer rounded-xl p-4 relative transition-all duration-300 flex flex-col h-full"
      >
        {/* Top Left: Wishlist Icon */}
        <button className="absolute top-2 left-2 w-10 h-10 rounded-full cursor-pointer bg-[#a9baf93d] text-[#4B70F5] flex justify-center items-center hover:bg-[#4B70F5] hover:text-white transition-all duration-300 z-20">
          <CiHeart className="text-xl" />
        </button>

        {/* Top Right: Badges */}
        {p?.badge && (
          <div
            className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-2xl rounded-tr-xl shadow-md z-10 ${
              p.badgeType === "discount" ? "bg-red-500" : "bg-yellow-400"
            }`}
          >
            {p?.badge}
          </div>
        )}

        <Link href={`/shops/${p?.id}`} className="flex flex-col h-full">
          {/* Product Image */}
          <div className="relative flex justify-center items-center w-full h-48 overflow-hidden">
            <Image
              src={p?.image}
              alt={p?.title}
              width={200}
              height={200}
              className="max-h-full object-contain p-2 hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="mt-5 flex-grow space-y-2">
            <div className="flex items-center gap-2">
              {p.oldPrice && (
                <span className="text-gray-400 text-xs line-through">
                  ${p?.oldPrice}
                </span>
              )}
              <span className="text-lg font-bold text-gray-900">
                ${p?.newPrice}
              </span>
              <span className="text-gray-400 text-xs font-bold">/Qty</span>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1 font-semibold uppercase tracking-wide">
              <FaStore size={12} className="text-blue-600" />
              <span>By {p?.shopName}</span>
            </div>

            <h3 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px]">
              {p?.title}
            </h3>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <FaStar size={12} className="text-yellow-400" />
                <span className="text-xs font-bold text-gray-400">
                  ({p?.rating})
                </span>
              </div>
              <p className="text-xs font-bold text-gray-400">
                Sold: <span className="text-gray-600">{p?.soldCount}</span>
              </p>
            </div>
          </div>
        </Link>

        {/* Add To Cart Button - লিঙ্ক এর বাইরে রাখা ভালো */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
          Add To Cart <CiShoppingCart size={20} />
        </button>
      </div>
    ))}
  </div>
</main>
      </div>
    </div>
  );
};

export default page;
