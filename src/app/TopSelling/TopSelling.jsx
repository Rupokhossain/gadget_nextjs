"use client"; 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaStar, FaStore, FaHeart } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import SectionHeading from "../components/Shared/SectionHeading";

const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/products.json");
      const data = await res.json();
      setProducts(data.products || []);
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 ">

        <div>
          <SectionHeading heading="Top Selling Items"></SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((p) => {
            const isWishlisted = wishlistItems.some((item) => item.id === p.id);
            return (
              <div
                key={p?.id}
                className="bg-white border border-gray-200 hover:shadow-lg rounded-xl p-4 relative transition-all duration-300 flex flex-col h-full group"
              >

                <button
                  onClick={() => dispatch(toggleWishlist(p))}
                  className="absolute top-2 left-2 w-10 h-10 rounded-full cursor-pointer bg-[#a9baf93d] text-[#4B70F5] flex justify-center items-center hover:bg-[#4B70F5] hover:text-white transition-all duration-300 z-10"
                >
                  {isWishlisted ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <CiHeart className="text-xl" />
                  )}
                </button>

                {/* Badge (New / Discount) */}
                {p?.badge && (
                  <div
                    className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-2xl rounded-tr-xl shadow-md z-10 ${
                      p.badgeType === "discount" ? "bg-red-500" : "bg-yellow-400"
                    }`}
                  >
                    {p?.badge}
                  </div>
                )}


                <Link href={`/TopSelling/${p?.id}`} className="grow">
                  <div className="relative flex justify-center items-center w-full h-48 overflow-hidden">
                    <Image
                      src={p?.image}
                      alt={p?.title}
                      width={200}
                      height={200}
                      className="max-h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2">
                      {p.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">
                          ${p?.oldPrice}
                        </span>
                      )}
                      <span className="text-xl font-semibold text-gray-900">
                        ${p?.newPrice}
                      </span>
                    </div>

                    <div className="text-lg text-gray-500 flex items-center gap-1">
                      <FaStore size={12} className="text-blue-600" />
                      <span>By {p?.shopName}</span>
                    </div>

                    <h3 className="text-xl font-normal Unbounded my-2 hover:text-blue-600 transition-all duration-300 line-clamp-2">
                      {p?.title}
                    </h3>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-yellow-400 text-base">
                        <FaStar fill="currentColor" />
                        <span className="ml-1 text-gray-400">({p?.rating})</span>
                      </div>
                      <p className="text-base font-medium text-gray-600 Unbounded">
                        Sold: <span>{p?.soldCount}</span>
                      </p>
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-[#4B70F5] bg-[#DEE5FF] rounded-lg hover:bg-[#4B70F5] hover:text-white transition-all cursor-pointer"
                >
                  Add To Cart <CiShoppingCart size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;