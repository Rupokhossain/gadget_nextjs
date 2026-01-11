"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiCalendar, CiCircleChevLeft, CiLock } from "react-icons/ci";
import AOS from "aos";

const Page = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, [selectedPostId]);

  const mainPosts = [
    {
      id: 1,
      category: "Smart Living",
      title: "Top 10 Smart Gadgets to Upgrade Your Home in 2025",
      description:
        "From smart speakers and automated lighting to advanced home assistants, 2025 has introduced a new era of intelligent living. These smart gadgets are designed to make your life more comfortable, efficient, and secure by blending AI technology with everyday household needs.",
      date: "October 10, 2025",
      image: "/assets/images/blog-01.webp",
    },

    {
      id: 2,
      category: "Tech",
      title: "Future of AI in Daily Life",
      description:
        "The ElectroHub Mega Sale is here, bringing massive discounts on laptops, gadgets, and accessories from your favorite tech brands. Whether you’re a student looking for a budget-friendly laptop or a gamer upgrading to the latest hardware, we’ve got deals you can’t resist.",
      date: "October 12, 2025",
      image: "/assets/images/blog-02.webp",
    },
    {
      id: 3,
      category: "Review",
      title: "Best Laptops for Students",
      description:
        "With so many smartphones released every year, finding the perfect one can feel overwhelming. From camera quality and battery performance to display type and processing power, every detail plays a role in determining which device fits your lifestyle best.",
      date: "October 14, 2025",
      image: "/assets/images/blog-03.webp",
    },
    {
      id: 4,
      category: "Gadgets",
      title: "Wearable Tech Trends",
      description:
        "Every serious gamer knows that the right accessories can make a world of difference. From precision-engineered mechanical keyboards to immersive surround-sound headsets, having the right tools elevates your performance and overall gaming experience.",
      date: "October 16, 2025",
      image: "/assets/images/blog-04.webp",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Top 10 Smart Gadgets to Upgrade Your Home",
      date: "October 10, 2025",
      image: "/assets/images/blog-01.webp",
    },
    {
      id: 2,
      title: "ElectroHub Mega Sale: Save Big on Laptops",
      date: "October 12, 2025",
      image: "/assets/images/blog-02.webp",
    },
    {
      id: 3,
      title: "How to Choose the Right Smartphone",
      date: "October 14, 2025",
      image: "/assets/images/blog-03.webp",
    },
    {
      id: 4,
      title: "5 Must-Have Gaming Accessories",
      date: "October 15, 2025",
      image: "/assets/images/blog-04.webp",
    },
  ];

  const displayedPosts = selectedPostId
    ? mainPosts.filter((post) => post.id === selectedPostId)
    : mainPosts;
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 xl:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          {/* left section */}
          <div className="w-full lg:w-2/3 gap-5 flex flex-col">
            {selectedPostId && (
              <button
                onClick={() => setSelectedPostId(null)}
                className="flex items-center gap-2 text-(--prim-color) font-bold mb-4 hover:underline cursor-pointer transition-all duration-300"
              >
                <CiCircleChevLeft size={24} /> Show All Posts
              </button>
            )}
            {displayedPosts.map((post, index) => (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group cursor-pointer bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-6 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-4 px-2">
                  <p
                    className="bg-[#E6F9EF] md:p-3 mb-2 rounded-md text-2xl font-medium inline-block Unbounded"
                  >
                    {post?.category}
                  </p>

                  <h2 className="text-2xl md:text-4xl text-gray-900  group-hover:text-blue-600 Unbounded hover:underline transition-all duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-5 md:text-lg text-base border-gray-400">
                    {post.description}
                  </p>
                  <div className="border-t border-t-gray-400"></div>

                  <div className="flex mt-5 gap-5 ">
                    <div className="text-gray-500 flex items-center gap-2 xl:text-sm text-xs">
                      <CiCalendar
                        size={20}
                        className="text-(--prim-color) pr-1"
                      />{" "}
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 xl:text-sm text-xs">
                      <CiLock size={20} className="text-blue-500" /> {post.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full lg:w-1/3 lg:sticky lg:top-48 self-start h-fit"
          >
            <div className="shadow-sm border border-gray-200 rounded">
              <h3 className="border-b border-gray-300 Unbounded text-2xl p-5">
                Recent Posts
              </h3>
              <div className="p-6 flex flex-col gap-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSelectedPostId(post.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex flex-col md:flex-row justify-between items-center mb-5 gap-5 cursor-pointer"
                  >
                    <div className="md:w-1/2 w-full ">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={110}
                        className="md:object-cover rounded-md w-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-2">
                      <h4
                        className={`xl:text-base text-sm font-medium transition-all Unbounded hover:text-(--prim-color) hover:underline duration-300 ${
                          selectedPostId === post.id
                            ? "text-blue-600 Unbounded"
                            : "group-hover:text-(--prim-color) Unbounded"
                        }`}
                      >
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 xl:text-sm text-xs text-gray-500 font-medium">
                        <CiCalendar
                          size={16}
                          className="text-(--prim-color) pr-1"
                        />
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
