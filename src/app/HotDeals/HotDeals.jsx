"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../components/Shared/SectionHeading";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";

const HotDeals = ({ phones }) => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  return (
    <div className="container mx-auto px-4 py-10">
      <div>
        <SectionHeading heading="Todays Hot Deals."></SectionHeading>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* --- LEFT SIDE: Promo Banner (w-1/3 on lg) --- */}
        <div className="w-full lg:w-1/3 p-10 rounded-2xl bg-[#4b70f5] flex flex-col justify-center items-center text-center">
          <div>
            <Image
              src="/assets/images/hot-deals-img.webp"
              alt="Desktop Computer"
              width={200}
              height={200}
              className="h-64 object-cover w-full"
            />
          </div>
          <h2 className="text-2xl text-white Merienda my-5 line-clamp-2">
            Desktop Computer PC, Intel Core i5 3.2GHz
          </h2>
          <p className="text-center text-white font-semibold mb-3 line-clamp-2">
            Quasi nulla nihil quis ut quia vero consequatur cupiditate. Odit
            occaecati quia tempore aut ipsa...
          </p>
          <Link href="/shops">
            <button className="px-6 py-3 my-2 text-lg font-semibold text-(--prim-color) bg-white rounded-md text-md hover:bg-black hover:text-white cursor-pointer transition-all duration-300 flex items-center">
              Shop Now <FaShoppingCart size={16} className="pl-1" />
            </button>
          </Link>
        </div>

        {/* --- RIGHT SIDE: Swiper Slider (w-2/3 on lg) --- */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full"
          >
            {phones?.map((phone) => {
              const isWishlisted = wishlistItems.some(
                (item) => item.id === phone.id
              );

              return (
                <SwiperSlide key={phone?.id}>
                  <div className="bg-white border border-gray-100 rounded-xl cursor-pointer  hover:border-[#4B70F5] p-5 flex flex-col group relative hover:shadow-md transition-all duration-300">
                    {/* Badge & Wishlist */}
                    <div className="flex justify-between items-start mb-4">
                      <button
                        onClick={() => dispatch(toggleWishlist(phone))}
                        className="absolute top-2 left-2 w-10 h-10 rounded-full cursor-pointer bg-[#a9baf93d] text-[#4B70F5] flex justify-center items-center hover:bg-[#4B70F5] hover:text-white transition-all duration-300 z-10"
                      >
                        {isWishlisted ? (
                          <FaHeart className="text-red-500 text-lg" />
                        ) : (
                          <CiHeart className="text-xl" />
                        )}
                      </button>
                      {phone?.badge && (
                        <span
                          className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-2xl rounded-tr-xl shadow-md z-10 bg-yellow-400 ${
                            phone?.badgeType === "discount"
                              ? "bg-red-500"
                              : "bg-yellow-400"
                          }`}
                        >
                          {phone?.badge}
                        </span>
                      )}
                    </div>

                    <Link href={`/HotDeals/${phone?.id}`}>
                      {/* phone Image */}
                      <div className="relative w-full h-40 mb-4 overflow-hidden">
                        <Image
                          src={phone?.image}
                          alt={phone?.title}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Price Info */}
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-gray-500 text-sm line-through">
                          ${phone?.oldPrice || "32.99"}
                        </span>
                        <span className="text-xl font-semibold">
                          ${phone?.newPrice}
                        </span>
                        <span className="text-gray-500 text-sm">/Qty</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-normal Unbounded my-2 hover:text-(--prizm-color)transition-all duration-300 line-clamp-2">
                        {phone?.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center text-yellow-500 text-lg">
                        <FaStar />
                        <span className="font-semibold">({phone?.rating})</span>
                      </div>

                      {/* Sold count */}
                      <p className="mt-2 text-md Unbounded text-gray-600">
                        Sold: {phone?.soldCount}
                      </p>
                    </Link>

                    {/* Add to Cart Button */}
                    <button
                      className="w-full px-4 py-2 my-2 text-lg font-semibold text-(--prim-color) bg-(--prim-light) rounded-md text-md hover:bg-(--prim-color) hover:text-white flex items-center gap-2 justify-center cursor-pointer transition"
                      onClick={() => dispatch(addToCart(phone))}
                    >
                      Add To Cart <FaShoppingCart size={14} />
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
