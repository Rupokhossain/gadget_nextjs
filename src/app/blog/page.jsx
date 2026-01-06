"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CiCalendar,
  CiCircleChevLeft,
  CiLock,
  CiRead,
  CiTimer,
} from "react-icons/ci";

const page = () => {
  const [selectedPostId, setSelectedPostId] = useState();

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
      <div className="container mx-auto px-4 lg:px-24">
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
            {displayedPosts.map((post) => (
              <div
                key={post.id}
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
                  <span className="bg-[#E6F9EF] p-3 rounded-md text-2xl Unbounded">
                    {post?.category}
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors Unbounded">
                    {post.title}
                  </h2>
                  <p className="mt-5 text-lg border-gray-400">
                    {post.description}
                  </p>
                  <div className="border-t border-t-gray-400"></div>

                  <div className="flex mt-5 gap-5 ">
                    <div className="text-gray-500 flex items-center gap-2">
                      <CiCalendar
                        size={20}
                        className="text-(--prim-color) pr-1"
                      />{" "}
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <CiLock size={20} className="text-blue-500" /> {post.date}
                    </div>
                  </div>
                </div>

                {/* --- READ MORE BUTTON & MODAL START --- */}
                <div className="mt-4">
                  <button
                    className="btn bg-[#FB5875] hover:bg-[#de2648] border border-gray-200 text-gray-400 py-2 rounded-md px-8 cursor-pointer font-medium transition-all shadow-md"
                    onClick={() =>
                      document.getElementById(`modal_${post.id}`).showModal()
                    }
                  >
                    Read More
                  </button>

                  <dialog id={`modal_${post.id}`} className="modal">
                    <div className="modal-box max-w-4xl h-fit">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>

                      <div className="card-body lg:card-side bg-base-100 shadow-sm">
                        <figure>
                          <Image
                            src={post.image}
                            alt="Album"
                            width={400}
                            height={400}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">New album is released!</h2>
                          <p>Click the button to listen on Spotiwhy app.</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                {/* --- END MODAL --- */}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <aside className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start h-fit">
            <div className="shadow-sm border border-gray-200 rounded">
              <h3 className="border-b border-gray-300 Unbounded text-2xl p-5">
                Recent Posts
              </h3>
              <div className="p-6 flex flex-col gap-8">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSelectedPostId(post.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer"
                  >
                    <div className="w-1/2">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={110}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                      <h4
                        className={`text-lg leading-tight transition-all Unbounded hover:text-var(--prim-color)] hover:underline duration-300 ${
                          selectedPostId === post.id
                            ? "text-blue-600 Unbounded"
                            : "group-hover:text-(--prim-color) Unbounded"
                        }`}
                      >
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
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

export default page;
