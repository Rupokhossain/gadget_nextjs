import Image from "next/image";
import React from "react";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const page = async ({ params }) => {
  const { id } = await params; 

  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });

  const data = await res.json();

  
  const product = data.products.find(
    (p) => p?.id?.toString() === id?.toString(id)
  );

  if (!product) {
    return <div className="text-center py-20">Product Not Found</div>;
  }



  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
        <div className="lg:col-span-5 border border-gray-200 rounded-2xl p-6 flex items-center justify-center bg-white h-100 lg:h-125">
          <div className="relative w-full h-full">
            <Image
              src={product?.image}
              alt={product?.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

     
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {product?.title}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-500 font-medium">
              ({product?.rating} Reviews)
            </span>
          </div>

          <p className="text-gray-500 font-medium flex items-center gap-2">
            Store:{" "}
            <span className="text-blue-600 font-bold">{product?.shopName}</span>
          </p>

          <hr className="border-gray-200" />

          <div className="flex items-baseline gap-4">
            <div className="text-4xl font-bold text-gray-900">
              ${product?.newPrice}
            </div>
            {product.oldPrice && (
              <div className="text-xl text-gray-400 line-through">
                ${product?.oldPrice}
              </div>
            )}
          </div>

          <div className="bg-green-100 text-green-800 p-4 rounded-lg border border-green-200 w-fit">
            Status: <span className="font-bold">Sold {product?.soldCount}</span>
          </div>

          <div className="flex gap-4 max-w-md">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              <FaShoppingCart /> Add To Cart
            </button>
            <button className="flex-1 bg-blue-100 text-blue-600 hover:bg-blue-200 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              <FaRegHeart /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
