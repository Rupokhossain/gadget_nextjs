"use client";
import React from "react";
import Image from "next/image";
import { CiCalendar, CiLock } from "react-icons/ci";

const BlogPage = () => {
  const mainPosts = [
    {
      id: 1,
      category: "Smart Living",
      title: "Top 10 Smart Gadgets to Upgrade Your Home in 2025",
      description:
        "From smart speakers and automated lighting to advanced home assistants, 2025 has introduced a new era of intelligent living. These smart gadgets are designed to make your life more comfortable.",
      date: "October 10, 2025",
      image: "/assets/images/blog-01.webp",
    },

    {
      id: 2,
      category: "Tech",
      title: "Future of AI in Daily Life",
      description: "Exploring how AI is reshaping our routines...",
      date: "October 12, 2025",
      image: "/assets/images/blog-02.webp",
    },
    {
      id: 3,
      category: "Review",
      title: "Best Laptops for Students",
      description: "A comprehensive guide to budget-friendly laptops...",
      date: "October 14, 2025",
      image: "/assets/images/blog-03.webp",
    },
    {
      id: 4,
      category: "Gadgets",
      title: "Wearable Tech Trends",
      description: "What's next for smartwatches and fitness trackers...",
      date: "October 16, 2025",
      image: "/assets/images/blog-04.webp",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Top 10 Smart Gadgets to Upgrade Your Home",
      date: "October 10, 2025",
      image: "/assets/images/recent-1.webp",
    },
    {
      id: 2,
      title: "ElectroHub Mega Sale: Save Big on Laptops",
      date: "October 12, 2025",
      image: "/assets/images/recent-2.webp",
    },
    {
      id: 3,
      title: "How to Choose the Right Smartphone",
      date: "October 14, 2025",
      image: "/assets/images/recent-3.webp",
    },
    {
      id: 4,
      title: "5 Must-Have Gaming Accessories",
      date: "October 15, 2025",
      image: "/assets/images/recent-4.webp",
    },
  ];

  return (
<div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SECTION: Main Posts */}
        <div className="w-full lg:w-2/3 space-y-16">
          {mainPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image with proper Aspect Ratio */}
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl mb-6 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1172}
                  height={662}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="space-y-4">
                <span className="inline-block bg-[#E7F7F0] text-[#2D8A5B] px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-6 text-gray-400 text-sm pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <CiCalendar size={20} className="text-blue-500" /> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <CiLock size={20} className="text-blue-500" /> {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION: Recent Posts Sidebar */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm sticky top-28 bg-white">
            <h3 className="text-xl font-bold p-6 border-b border-gray-100">
              Recent Posts
            </h3>
            <div className="p-6 space-y-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-4 group cursor-pointer items-start">
                  <div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-xl border border-gray-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
                      <CiCalendar size={14} className="text-blue-400" />
                      {post.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
