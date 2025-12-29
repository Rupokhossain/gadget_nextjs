"use client";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaStar, FaStore } from "react-icons/fa";

const TopSelling = ({ products }) => {
  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        {/* Row of 4: sm:2, lg:4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products?.products?.map((product) => (
            <div
              key={product?.id}
              className="bg-white border border-gray-200 hover:shadow-lg cursor-pointer rounded-xl p-4 relative transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Left: Wishlist Icon */}
              <button className="absolute top-2 left-2 w-12.5 h-12.5 rounded-full cursor-pointer bg-[#a9baf989] text-[#4B70F5] flex justify-center items-center hover:bg-[#4B70F5] hover:text-white transition-all duration-300">
                <CiHeart className="text-xl cursor-pointer" />
              </button>

              {/* Top Right: Badges (New / Discount) */}
              {product?.badge && (
                <div
                  className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold cursor-pointer text-white rounded-bl-2xl rounded-tr-xl shadow-md z-10 ${
                    product.badgeType === "discount"
                      ? "bg-red-500"
                      : "bg-yellow-400"
                  }`}
                >
                  {product?.badge}
                </div>
              )}

              <Link href={`/product/${product?.id}`}>
                {/* Product Image */}
                <div
                onClick={() => handleClick(id)}
                 className="relative flex justify-center items-center w-full h-50 overflow-hidden">
                  <Image
                    src={product?.image}
                    alt={product?.title}
                    width={200}
                    height={200}
                    className="max-h-full object-contain p-2 hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="mt-5 space-y-2.5">
                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    {product.oldPrice && (
                      <span className="text-gray-500 text-sm line-through">
                        ${product?.oldPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold">
                      ${product?.newPrice}
                    </span>
                    <span className="text-gray-500 text-sm">/Qty</span>
                  </div>

                  {/* Shop Info */}
                  <div className="text-lg text-gray-500 flex items-center gap-1">
                    <FaStore size={14} className="text-(--prim-color)" />
                    <span>By {product?.shopName}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-normal Unbounded my-2 hover:text-(--prim-color) cursor-pointer transition-all duration-300 line-clamp-2">
                    {product?.title}
                  </h3>

                  {/* Rating & Sold Info */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-yellow-500 text-md">
                      <FaStar fill="#FACC15" className="text-yellow-400" />
                      <span className="text-md text-yellow-500 pl-1">
                        ({product?.rating})
                      </span>
                    </div>
                    <p className="mt-2 text-md Unbounded text-gray-600">
                      Sold: <span>{product?.soldCount}</span>
                    </p>
                  </div>
                </div>

                {/* Add To Cart Button */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 my-2 text-lg font-semibold text-(--prim-color) bg-(--prim-light) rounded-md text-md hover:bg-(--prim-color) hover:text-white cursor-pointer transition">
                  Add To Cart <CiShoppingCart size={18} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
