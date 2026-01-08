import Link from "next/link";
import React from "react";

const PromoBannerSection = () => {
  const promoData = [
    {
      id: 1,
      badge: "Best Offer",
      title: "up to 30% off on headphone",
      imageUrl: "/assets/images/offer-img1.webp",
    },
    {
      id: 2,
      badge: "Game Zone",
      title: "dualsense wireless controller",
      imageUrl: "/assets/images/offer-img2.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promoData.map((item, index) => (
          <div
            key={index}
            className="relative h-75 rounded-lg overflow-hidden w-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
          >
            {/* Text Content Area */}
            <div className="absolute z-10 h-full p-8 right-0 top-0 md:w-100 w-full text-end ">
              <span className="my-2 text-lg text-black font-normal bg-white w-fit px-2 rounded-md">
                {item?.badge}
              </span>

              <h2 className="Merienda font-bold text-black text-4xl leading-11 whitespace-pre-line py-3">
                {item?.title}
              </h2>

              <Link href="/shops">
                <button className="px-5 py-3 rounded-full text-white font-bold mt-2 bg-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                  Shop Now
                  <span className="text-xl pl-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBannerSection;
