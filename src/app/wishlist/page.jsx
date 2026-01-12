"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { FaStar, FaStore } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    AOS.refresh();
  }, [wishlistItems]);

  return (
    <div className="container mx-auto px-4 xl:px-24 py-10 min-h-screen">
      {/* ---(Visible from md screen) --- */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="hidden md:block border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white"
      >
        <table className="w-full text-left border-collapse">
          <thead data-aos="fade-down-right">
            <tr className="bg-[#DEE5FF] text-gray-800 lg:text-lg text-sm">
              <th className="p-4 font-bold">Product</th>
              <th className="p-4 font-bold border-l border-gray-300">Price</th>
              <th className="p-4 font-bold border-l border-gray-300">
                Stock Status
              </th>
              <th className="p-4 font-bold border-l border-gray-300 text-center">
                Add To Cart
              </th>
              <th className="p-4 font-bold border-l border-gray-300">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr
                data-aos="fade-down-left"
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 flex items-center gap-4">
                  <div className="w-36 h-36 border border-gray-300 rounded-xl overflow-hidden p-2 bg-white shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium Unbounded text-sm xl:text-lg line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <FaStore className="text-blue-500" /> By {item.shopName}
                    </p>
                    <div className="text-yellow-500 text-sm flex items-center mt-2">
                      <FaStar />{" "}
                      <span className="text-gray-400 me-1">
                        ({item.rating}) Reviews
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-bold text-gray-800 border-l border-gray-100 text-sm xl:text-lg">
                  ${item.newPrice}
                </td>
                <td className="p-4 border-l border-gray-100 font-bold text-gray-900 text-sm xl:text-lg">
                  In Stock
                </td>
                <td className="p-4 border-l border-gray-100 text-center">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex items-center justify-center gap-2 bg-[#D9E2FF] hover:bg-[#4B70F5] hover:text-white cursor-pointer text-sm xl:text-lg text-[#4B70F5] xl:px-6 xl:py-3 px-4 py-2 rounded-lg font-bold transition-all mx-auto"
                  >
                    Add To Cart <CiShoppingCart size={18} />
                  </button>
                </td>
                <td className="p-4 border-l border-gray-100 text-center">
                  <button
                    onClick={() => dispatch(toggleWishlist(item))}
                    className="text-red-500 font-medium hover:underline duration-300 transition-all cursor-pointer"
                  >
                    <span className="text-sm xl:text-lg">✕</span> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- (Visible only on screens below md) --- */}
      <div className="md:hidden flex flex-col gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4"
          >
            {/* Image */}
            <div className="relative w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Details */}
            <div className="space-y-2">
              <h4 className="Unbounded font-medium text-lg text-gray-900 leading-tight">
                {item.title}
              </h4>
              <p className="text-blue-500 text-sm font-medium flex items-center gap-1">
                <FaStore /> By {item.shopName}
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                <FaStar />{" "}
                <span className="text-gray-400 ml-1">
                  ({item.rating}) Reviews
                </span>
              </div>
            </div>

            {/* Price & Stock info */}
            <div className="flex justify-between items-center py-2 border-y border-gray-50">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase">
                  Price
                </p>
                <p className="text-xl font-black text-gray-900">
                  ${item.newPrice}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs font-bold uppercase">
                  Status
                </p>
                <p className="text-green-600 font-bold">In Stock</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => dispatch(addToCart(item))}
                className="flex items-center gap-2 bg-[#4B70F5] text-white px-5 py-2.5 rounded-lg font-bold text-sm active:scale-95 transition-all shadow-md shadow-blue-100"
              >
                Add to Cart <CiShoppingCart size={18} />
              </button>
              <button
                onClick={() => dispatch(toggleWishlist(item))}
                className="text-red-500 font-bold text-sm hover:underline cursor-pointer"
              >
                ✕ Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* */}
      {wishlistItems.length === 0 && (
        <div className="p-20 text-center text-gray-400 font-bold italic text-lg bg-white rounded-xl border border-dashed border-gray-300">
          No items found in your wishlist!
        </div>
      )}
    </div>
  );
};

export default Wishlist;
