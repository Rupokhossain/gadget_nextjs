"use client";
import React, { useState, useMemo, useEffect, use } from "react";
import { LuRotateCcw } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaStar, FaStore, FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";
import AOS from "aos";
import { useProductActions } from "@/hooks/useProductActions";

const ShopClient = ({ initialShops }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const [priceRange, setPriceRange] = useState(1500);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [showOnlyNew, setShowOnlyNew] = useState(false);

  const filteredShops = useMemo(() => {
    return initialShops.filter((product) => {
      const matchPrice = product.newPrice <= priceRange;
      const matchDiscount =
        selectedDiscounts.length === 0 ||
        selectedDiscounts.includes(product.badge);
      const matchNew = !showOnlyNew || product.badge === "New";
      return matchPrice && matchDiscount && matchNew;
    });
  }, [priceRange, selectedDiscounts, showOnlyNew, initialShops]);

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
  };

  const handleReset = () => {
    setPriceRange(1500);
    setSelectedDiscounts([]);
    setShowOnlyNew(false);
  };

  useEffect(() => {
    AOS.refresh();
  }, [priceRange, selectedDiscounts, showOnlyNew]);

  const { handleAddToCart, handleWishlistAction } = useProductActions();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        className="w-full lg:w-[30%] lg:sticky lg:top-48 self-start h-fit space-y-6"
      >
        {/* Filter Box */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl Unbounded">Product Category</h2>
            <button
              onClick={handleReset}
              className="border border-gray-300 px-2 py-1 rounded cursor-pointer hover:border-gray-500 transition-all duration-300 flex items-center gap-2 text-xs"
            >
              <LuRotateCcw size={12} /> Reset
            </button>
          </div>

          {/* Price Range Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-700 text-sm mb-4">
              Price Range: <span className="text-blue-600">${priceRange}</span>
            </h3>
            <input
              type="range"
              min="0"
              max="1500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1.5 bg-blue-100 rounded-full appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Discount & Other Filters */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-700 text-sm mb-3">Discount</h3>
              <div className="space-y-2">
                {["50%", "35%", "30%", "25%", "20%"].map((disc) => (
                  <label
                    key={disc}
                    className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer hover:text-blue-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDiscounts.includes(disc)}
                      onChange={() => handleDiscountChange(disc)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {disc} off
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner Card */}
        <div className="border border-gray-200 rounded-xl p-8 bg-white flex flex-col items-center justify-center text-center shadow-sm">
          <Image
            src="/assets/images/special-snacks-img.webp"
            alt="Gamepad"
            className="w-full h-50 object-contain"
            width={350}
            height={350}
          />
          <h2 className="text-3xl Merienda my-5 text-center leading-tight">
            Numkuda USB 2.0 Gamepad
          </h2>
          <button className="w-full px-6 py-3 my-2 text-lg font-semibold hover:text-[#4B70F5] hover:bg-white border border-black rounded-md bg-black text-white cursor-pointer transition duration-300 flex items-center justify-center gap-2">
            Shop Now <FaShoppingCart size={20} />
          </button>
        </div>
      </aside>

      {/* Product Grid Section */}
      <main className="flex-1">
        {filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {filteredShops.map((p) => {
              const isWishlisted = wishlistItems.some(
                (item) => item.id === p.id
              );

              return (
                <div
                  key={p?.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="bg-white border border-gray-200 hover:shadow-lg rounded-xl p-4 relative transition-all duration-500 flex flex-col h-full group"
                >
                  <button
                    onClick={() => handleWishlistAction(p)}
                    className="absolute top-2 left-2 w-10 h-10 rounded-full bg-[#a9baf93d] text-[#4B70F5] flex justify-center cursor-pointer items-center hover:text-[#4B70F5] transition-all duration-300 z-20"
                  >
                    {isWishlisted ? (
                      <FaHeart className="text-indigo-500 text-lg" />
                    ) : (
                      <CiHeart className="text-xl" />
                    )}
                  </button>

                  {p?.badge && (
                    <div
                      className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-2xl rounded-tr-xl z-10 ${
                        p.badgeType === "discount"
                          ? "bg-red-500"
                          : "bg-yellow-400"
                      }`}
                    >
                      {p?.badge}
                    </div>
                  )}

                  <Link
                    href={`/shops/${p?.id}`}
                    className="flex flex-col h-full"
                  >
                    <div className="relative flex justify-center items-center w-full h-48 overflow-hidden">
                      <Image
                        src={p?.image}
                        alt={p?.title}
                        width={200}
                        height={200}
                        className="max-h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-5 grow space-y-2">
                      <div className="flex items-center gap-2">
                        {p.oldPrice && (
                          <span className="text-gray-500 text-sm line-through">
                            ${p?.oldPrice}
                          </span>
                        )}
                        <span className="text-xl font-semibold">
                          ${p?.newPrice}
                        </span>
                        <span className="text-gray-500 text-sm">/Qty</span>
                      </div>
                      <div className="text-lg text-gray-500 flex items-center gap-1">
                        <FaStore size={12} className="text-blue-600" />
                        <span>By {p?.shopName}</span>
                      </div>
                      <h3 className="text-lg font-normal Unbounded my-2 hover:text-blue-600 transition-all duration-300">
                        {p?.title}
                      </h3>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <FaStar size={12} className="text-yellow-400" />
                          <span className="flex items-center text-yellow-500 text-md">
                            ({p?.rating})
                          </span>
                        </div>
                        <p className="mt-2 text-md Unbounded text-gray-600">
                          Sold:{" "}
                          <span className="text-gray-600">{p?.soldCount}</span>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <button
                    onClick={() => handleAddToCart(p)}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 text-lg font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer "
                  >
                    Add To Cart <CiShoppingCart size={22} />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium">
              No products match your filters.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopClient;
